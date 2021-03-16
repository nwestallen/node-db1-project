const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId =  (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  Account.getById(id)
  .then(user => {
    if(!user) {
      res.status(404).json({message: 'account not found'})
    } else {
      req.user = user
      next()
    }
  })
 .catch(err => next(err)); 
};
