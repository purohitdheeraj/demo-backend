import mongoose, { Schema } from "mongoose";

const subTodosSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		markedAsDone: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export const subTodos = mongoose.model(
	"SubTodos",
	subTodosSchema
);
