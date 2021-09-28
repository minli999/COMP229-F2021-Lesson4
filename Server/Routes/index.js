"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const game_1 = __importDefault(require("../Models/game"));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact' });
});
/* Get games-list */
router.get('/games-list', function (req, res, next) {
    game_1.default.find((err, gamesCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
});
//module.exports = router;
//# sourceMappingURL=index.js.map