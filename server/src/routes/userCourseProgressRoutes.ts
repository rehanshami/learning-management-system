import express from "express";
import {
  getUserCourseProgress,
  getUserEnrolledCourses,
  updateUserCourseProgress,
} from "../controllers/userCourseProgressController";

const router = express.Router();

router.post("/:userId/enrolled-courses", getUserEnrolledCourses);
router.get("/:userId/courses/:courseId", getUserCourseProgress);
router.post("/stripe/courses/:courseId", updateUserCourseProgress);

export default router;
