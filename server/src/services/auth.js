import db from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"

require('dotenv').config()

//hashSync đồng bộ
//độ khó hash:genSaltSync(a) là đồng bộ hết(a càng lớn thì độ khó càng dài)
const hashPassword = (password) =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(12));
// lấy body từ controller body = phone, name, password
export const registerService = ({ phone, name, password }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.User.findOrCreate({
				where: { phone },
				defaults: {
					phone,
					name,
					password: hashPassword(password),
					id: v4(),
				},
			});
      console.log(password);
			//response sẽ trả về mảng gồm:[where(false) or default(true)], response[1] thì trả về true or false, response[0] thì trả về kết quả
			//expiresIn: '2d' token có hạn sử dụng 2 day
			const token =
				response[1] &&
				jwt.sign(
					{ id: response[0].id, phone: response[0].phone },
					process.env.SECRET_KEY,
					{ expiresIn: "2d" }
				);
			resolve({
				err: token ? 0 : 2,
				msg: token
					? "Register is successfully !"
					: "Phone number has been aldready used !",
				token: token || null,
			});
		} catch (error) {
			reject(error);
		}
	});

//Login
export const loginService = ({ phone, password }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.User.findOne({
				where: { phone },
				raw: true,
			});
			//bcrypt.compareSync trả về true or false
			const isCorrectPassword =
				response && bcrypt.compareSync(password, response.password);
			//response sẽ trả về mảng gồm:[where(false) or default(true)], response[1] thì trả về true or false, response[0] thì trả về kết quả
			//expiresIn: '2d' token có hạn sử dụng 2 day
			const token =
				isCorrectPassword &&
				jwt.sign(
					{ id: response.id, phone: response.phone },
					process.env.SECRET_KEY,
					{ expiresIn: "2d" }
				);
			resolve({
				err: token ? 0 : 2,
				msg: token
					? "Login is successfully!"
					: response
					? "Password is wrong !"
					: "Phone number not found !",
				token: token || null,
			});
		} catch (error) {
			reject(error);
		}
	});
