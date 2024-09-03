import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



const Login = () => {
  return (
    <div className="w-[900px] h-[900px] flex  justify-center items-center">
      <div className="w-[448px] h-[549px] flex flex-col gap-12 justify-center items-center">
        <div className="flex justify-center">
          <h1 className="text-2xl">Нэвтрэх</h1>
        </div>
        <div className="flex flex-col gap-2">
            <div className="">
                <h4 className="m-0 text-sm">Email</h4>
                <Input placeholder="Enter a email"/>
            </div>
            <div>
                <p>Password</p>
                <Input placeholder="Enter a password" className="rounded-sm"/>
            </div>
        </div>
        <div></div>
      </div> 
    </div>
  );
};

export default Login;
