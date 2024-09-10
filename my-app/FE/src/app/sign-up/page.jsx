'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useMemo, useState } from 'react';
import { EyeIcon, EyeOff } from 'lucide-react';
import { axiosInstance } from '@/lib/axios';
import { useRouter } from 'next/navigation';
import debounce from 'lodash/debounce';

export const page = () => {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const [isHidePassword, setIsHidePassword] = useState(true);
    const togglePasswordVisibility = () => setIsHidePassword((prev) => !prev);
    const Icon = isHidePassword ? EyeOff : EyeIcon;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        rePassword: '',
    });

    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    const debounceFn = useMemo(() => debounce(handleOnChange, 500), []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (formData.password === formData.rePassword) {
    //         try {
    //             const response = await axiosInstance.post('/user/create', {
    //                 name: formData.name,
    //                 email: formData.email,
    //                 phone: formData.phoneNumber,
    //                 password: formData.password,
    //             });
    //             if (response.status === 200) router.push('/login');
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     } else {
    //         return console.log('wrong password');
    //     }
    // };

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-[106px] pb-[139px] flex flex-col gap-12 rounded-[16px] max-w-[448px] h-fit bg-white m-auto"
        >
            <h2 className="text-[#0D1118] text-center text-[28px] font-bold">
                Бүртгүүлэх
            </h2>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full text-sm">
                    <h3>Нэр</h3>
                    <Input
                        name="name"
                        type="text"
                        onChange={debounceFn}
                        placeholder="Нэрээ оруулна уу"
                        className="w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full text-sm">
                    <h3>И-мэйл</h3>
                    <Input
                        name="email"
                        type="email"
                        onChange={debounceFn}
                        placeholder="И-мэйл хаягаа оруулна уу"
                        className="w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full text-sm">
                    <h3>Утасны дугаар</h3>
                    <Input
                        name="phoneNumber"
                        type="tel"
                        onChange={debounceFn}
                        placeholder="Та утасны дугаараа оруулна уу"
                        className="w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full text-sm">
                    <h3>Нууц үг</h3>
                    <div className="w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3">
                        <Input
                            name="password"
                            type={isHidePassword ? 'password' : 'text'}
                            onChange={debounceFn}
                            placeholder="Нууц үгээ оруулна уу"
                            className="bg-[#F7F7F8] border-0"
                            required
                        />
                        <Icon
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full text-sm">
                    <h3>Нууц үг давтах</h3>
                    <div className="w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3">
                        <Input
                            name="rePassword"
                            type={isHidePassword ? 'password' : 'text'}
                            onChange={debounceFn}
                            placeholder="Нууц үгээ оруулна уу"
                            className="bg-[#F7F7F8] border-0"
                            required
                        />
                        <Icon
                            onClick={togglePasswordVisibility}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2 px-4 py-2 text-sm">
                    <input
                        type="checkbox"
                        className="accent-black"
                        name="check"
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
                </div>
                <Button
                    type="submit"
                    disabled={
                        formData.email.length > 0 &&
                            formData.password.length > 0 &&
                            formData.name.length > 0 &&
                            formData.phoneNumber.length > 0 &&
                            formData.rePassword.length > 0 &&
                            isChecked === true
                            ? false
                            : true
                    }
                    className="disabled:bg-[#EEEFF2] disabled:text-[#1C20243D] font-normal px-4 py-2 active:bg-[#18BA51] text-white"
                >
                    Бүртгүүлэх
                </Button>
            </div>
        </form>
    );
};

export default page;
