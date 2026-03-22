import express from "express";
import { container } from "tsyringe";
import { PurchaseController } from "../controllers/purchase.controller";

const router = express.Router();
const controller = container.resolve(PurchaseController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/company/:companyId", controller.getPurchaseByCompany);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
