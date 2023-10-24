const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.status(200).json({ authors: allAuthors })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => {
            res.status(200).json({ author: oneAuthor })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.status(200).json({ author: newlyCreatedAuthor })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            console.log("We made it!!!!")
            res.status(200).json({ note: updatedAuthor })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}
