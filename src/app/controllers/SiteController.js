const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    home(req, res, next) {
        Course.find({})
            .then(function (courses) {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
