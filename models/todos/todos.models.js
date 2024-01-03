import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		subTodos: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SubTodos",
			},
		],
		color: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
