import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLogin from '@/hooks/useLogin';
import { toast } from 'sonner';

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const {loading, login} = useLogin()

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSubmit = ()=>{
        if(formData.email && formData.password){
            login(formData)
        } else {
            toast.warning("all credentials are required")
        }
    }

    return (
        <>
            <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-6"
                value={formData.email}
                onChange={handleChange("email")}
            />
            <Input
                placeholder=" Password"
                type="password"
                className="rounded-full p-6"
                value={formData.password}
                onChange={handleChange("password")}
            />
            <Button className="rounded-full p-6" onClick={handleSubmit}>
            {loading ? <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : "Login"}
            </Button>
        </>
    )
}

export default Login