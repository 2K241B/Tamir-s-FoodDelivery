"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";

const buttonStyles = {
    active: "rounded-[4px] bg-green-600 w-full text-slate-200",
    notActive: "rounded-[4px] bg-[#EEEFF2] w-full text-slate-200"
}

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [text, setText] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordShown(prev => !prev);
    };

    const handleOnChange = () => {
        setText(e.target.value);
    };

    return (
        <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] m-auto">
            <div>
                <h1 className="font-bold text-center text-[28px]">Нэвтрэх</h1>
            </div>
            <div className="flex flex-col w-full gap-2">
                <div>
                    <p className="font-normal text-[14px] ml-1">Имэйл</p>
                    <Input
                        className="h-12 border-none bg-[#F7F7F8]"
                        placeholder="Имэйл хаягаа оруулна уу"
                        type="email"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="relative">
                    <p className="font-normal text-[14px] ml-1">Нууц үг</p>
                    <Input
                        className="h-12 border-none bg-[#F7F7F8]"
                        placeholder="Нууц үг"
                        type={passwordShown ? "text" : "password"}
                        onChange={handleOnChange}
                        required
                    />
                    <div
                        className="absolute cursor-pointer right-4 top-8"
                        onClick={togglePasswordVisibility}
                    >
                        {passwordShown ? <EyeIcon /> : <EyeOff />}
                    </div>
                    <p className="font-normal text-[14px] mt-2 flex justify-end">Нууц үг сэргээх</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[32px] items-center">
                <Button
                    className={text !== "" ? buttonStyles.active : buttonStyles.notActive}
                    type="submit"
                >
                    Нэвтрэх
                </Button>
                <p className="font-normal text-[14px]">Эсвэл</p>
                <Button
                    variant="default"
                    className="rounded-[4px] border-green-500 border-solid border-[1px] bg-white text-black w-full"
                >
                    Бүртгүүлэх
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;
