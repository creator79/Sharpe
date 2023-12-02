

// src/utils/validation.js
export const validateWalletAddress = (address) => {
    // Add logic to validate Ethereum wallet address
    return address !== ''  && address.startsWith('0x') && address.match(/^(0x)?[0-9a-fA-F]{40}$/) ;
  };

  
  
  export const validateAmount = (amount) => {
   
    return !isNaN(amount)  ;
  };
  