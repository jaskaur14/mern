const Joke = require("../models/jokes.model");

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const getJokeById = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((joke) => {
            res.json({ joke: joke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.json({ jokes: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id }, 
        req.body, 
        { new: true, runValidators: true,}
    )
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
    
module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
};