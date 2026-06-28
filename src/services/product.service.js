const Product = require("../models/product.model");

const createProduct = async (data) => {
  return await Product.create(data);
};

const getAllProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
