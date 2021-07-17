const {response} = require ('express');
const Movie = require('../models/Movie');
const Comment = require('../models/Comment');
const User = require('../models/User');

const create = async(req,res) => {
    try{
          const Movie = await Movie.create(req.body);
          return res.status(201).json({message: "Filme foi cadastrado", Movie: Movie});
      }catch(err){
          res.status(500).json({error: err, message: "ERRO"});
      }
};

const index = async(req,res) => {
    try {
        const Movie = await Movie.findAll();
        return res.status(200).json({message: "Filmes foram encontrados", Movie});
    }catch(err){
        return res.status(500).json({err, message: "Erro"});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const Movie = await Movie.findByPk(id);
        return res.status(200).json({message: "Filme foi encontrado", Movie});
    }catch(err){
        return res.status(500).json({err, message: "ERRO"});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Movie.update(req.body, {where: {id: id}});
        if(updated) {
            const Movie = await Movie.findByPk(id);
            return res.status(200).send(Movie);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("ERRO na atualização");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Movie.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Filme excluído com sucesso");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("ERRO");
    }
};

const searchByScore = async(req,res) => {
    const {score} = req.params;
    try {
        const Movie = await Movie.findAll({where: {score: score}});
        return res.status(200).json({message: "Filme(s) encontrado(s)", Movie});
    }catch(err){
        return res.status(500).json({err, message: "ERRO"});
    }
};

module.exports = {
    index,
    show,
    searchByScore,
    create,
    update,
    destroy
};
