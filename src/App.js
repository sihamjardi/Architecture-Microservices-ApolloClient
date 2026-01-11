// src/App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

import AccountList from './components/AccountList';
import CreateAccount from './components/CreateAccount';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

import './index.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Gestion des comptes et transactions
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <CreateAccount />
              <AccountList />
            </div>
            <div className="space-y-6">
              <TransactionForm />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
