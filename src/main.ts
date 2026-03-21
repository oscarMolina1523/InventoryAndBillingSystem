import "reflect-metadata";
//AUTO-IMPORT-DOTENV
import "dotenv/config";
import express from "express";
//import { initializeDatabase } from "./Infrastructure/database/initializeDatabase";
//AUTO-IMPORT-CONTAINER
import "./WebApi/container/dependencyContainer";
//AUTO-IMPORT-ROUTES
import logRoutes from "./WebApi/routes/log.routes";
import saleitemRoutes from "./WebApi/routes/saleitem.routes";
import productunitRoutes from "./WebApi/routes/productunit.routes";
import inventorymovementRoutes from "./WebApi/routes/inventorymovement.routes";
import inventoryRoutes from "./WebApi/routes/inventory.routes";
import saleRoutes from "./WebApi/routes/sale.routes";
import cashmovementRoutes from "./WebApi/routes/cashmovement.routes";
import purchaseitemRoutes from "./WebApi/routes/purchaseitem.routes";
import purchaseRoutes from "./WebApi/routes/purchase.routes";
import cashregisterRoutes from "./WebApi/routes/cashregister.routes";
import productRoutes from "./WebApi/routes/product.routes";
import userRoutes from "./WebApi/routes/user.routes";
import categoryRoutes from "./WebApi/routes/category.routes";
import roleRoutes from "./WebApi/routes/role.routes";
import branchRoutes from "./WebApi/routes/branch.routes";
import unitRoutes from "./WebApi/routes/unit.routes";
import companyRoutes from "./WebApi/routes/company.routes";
import suscriptionRoutes from "./WebApi/routes/suscription.routes";
import planRoutes from "./WebApi/routes/plan.routes";
//AUTO-IMPORT-OPENAPI
import { apiReference } from "@scalar/express-api-reference";
import { OpenApiSpecification } from "./WebApi/docs/openapi";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//AUTO-REGISTER-OPENAPI
app.use(
	"/api-docs",
	apiReference({
		spec: {
			content: OpenApiSpecification,
		},
	})
);
//AUTO-REGISTER-ROUTES
app.use("/log", logRoutes);
app.use("/saleitem", saleitemRoutes);
app.use("/productunit", productunitRoutes);
app.use("/inventorymovement", inventorymovementRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/sale", saleRoutes);
app.use("/cashmovement", cashmovementRoutes);
app.use("/purchaseitem", purchaseitemRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/cashregister", cashregisterRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/role", roleRoutes);
app.use("/branch", branchRoutes);
app.use("/unit", unitRoutes);
app.use("/company", companyRoutes);
app.use("/suscription", suscriptionRoutes);
app.use("/plan", planRoutes);

async function startServer() {
  //await initializeDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();