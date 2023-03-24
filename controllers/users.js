const { response, request } = require('express');

const usersGet = async(req = request, res = response) => {

  res.json({
    msg: 'usersGet works!'
  });
}


module.exports = {
  usersGet,
}