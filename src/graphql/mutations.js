// src/graphql/mutations.js
import { gql } from '@apollo/client';

// Créer un compte
export const SAVE_ACCOUNT = gql`
mutation SaveAccount($account: AccountRequest!) {
  saveAccount(account: $account) {
    id
    balance
    creationDate
    type
  }
}
`;

// Ajouter une transaction
export const ADD_TRANSACTION = gql`
mutation AddTransaction($transactionRequest: TransactionRequest!) {
  addTransaction(transactionRequest: $transactionRequest) {
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

// Supprimer un compte
export const DELETE_ACCOUNT = gql`
mutation DeleteAccount($id: ID!) {
  deleteAccount(id: $id)
}
`;
