const router = require('express').Router();
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware');
const Account = require('./accounts-model');
const express = require('express');
router.use(express.json());

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
  .then(accounts => res.json(accounts))
  .catch(err => next(err));
});

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Account.getById(req.params.id)
  .then(account => res.json(account))
  .catch(err => next(err));
});

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  const newAccount = req.body;
  Account.create({...newAccount, name: newAccount.name.trim()})
  .then(account => res.status(201).json(account))
  .catch(err => next(err));
});

router.put('/:id', checkAccountId, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  Account.updateById(req.params.id, req.body)
  .then(acct => res.json(acct))
  .catch(err => next(err));
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  Account.deleteById(req.params.id)
  .then(account => res.json(account))
  .catch(err => next(err));
});

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
});

module.exports = router;
