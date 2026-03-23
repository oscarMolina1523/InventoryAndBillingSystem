import express from "express";
import { container } from "tsyringe";
import { InventoryMovementController } from "../controllers/inventorymovement.controller";

const router = express.Router();
const controller = container.resolve(InventoryMovementController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/company/:companyId", controller.getInventoryMovementsByCompany);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
