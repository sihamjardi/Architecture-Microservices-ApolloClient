import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ACCOUNTS } from '../graphql/queries';

const AccountList = () => {
  const { loading, error, data } = useQuery(GET_ALL_ACCOUNTS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liste des comptes</h2>
      {data.allAccounts.map((account) => (
        <div key={account.id} className="p-4 mb-2 border rounded shadow">
          <p>ID : {account.id}</p>
          <p>Solde : {account.balance} €</p>
          <p>Date de création : {new Date(account.creationDate).toLocaleDateString()}</p>
          <p>Type : {account.type}</p>
        </div>
      ))}
    </div>
  );
};

export default AccountList;
