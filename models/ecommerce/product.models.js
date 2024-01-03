import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		description: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		stock: {
			type: Number,
		},
		price: {
			type: Number,
		},
		category: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Category",
			},
		],
	},
	{ timestamps: true }
);

export const Product = mongoose.model(
	"Product",
	productSchema
);
