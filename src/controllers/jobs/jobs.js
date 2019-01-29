const mongoose = require('mongoose');
const Job = require('../../models/Job');

const controllers = {
  index: (req, res) => {
      Job
        .find()
        .exec()
        .then(data => {
          res.json({
          type: "Reading Jobs",
          data: data
          })
          .status(200)
        })
        .catch(err =>{
          console.log(`Caught error: ${err}`);
          return res.status(500).json(err);
        })
    },
    create: (req, res) => {
      const newJob = new Job({
      _id: mongoose.Types.ObjectId(),
      description: req.body.description,
      hiringDate: req.body.hiringDate,
      salary: req.body.salary,
      location: req.body.location,
      contactEmail: req.body.contactEmail,
      isStillAvailable: req.body.isStillAvailable
    });

    newJob
    .save()
    .then(data => {
      res.json({
        type: "Job created",
        data: data
      })
      .status(200)
    })
    .catch(err => {
      console.log ( `Caught error: ${err}`);
      return res.status(500).json(err);
    })
  },

  findBy: (req, res) => {
    Job
    .findById(req.params.id)
    .then(data => {
      res.json({
        type: "Job found",
        data: data
        })
        .status(200)
      })
      .catch(err =>{
        console.log(`Caught error: ${err}`);
        return res.status(500).json(err);
      })
  },

  deleteBy: (req, res) => {
    Job
    .deleteOne({ _id: req.params.id})
    .then( data => {
      res.json({
        type: "Job removed",
        data: data
      })
      .status(200)
    })
      .catch(err => {
        console.log(`Caught error: ${err}`);
        return res.status(500).json(err);
      })
  },
  update: (req, res) => {
    Job
    .updateOne({_id: req.params.id},
      {description: req.body.description,
      hiringDate: req.body.hiringDate,
      salary: req.body.salary,
      location: req.body.location,
      contactEmail: req.body.contactEmail,
      isStillAvailable: req.body.isStillAvailable})
    .then( data => {
      res.json({
        type: "Job updated",
        data: data
      })
      .status(200)
    })
      .catch(err => {
        console.log(`Caught error: ${err}`);
        return res.status(500).json(err);
      })
  }
}

module.exports = controllers;
