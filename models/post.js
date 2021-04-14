const mongoose = require("mongoose")

const bloogSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	username: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	// comments: [{
	// 	type: mongoose.Types.ObjectId,
	// 	ref: "Comment"
	// }]
})



module.exports = mongoose.model("bloog", bloogSchema)