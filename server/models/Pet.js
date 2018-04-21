let mongoose = require('mongoose');

mongoose.model('Pet', new mongoose.Schema({
	name:{type:String, required: true, minlength:3, maxlength:255},
	type:{type:String, required: true, minlength:3, maxlength:255},
	desc:{type:String, required: true, minlength:3, maxlength:255},
	skill1:{type:String, required: false, maxlength:255},
	skill2:{type:String, required: false, maxlength:255},
	skill3:{type:String, required: false, maxlength:255},
	likes:{type:Number, required: false}
},{timestamps:true}));