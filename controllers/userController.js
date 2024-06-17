const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.showNewUserForm = (req, res) => {
    res.render('newUserForm');
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.showEditUserForm = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('editUserForm', { user });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err); 
    }
};