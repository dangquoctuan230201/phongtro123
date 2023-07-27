import express from "express";
require("dotenv").config();
import cors from "cors";
import initRoutes from "./src/routes";
import connectDatabase from "./src/config/connectDatabase";

const app = express();

app.use(
	cors({
		//lays biến môi trường(cổng frondend)
		origin: process.env.CLIENT_URL,
		//cacs phuong thuc dc dung
		method: ["POST", "GET", "PUT", "DELETE"],
	})
);
//dọc đc dữ liệu từ API từ client gửi lên
// lấy các file json
app.use(express.json());
//dọc đc các file data đc client gửi đi
app.use(express.urlencoded({ extended: true }));

//xem app chạy chưa
// app.use("/", (rep, res) => {
// 	res.send("Server on .......");
// });

initRoutes(app)
connectDatabase()

const port = process.env.PORT || 8888;
console.log(port);

const listener = app.listen(port, () => {
	//lấy cổng app đang chạy
	console.log(`Server is running on port ${listener.address().port}`);
});
