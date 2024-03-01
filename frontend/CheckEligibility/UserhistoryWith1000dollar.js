const { ethers } = require("ethers");
const axios = require("axios");

async function checkUsage() {
  try {
    const address = "0x4b34f943181408eac424116af7b7790c94cba8b6";
    const usdThreshold = 1000; // Set the threshold in USD

    const baseScanApiKey = "3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39";
    const baseScanUrl = `https://api.basescan.org/api?module=account&action=txlist&address=${address}&apikey=${baseScanApiKey}`;

    const response = await axios.get(baseScanUrl);

    if (response.data.status === "1") {
      const history = response.data.result;

      // Loop through each transaction in the history
      for (const tx of history) {
        const etherAmount = ethers.utils.formatUnits(tx.value, "ether");
        const etherAmountNumber = parseFloat(etherAmount);

        // Note: The exchange rate should be obtained from a reliable source
        const etherToUsdExchangeRate = 3100;

        // Calculate the USD value of the transaction
        const usdValue = etherAmountNumber * etherToUsdExchangeRate;

        // Check if the USD value meets the threshold
        if (usdValue >= usdThreshold) {
          // Log information about the transaction (optional)
          console.log(
            `Transaction Amount: ${etherAmountNumber} Ether (≥ $${usdThreshold} USD)`
          );
          console.log(`Tx Hash: ${tx.hash}`);
          console.log(`Block Number: ${tx.blockNumber}`);
          console.log(
            `Timestamp: ${new Date(tx.timeStamp * 1000).toISOString()}`
          );
          console.log(`From: ${tx.from}`);
          console.log(`To: ${tx.to}`);
          console.log("--------------------");

          // Return true if any transaction meets the condition
          return true;
        }
      }
    } else {
      console.error("BaseScan API error:", response.data.message);
    }

    // Return false if no transaction meets the condition
    return false;
  } catch (error) {
    console.error("Error:", error);
    // Return false in case of an error
    return false;
  }
}

// Call the function and log the result
const hasTransactionsAboveThreshold = async () => {
  const result = await checkUsage();
  console.log("Has Transactions Above Threshold:", result);
};

hasTransactionsAboveThreshold();
