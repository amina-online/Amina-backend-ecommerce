const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    rating: [ratingSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
