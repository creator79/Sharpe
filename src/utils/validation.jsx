// src/utils/validation.js
export const validateWalletAddress = (address) => {
    // Add logic to validate Ethereum wallet address
    return address !== '' ;
  };
  
  export const validateAmount = (amount) => {
    // Add logic to validate amount
    return !isNaN(amount)  ;
  };
  