"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";

const buttonStyles = {
    active: "rounded-[4px] bg-green-600 w-full text-slate-200",
    notActive: "rounded-[4px] bg-[#EEEFF2] w-full text-slate-200"
};

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordShown: false
    });
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setFormData(prev => ({ ...prev, passwordShown: !prev.passwordShown }));
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const response = await axiosInstance.post('/auth/login', {
                email: formData.email,
                password: formData.password
            });
            if (response.status== 200) router.push("/")
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                setError("Incorrect email or password");
            } else {
                setError("Login failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] m-auto">
            <div>
                <h1 className="font-bold text-center text-[28px]">Нэвтрэх</h1>
            </div>
            <form className="flex flex-col w-full gap-2" onSubmit={handleLogin}>
                <div>
                    <p className="font-normal text-[14px] ml-1">Имэйл</p>
                    <Input
                        className="h-12 border-none bg-[#F7F7F8]"
                        placeholder="Имэйл хаягаа оруулна уу"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="relative">
                    <p className="font-normal text-[14px] ml-1">Нууц үг</p>
                    <Input
                        className="h-12 border-none bg-[#F7F7F8]"
                        placeholder="Нууц үг"
                        type={formData.passwordShown ? "text" : "password"}
                        name="password"
                        onChange={handleOnChange}
                        required
                    />
                    <div
                        className="absolute cursor-pointer right-4 top-8"
                        onClick={togglePasswordVisibility}
                    >
                        {formData.passwordShown ? <EyeIcon /> : <EyeOff />}
                    </div>
                    <p className="font-normal text-[14px] mt-2 flex justify-end">Нууц үг сэргээх</p>
                </div>
                {error && <p className="text-center text-red-500">{error}</p>}
                <div className="w-full flex flex-col gap-[32px] items-center">
                    <Button
                        className={formData.email !== "" && formData.password !== "" ? 'rounded-[4px] bg-green-600 w-full text-slate-200 hover:bg-green-600' : 'rounded-[4px]  w-full bg-white text-slate-200 hover:bg-green-600 '}
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Ачааллаж байна...' : 'Нэвтрэх'}
                    </Button>
                    <p className="font-normal text-[14px]">Эсвэл</p>
                    <Button
                        variant="default"
                        className="rounded-[4px] border-green-500 border-solid border-[1px] bg-white text-black w-full hover:bg-green-600"
                    >
                        Бүртгүүлэх
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
