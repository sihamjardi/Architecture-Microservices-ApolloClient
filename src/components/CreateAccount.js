import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_ACCOUNT } from '../graphql/mutations';
import { AccountType } from '../graphql/types';

const CreateAccount = () => {
  const [balance, setBalance] = useState('');
  const [type, setType] = useState(AccountType.CHECKING);

  const [saveAccount] = useMutation(SAVE_ACCOUNT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveAccount({
        variables: {
          account: { balance: parseFloat(balance), type },
        },
      });
      setBalance('');
      setType(AccountType.CHECKING);
      alert("Compte créé avec succès !");
    } catch (error) {
      console.error('Erreur lors de la création du compte :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-2">Créer un compte</h2>

      <label className="block mb-2">
        Solde initial :
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          required
          className="ml-2 p-1 border rounded"
          placeholder="Entrez le solde"
        />
      </label>

      <label className="block mb-2">
        Type de compte :
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="ml-2 p-1 border rounded"
        >
          <option value={AccountType.CHECKING}>Courant</option>
          <option value={AccountType.SAVINGS}>Épargne</option>
        </select>
      </label>

      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Créer le compte
      </button>
    </form>
  );
};

export default CreateAccount;
