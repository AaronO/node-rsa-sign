var crypto = require('crypto');

function Signer(key) {
    if(!(this instanceof Signer)) {
        return new Signer(key);
    }

    this.key = key;

    // Bind methods
    this.sign = this.sign.bind(this);
}

// data and signature should both be buffers
// encoding is optional and should be either 'base64', 'hex' or 'binary'
Signer.prototype.sign = function(data, encoding) {
    // PKCS1v15 - RSA & SHA1
    var signer = crypto.createSign('RSA-SHA1');

    // Add data to sign
    signer.update(data);

    return signer.sign(this.key, encoding);
};

module.exports = Signer;
