var Connection = require('./connection');

/**
 * @param {string} address. {@link Connection.address}
 * @param {Object} [options]. {@link Connection.options}
 * @constructor
 */
function Client(address, options) {
  this._address = address;
  this._options = options || {};
}

/**
 * @param {string} id
 * @return {Promise}
 */
Client.prototype.createConnection = function(id) {
  var connection = Connection.create(id, this._address, this._options);
  return connection.open().return(connection);
};

module.exports = Client;
