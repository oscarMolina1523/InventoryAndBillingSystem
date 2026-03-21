import express from "express";
import { container } from "tsyringe";
import { BranchController } from "../controllers/branch.controller";

const router = express.Router();
const controller = container.resolve(BranchController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/company/:companyId", controller.getBranchByCompany);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
