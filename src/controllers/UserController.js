const {response} = require ('express');
const Movie = require('../models/Movie');
const Comment = require('../models/Comment');
const User = require('../models/User');

const create = async(req,res) => {
    try{
          const user = await User.create(req.body);
          return res.status(201).json({message: "Seu cadastro foi criado!", user: user});
      }catch(err){
          res.status(500).json({message: "Erro", error: err});
      }
};

const index = async(req,res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({message: "Usuários foram encontrados!", users});
    }catch(err){
        return res.status(500).json({message: "Erro", err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({message: "Usuário foi encontrado!", user});
    }catch(err){
        return res.status(500).json({message: "Erro", err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário removido!");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const watch = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const movie = await Movie.findByPk(req.body.MovieId);
        if(movie) {
            await user.addWatchedList(movie);
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const unwatch = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const movie = await User.findByPk(req.body.MovieId);
        if(movie) {
            await user.removeWatchedList(movie);
            return res.status(200).json(user);
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

const listWatched = async(req,res) => {
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        const watched = await user.getWatchedList();
        return res.status(200).json({watched});
    }catch(err){
        return res.status(500),json("Erro");
    }
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    watch,
    unwatch,
    listWatched
};
