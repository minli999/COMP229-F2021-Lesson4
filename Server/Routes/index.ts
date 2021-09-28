import express from 'express';
const router = express.Router();
export default router;

import Game from '../Models/game';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});

/* Get games-list */
router.get('/games-list', function(req, res, next)
{
  Game.find((err, gamesCollection) =>
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
  });
});

//module.exports = router;
