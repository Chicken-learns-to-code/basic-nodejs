const Me = require('../models/Course');
const {  mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) { 
        Me.find({})
        .then(me => res.render('me/stored-courses',{
            me: mutipleMongooseToObject(me)
        }))
        .catch(next);
        //res.render('me/stored-courses')
    }
}
module.exports = new MeController; //Export out , được khởi tạo