import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
	{
		category: {
			type: String,
		},
		color: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const Category = mongoose.model(
	"Category",
	categorySchema
);
