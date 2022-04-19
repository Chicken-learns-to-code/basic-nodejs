const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255, required: true },
    videoId: { type: String },
    level: { type: String },
    description: { type: String, maxlength: 600 },
    photo: { type: String, maxlength: 255 },
    slug: {type: String, slug: 'name', unique: true}, // unique check name already exists in db no?
},{
    timestamps: true,
});

module.exports =  mongoose.model('Course', Course);