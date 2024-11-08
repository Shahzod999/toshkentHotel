import express from "express";
import formidable from "express-formidable";
import { fetchProducts, addProduct, removeProduct, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.route("/").get(fetchProducts).post(formidable(), addProduct);
router.route("/:id").delete(removeProduct).put(formidable(), updateProduct);

export default router;
