class NewController {
    // [GET] /news
    index(req , res) {
        res.render('news');
    }
    // [GET] /news:slug
    show(req, res) {
        res.send('detail!');
    }
}
module.exports = new NewController; //Export out , được khởi tạo