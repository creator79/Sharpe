import React, { useState } from 'react';
import { validateWalletAddress } from '../utils/validation';

import { db } from '../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';

function Transaction() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const collectionPath = 'Transaction'; // Specify the Firestore collection path
  const dbref = collection(db, collectionPath);

  const handleSubmit = async () => {
    if (!walletAddress.trim()) {
      setError('Wallet Address should not be empty');
      return;
    }
  
    if (!validateWalletAddress(walletAddress)) {
      setError('Wallet Address should be a valid Ethereum address of 42 characters length and starts with 0x');

      return;
    }
  
    if (!amount.trim()) {
      setError('Amount should not be empty');
      return;
    }
  
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setError('Amount should be a number between 0 and 10,000');
      return;
    }
  
    try {
      // If data doesn't exist, add it to the database
      await addDoc(dbref, { Wallet: walletAddress, Amount: amountValue });
      alert('Data Added Successfully');
  
      // Reset form data after successful submission
      setWalletAddress('');
      setAmount('');
      setError('');
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <div>
      <h2 className='text-xl font-bold text-center mx-[2rem] py-4 mb-8'>Transaction Page</h2>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="walletAddress" className="block mb-2 text-sm font-medium text-gray-900">
            Wallet Address:
          </label>
          <input
            type="text"
            id="walletAddress"
            className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        {error && <p className='text-red-700 py-2 mb[-1rem]'>{error}</p>}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-[9rem]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Transaction;
