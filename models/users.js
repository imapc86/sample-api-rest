
const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    
});


//* Remover atributos del objeto devuelto por el método .toJSON()
UserSchema.methods.toJSON = function() {
  const { __v, password, ...user  } = this.toObject();
  return user;
}

module.exports = model( 'User', UserSchema );
