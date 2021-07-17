const { Router } = require('express');
const UserController = require('../controllers/UserController');
const CommentController = require('../controllers/CommentController');
const MovieController = require('../controllers/MovieController');

const router = Router();

router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);
router.put('/addWatchList/:id',UserController.watch);
router.put('/removeWatchList/:id',UserController.unwatch);
router.get('/watchedList/:id',UserController.listWatched);

router.get('/comments',CommentController.index);
router.get('/comments/:id',CommentController.show);
router.post('/comments',CommentController.create);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.destroy);
//router.put('/commentsadduser/:id', CommentController.addRelationUser);
//router.delete('/commentsremoveuser/:id', CommentController.removeRelationUser);

router.get('/movies',UserController.index);
router.get('/movies/:id',UserController.show);
router.post('/movies',UserController.create);
router.put('/movies/:id', UserController.update);
router.delete('/movies/:id', UserController.destroy);
router.get('/moviesByScore/:score',MovieController.searchByScore);


module.exports = router;

