import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
	return (
		<div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
			<h2 className="font-semibold text-2xl mb-3">Đăng Nhập</h2>
			<div className="w-full flex flex-col gap-3">
				<InputForm label={"Số Điện Thoại"} />
				<InputForm label={"Mật Khẩu"} />
			</div>
			<Button
				text="Đăng Nhập"
				bgColor={"bg-[#3961FB]"}
				textColor={"text-white"}
				fulWidth={"w-full"}
			/>

			<div className="w-full flex items-center justify-between mt-7">
				<small className="text-[blue] hover:text-indigo-400 cursor-pointer">
					Quên mật khẩu
				</small>
				<small className="text-[blue] hover:text-indigo-400 cursor-pointer">
					Tạo tài khoản
				</small>
			</div>
		</div>
	);
};

export default Login;
