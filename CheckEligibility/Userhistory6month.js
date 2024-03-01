const { ethers } = require("ethers");
const axios = require("axios");

const userAddress = "0x4B34F943181408eac424116Af7b7790C94cba8B6";
const etherscanApiKey = "3FCW2HXWNTSZA9T8B7QD5AFSDP1BZQTX39";

async function getActivationTimestamp() {
  try {
    // Get the latest transactions for the user from Etherscan
    const etherscanUrl = `https://api.basescan.org/api?module=account&action=txlist&address=${userAddress}&apikey=${etherscanApiKey}`;

    const response = await axios.get(etherscanUrl);

    if (response.data.status === "1") {
      const transactions = response.data.result;

      if (transactions.length > 0) {
        // Get the timestamp of the earliest transaction
        const activationTimestamp = parseInt(transactions[0].timeStamp, 10);
        return activationTimestamp;
      } else {
        console.log("No transactions found for the user.");
        return null;
      }
    } else {
      console.error("Etherscan API error:", response.data.message);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

async function checkUsage() {
  try {
    // Get the activation timestamp
    const activationTimestamp = await getActivationTimestamp();

    if (activationTimestamp !== null) {
      // Get the current timestamp
      const currentTimestamp = Math.floor(Date.now() / 1000);

      // Calculate the time elapsed since activation in seconds
      const timeElapsedSeconds = currentTimestamp - activationTimestamp;

      console.log("Activation Timestamp:", activationTimestamp);
      console.log("Current Timestamp:", currentTimestamp);
      console.log("Time Elapsed (seconds):", timeElapsedSeconds);

      const numberOfMonths = 6;

      // Calculate the duration in seconds
      const monthsInSeconds = numberOfMonths * 30.44 * 24 * 3600;

      if (timeElapsedSeconds > monthsInSeconds) {
        console.log("User has been using Ethereum for over 6 months.");
      } else {
        console.log("User has not been using Ethereum for over 6 months.");
      }
    } else {
      console.log("No activation timestamp found for the user.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

checkUsage();
