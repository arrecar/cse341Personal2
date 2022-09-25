const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//Get all Contacts
router.get('/', contactsController.getAll);

//Get contact by ID
router.get('/:id', contactsController.getSingle);

//Create a contact
router.post('/', contactsController.createContact);

//Update contact based on ID
router.put('/:id', contactsController.updateContact);

//Delete contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;