const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validation = require('../middleware/validate');


//Get all Contacts
router.get('/', contactsController.getAll);

//Get contact by ID
router.get('/:id', contactsController.getSingle);

//Create a contact
router.post('/', validation.saveContact, contactsController.createContact);

//Update a contact
router.put('/:id', validation.saveContact, contactsController.updateContact);

//Delete contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;