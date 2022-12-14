const express = require('express');
const authRouter = express.Router() 
const mongoose = require("mongoose")
const User = require('../models/user')
const Issues = require('../models/comment')
const Comments = require('../models/issue')

authRouter.get('/:id', (req, res) => {
   authRouter.get("/", (req, res, next) => {
        item.find((err, items) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(items)
        })
      })
      
    const id = req.params.id
    res.send("this route is working")
});

authRouter.put("/:itemId", (req, res, next) => {
    item.findOneAndUpdate(
      { _id: req.params.itemID},
      req.body,
      {new: true},
      (err, updatedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedItem)
      }
    )  
  })

authRouter.delete("/:itemId", (req, res, next) => {
    item.findOneAndDelete(
      {_id: req.params.itemsId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
  })


    authRouter.post('/', (req, res) => {
        const newItem = new item (req.body)
        newItem.save((err, savedItem) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedItem)
        })
      })



module.exports = (authRouter)
