const router = require('express').Router();
const Account = require('./accounts-model');

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
  .then(accounts => res.json(accounts))
  .catch(err => res.status(500).json({message: 'Encountered server error'}));
});

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  Account.getById(req.params.id)
  .then(account => res.json(account))
  .catch(err => res.status(500).json({message: 'Encountered server error'}));
});

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
