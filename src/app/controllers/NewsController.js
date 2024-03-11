class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Welcome')
    }

}

module.exports = new NewsController;