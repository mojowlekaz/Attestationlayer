// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./SignatureVerification.sol";

contract AttestationLayer is ERC721Enumerable, Ownable {
    SignatureVerification public signatureVerification;
    using ECDSA for bytes32;
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private tokenIdCounter;
    string public baseUri;
    string public baseExtension = ".json";
    bool public isSaleActive;
    uint256 fee = 0.00012 ether;
    mapping(address => bool) public isMinted;
    address public hubAddress;


    mapping(address => uint256) public userPoints;
    mapping(address => uint256) public lastClaimedTimestamp;
    uint256 constant SECONDS_IN_DAY = 86400;



    event PointsClaimed(address indexed user, uint256 points);

    constructor(address _signatureVerification) ERC721("Attestation Layer", "ATL") {
        signatureVerification = SignatureVerification(_signatureVerification);
        baseUri = "ipfs://bafybeid2kqefjbd2kp4hozar4e2evtflqgykajs42uxeocs3ri4ieajzaa/";
        hubAddress = msg.sender;
    }

    function mint(bytes memory signature) public payable returns (uint256) {
        require(isSaleActive, "The sale is paused.");
        require(signatureVerification.Verify(msg.sender, signature), "Invalid Signature");
        require(!isMinted[msg.sender], "Already Minted!");
        require(msg.value >= fee, "Insufficient funds!");
        tokenIdCounter.increment();
        _safeMint(msg.sender, tokenIdCounter.current());
        isMinted[msg.sender] = true;
    }

    function airdrop(address[] memory addresses, uint256 _mintAmount) external onlyOwner {
        require(_mintAmount > 0, "Invalid mint amount!");

        for (uint256 i = 0; i < addresses.length; i++) {
            for (uint256 j = 0; j < _mintAmount; j++) {
                tokenIdCounter.increment();
                _safeMint(addresses[i], tokenIdCounter.current());
            }
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
            : "";
    }

    function flipSaleState() external onlyOwner {
        isSaleActive = !isSaleActive;
    }

    function claimPoints() external {
        require(block.timestamp >= lastClaimedTimestamp[msg.sender] + SECONDS_IN_DAY, "Can only claim once per day");
        lastClaimedTimestamp[msg.sender] = block.timestamp;
        userPoints[msg.sender]++;
        emit PointsClaimed(msg.sender, userPoints[msg.sender]);
    }

    function withdraw() external onlyOwner {
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "Insufficient balance");
        payable(hubAddress).transfer(contractBalance);
    }

    receive() payable external{}

    // Override functions required by solidity
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override virtual {
        require(to == address(0) || from == address(0), "NonTransferrableNFT: Transfer not allowed");
    }
}
