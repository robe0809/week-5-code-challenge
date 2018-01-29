const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const messageSchemaModule = require('../modules/schema.module.js');



let messageSchema = messageSchemaModule;
let Message = mongoose.model('Message', messageSchema);

router.post('/', (req, res) => {
    console.log('data to save', req.body);
    // create an instance of our model
    let commentToAdd = new Message (req.body);

    // create a new document in our database and collection
    commentToAdd.save((error, savedComment) => {
        if(error) {
            console.log('error on save', error);   
            res.sendStatus(500);
        } else {
            console.log('new comment:', savedComment);
            res.sendStatus(201);
        }
    })
});

router.get('/', (req, res) => {
    // 
    Message.find({}, (error, foundMessage) => { // empty object get everything
        if(error) {
            console.log('error on find', error);   
            res.sendStatus(500);
        } else {
            console.log('new game Document:', foundMessage);
            res.send(foundMessage);
        }
    }) 
})

module.exports = router;