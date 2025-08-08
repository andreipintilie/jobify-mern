import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import { Router } from "express";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/", getAllJobs);
router.route("/stats").get(showStats);
router.get("/:id", validateIdParam, getJob);
router.post("/", checkForTestUser, validateJobInput, createJob);
router.patch(
  "/:id",
  checkForTestUser,
  validateJobInput,
  validateIdParam,
  updateJob
);
router.delete("/:id", checkForTestUser, validateIdParam, deleteJob);

// router.route('/').get(getAllJobs).post(createJob);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;
