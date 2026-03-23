import express from "express";
import { container } from "tsyringe";
import { CashMovementController } from "../controllers/cashmovement.controller";

const router = express.Router();
const controller = container.resolve(CashMovementController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/company/:companyId", controller.getCashMovementByCompany);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
