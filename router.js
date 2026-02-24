import { Router } from "express";
import { AddData,GetData,GetSingleData,DeleteSingleData,updateData,Adduser, Login, Getuser, GetSingleuser, DeleteSingleUser, updateUser } from "./reqhandler.js";

const router = Router()




router.route('/adddata').post(AddData)
router.route('/get').get(GetData)
router.route('/getdata/:id').get(GetSingleData)
router.route('/deletdata/:id').get(DeleteSingleData)
router.route('/update/:id').put(updateData)
//user
router.route('/adduser').post(Adduser)
router.route('/getusers').get(Getuser)
router.route('/singleuser/:id').get(GetSingleuser)
router.route('/deleteuser/:id').get(DeleteSingleUser)
router.route('/updateuser/:id').put(updateUser)
router.route('/login').post(Login)

export default router
