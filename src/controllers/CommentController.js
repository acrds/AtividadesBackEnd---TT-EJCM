const {response} = require ('express');
const Movie = require('../models/Movie');
const Comment = require('../models/Comment');
const User = require('../models/User');

const create = async(req,res) => {
    try{
          const comment = await Comment.create(req.body);
          return res.status(201).json({message: "Seu comentário foi criado.", comment: comment});
      }catch(err){
          res.status(500).json({error: err, message: "Erro"});
      }
};

const index = async(req,res) => {
    try {
        const comments = await Comment.findAll();
        return res.status(200).json({message: "Encontrado com sucesso!", comments});
    }catch(err){
        return res.status(500).json({err, message: "Erro"});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        return res.status(200).json({message: "Encontrado com sucesso!", comment});
    }catch(err){
        return res.status(500).json({err, message: "Erro"});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Comment.update(req.body, {where: {id: id}});
        if(updated) {
            const comment = await Comment.findByPk(id);
            return res.status(200).send(comment);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Erro na atualização de comentário");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Comment.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Comentário foi deletado!");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Erro");
    }
};

/*const addRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        const user = await User.findByPk(req.body.UserId);
        await comment.setUser(user);
        return res.status(200).json({message: "Relacionamento Criado", comment});
    }catch(err){
        return res.status(500).json({err, message: "Erro"});
    }
};

const removeRelationUser = async(req,res) => {
    const {id} = req.params;
    try {
        const comment = await Comment.findByPk(id);
        await comment.setUser(null);
        return res.status(200).json({message: "Relacionamento removido", comment});
    }catch(err){
        return res.status(500).json({message: "Erro", err});
    }
};*/

module.exports = {
    index,
    show,
    create,
    update,
    destroy
    //addRelationUser,
   // removeRelationUser
};
