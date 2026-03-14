import express from "express";

import ProductModel from "#models/product.model.js";
import {
  getProductById,
  getProducts,
} from "#controllers/product.controllers.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
