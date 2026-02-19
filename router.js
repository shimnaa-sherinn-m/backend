import { Router } from "express";
import { AddData } from "./reqhandler.js";

const router = Router()




router.route('/adddata').post(AddData)
export default router
