import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
	quantity: {
		type: Number,
		default: 0,
	},
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
	},
});

const orderSchema = new mongoose.Schema(
	{
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		address: {
			type: String,
		},
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
		},
		status: {
			type: String,
			enum: ["PENDING", "CANCELLED", "DELIVERED"],
			default: "PENDING",
		},
		orderItems: {
			type: [orderItemSchema],
		},
	},
	{ timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
