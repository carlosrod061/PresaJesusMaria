import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.routes";
import morgan from "morgan";
import path from "path"

import config from "./config";

const app = express();

// settings
app.set("port", config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", productRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;
