const crypto = require('crypto');

const salt = 'H19Afdae1Smpew7fkmaeifDS';

const getHashedPassword = (password) =>{
  const saltPassword = `${salt}${password}`;
  const sha224 = crypto.createHash('sha224');
  const hash = sha224.update(saltPassword).digest('base64');
  return hash;
}

module.exports = getHashedPassword;
