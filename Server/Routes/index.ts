import express from 'express';
const router = express.Router();
export default router;

// get a reference to the Game Model Class
import Game from '../Models/game';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About', page: 'About me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'My Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'My Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact', page: 'Contact me' });
});

/* Get games-list */
router.get('/games-list', function(req, res, next)
{
  // db.games.find()
  Game.find(function(err, gamesCollection)
  {
    if(err)
    {
      console.error(err);
      res.end(err); // stop if there is a error
    }

    console.log(gamesCollection);
  });
});

//module.exports = router;
