import { Router } from "express";
import { body } from "express-validator";
import * as projectController from "../controllers/ProjectController.js";
import * as authMiddleWare from "../middlewares/AuthMiddleware.js";
import authRoutes from "./AuthRoutes.js";

const router = Router();

router.post(
  "/create",
  authMiddleWare.verifyToken,
  body("name").isString().withMessage("Name is required"),
  projectController.createProject
);

router.get("/all", authMiddleWare.verifyToken, projectController.getAllProject);

router.put(
  "/add-user",
  authMiddleWare.verifyToken,
  body("projectId").isString().withMessage("Project ID is required"),
  body("users")
    .isArray({ min: 1 })
    .withMessage("Users must be an array of strings")
    .bail()
    .custom((users) => users.every((user) => typeof user === "string"))
    .withMessage("Each user must be a string"),
  projectController.addUserToProject
);

router.get(
  "/get-project/:projectId",
  authMiddleWare.verifyToken,
  projectController.getProjectById
);

router.put(
  "/update-file-tree",
  authMiddleWare.verifyToken,
  body("projectId").isString().withMessage("Project ID is required"),
  body("fileTree").isObject().withMessage("File tree is required"),
  projectController.updateFileTree
);

export default router;
