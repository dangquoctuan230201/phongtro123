import React, {useCallback} from "react";
import logo from "../../assets/logoRemovebg.png";
import {useNavigate} from "react-router-dom"
import { Button } from "./../../components";
import icons from "../../ultils/icon";
import { path } from "../../ultils/constant"


const {AiOutlinePlusCircle} =icons
const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(() => {
    navigate(path.LOGIN)
  },[])

  return (
		<div className="w-1100">
			<div className="w-full flex items-center justify-between">
				<img
					src={logo}
					alt="logo"
					className="w-[240px] h-[70px] object-contain"
				/>
				<div className="flex items-center gap-1">
					<small>PhongTro123.com xin chào!</small>
					<Button
						text={"Đăng Nhập"}
						textColor="text-white"
						bgColor="bg-[#3961fb]"
						onClick={goLogin}
					/>
					<Button
						text={"Đăng Ký"}
						textColor="text-white"
						bgColor="bg-[#3961fb]"
						onClick={goLogin}
					/>
					<Button
						text={"Đăng Tin Mới"}
						textColor="text-white"
						bgColor="bg-[#F738C0]"
						IcAfter={AiOutlinePlusCircle}
					/>
				</div>
			</div>
		</div>
  );
};

export default Header;
