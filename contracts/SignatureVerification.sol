// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract SignatureVerification is Ownable {
    using ECDSA for bytes32;
    string private encryptedMessage;


    function Verify(address signer,   bytes memory signature) external view returns(bool){
        bytes32 messageHash = getMessageHash();
        bytes32 ethsignatureMessageHash = getEthSignedMessageHash(messageHash);
        return recover(ethsignatureMessageHash,signature ) == signer;
    }


    function getMessageHash() public view returns(bytes32){
        return keccak256(abi.encodePacked(encryptedMessage));
    }

    function getEthSignedMessageHash(bytes32 messageHash) public pure returns (bytes32) {
    return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));
    }


    function recover(bytes32 ethsignedmessage, bytes memory signature) public pure returns(address) {
   (bytes32 r, bytes32 s, uint8 v) = _split(signature);
    return ecrecover(ethsignedmessage, v, r, s);
    }

    function setencryptedMessage(string memory message) external  onlyOwner  {
        encryptedMessage = message;
    }
  function _split(bytes memory signature) internal pure returns (bytes32 r, bytes32 s, uint8 v) {
    require(signature.length == 65, "Invalid signature");

    assembly {
        // Slice the signature into r, s, and v
        r := mload(add(signature, 32))
        s := mload(add(signature, 64))
        v := byte(0, mload(add(signature, 96)))
    }
    
}

    }


    
