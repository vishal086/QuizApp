import { Router } from "express";
const router = Router();

import {
  dropQuestions,
  dropResult,
  getQuestions,
  getResult,
  insertQuestions,
  storeResult,
} from "../controllers/controller.js";

router
  .route("/questions")
  .get(getQuestions)
  .post(insertQuestions)
  .delete(dropQuestions);
router.route("/result").get(getResult).post(storeResult).delete(dropResult);

export default router;
