import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRANSACTION } from '../graphql/mutations';
import { TransactionType } from '../graphql/types';

const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState(TransactionType.DEPOSIT);
  const [accountId, setAccountId] = useState('');

  const [addTransaction] = useMutation(ADD_TRANSACTION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction({
        variables: {
          transactionRequest: { type, amount: parseFloat(amount), accountId },
        },
      });
      setAmount('');
      setType(TransactionType.DEPOSIT);
      setAccountId('');
      alert("Transaction ajoutée !");
    } catch (error) {
      console.error("Erreur transaction : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Ajouter une transaction</h2>

      <label className="block mb-2">
        Montant :
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="ml-2 p-1 border rounded"
        />
      </label>

      <label className="block mb-2">
        Type :
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2 p-1 border rounded"
        >
          <option value={TransactionType.DEPOSIT}>Dépôt</option>
          <option value={TransactionType.WITHDRAWAL}>Retrait</option>
        </select>
      </label>

      <label className="block mb-2">
        ID du compte :
        <input
          type="text"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          required
          className="ml-2 p-1 border rounded"
        />
      </label>

      <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Ajouter
      </button>
    </form>
  );
};

export default TransactionForm;
