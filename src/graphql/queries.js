// src/graphql/queries.js
import { gql } from '@apollo/client';

// Récupérer tous les comptes
export const GET_ALL_ACCOUNTS = gql`
query GetAllAccounts {
  allAccounts {
    id
    balance
    creationDate
    type
  }
}
`;

// Récupérer les transactions d’un compte
export const GET_ACCOUNT_TRANSACTIONS = gql`
query GetAccountTransactions($id: ID!) {
  accountTransactions(id: $id) {
    id
    type
    amount
    date
    account {
      id
      balance
      type
    }
  }
}
`;
// Récupérer toutes les transactions
export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    allTransactions {
      id
      type
      amount
      date
      account {
        id
        balance
        type
      }
    }
  }
`;
