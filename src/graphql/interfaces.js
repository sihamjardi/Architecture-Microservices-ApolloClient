
/**
 * Un compte
 * @typedef {Object} Account
 * @property {string} id
 * @property {number} balance
 * @property {string} creationDate
 * @property {string} type
 */

/**
 * Une transaction
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {string} type
 * @property {number} amount
 * @property {string} date
 * @property {Account} account
 */

/**
 * Objet pour créer un compte
 * @typedef {Object} AccountRequest
 * @property {number} balance
 * @property {string} type
 */

/**
 * Objet pour créer une transaction
 * @typedef {Object} TransactionRequest
 * @property {string} type
 * @property {number} amount
 * @property {string} accountId
 */
