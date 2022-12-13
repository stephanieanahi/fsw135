const express = require('express');
const itemsRouter = express.Router() 
const mongoose = require("mongoose")
const Inventory = require('./../models/inventory')





itemsRouter.get('/:id', (req, res) => {
    itemsRouter.get("/", (req, res, next) => {
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

itemsRouter.put("/:itemId", (req, res, next) => {
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

itemsRouter.delete("/:itemId", (req, res, next) => {
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


    itemsRouter.post('/', (req, res) => {
        const newItem = new item (req.body)
        newItem.save((err, savedItem) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(savedItem)
        })
      })
        
    module.exports = (itemsRouter)