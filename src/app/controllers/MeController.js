const Me = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Me.find({}), Me.countDocumentsDeleted()])
            .then(([me, deleledCount]) =>
                res.render('me/stored-courses', {
                    deleledCount,
                    me: mutipleMongooseToObject(me)
                })
            ).catch(next);

    }
    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Me.findDeleted({})
            .then(me => res.render('me/trash-courses', {
                me: mutipleMongooseToObject(me)
            }))
            .catch(next);
        //res.render('me/stored-courses')
    }
}
module.exports = new MeController; //Export out , được khởi tạo