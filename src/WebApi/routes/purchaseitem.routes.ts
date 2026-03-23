import express from "express";
import { container } from "tsyringe";
import { PurchaseItemController } from "../controllers/purchaseitem.controller";

const router = express.Router();
const controller = container.resolve(PurchaseItemController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/company/:companyId", controller.getPurchaseItemsByCompany);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
