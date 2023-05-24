import { Router } from "express"
import departmentModel from "../database/departmentModel.js";
import subjectModel from "../database/subjectModel.js";
import { create, index, show, store } from "../controller/department.js";

const router =new Router();

router.get("/", index );
router.get("/create", create);
router.post("/", store);
router.get("/:_id", show);
export default router;