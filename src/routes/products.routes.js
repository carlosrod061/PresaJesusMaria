import { Router } from "express";
import {
  login,
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();


router.get("/",getProducts);

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
