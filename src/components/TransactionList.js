import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TRANSACTIONS } from '../graphql/queries';

const TransactionList = () => {
  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liste des transactions</h2>
      {data.allTransactions.map((t) => (
        <div key={t.id} className="p-2 mb-2 border rounded shadow">
          <p>ID : {t.id}</p>
          <p>Type : {t.type}</p>
          <p>Montant : {t.amount} €</p>
          <p>Date : {new Date(t.date).toLocaleDateString()}</p>
          <p>Compte ID : {t.account.id}</p>
          <p>Solde compte : {t.account.balance} €</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
