const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255, required: true },
    videoId: { type: String },
    level: { type: String },
    description: { type: String, maxlength: 600 },
    photo: { type: String, maxlength: 255 },
    slug: {type: String, slug: 'name', unique: true},
   
},{
    timestamps: true,
});
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete , { 
    deletedAt: true,
    overrideMethods: 'all' 
});
module.exports =  mongoose.model('Course', Course);