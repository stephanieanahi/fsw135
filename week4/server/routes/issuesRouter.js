const express = require('express');
const itemsRouter = express.Router() 
const mongoose = require("mongoose")
const Issue = require('../models/issue')

 itemsRouter.get("/user", (req, res, next) => {
  console.log(req.auth)
        Issue.find({user:req.auth._id},(err, items) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(items)
        })
      })
      itemsRouter.get('/:id', (req, res) => {
    const id = req.params.id
    res.send("this route is working")
});

itemsRouter.put("/:itemId", (req, res, next) => {
  Issue.findOneAndUpdate(
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

itemsRouter.delete("/:itemId", (req, res, next) => {
    Issue.findOneAndDelete(
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


    itemsRouter.post('/', (req, res) => {
      req.body.user= req.auth._id
        const newIssue = new Issue(req.body)
        newIssue.save((err, savedItem) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedItem)
        })
      })
        
    module.exports = (itemsRouter)