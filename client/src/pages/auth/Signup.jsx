import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSignup from '@/hooks/useSignup';
import { toast } from "sonner";

function Signup() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [isMatched, setIsMatched] = useState(true)
    const {loading, signup} = useSignup()

    const handleChange = (field)=> (e) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    }

    const handelPassword = (field)=> (e)=> {
        const value = e.target.value;
        setFormData((prev) => {
            const updatedFormData = { ...prev, [field]: value };
            setIsMatched(updatedFormData.confirmPassword === updatedFormData.password);
            return updatedFormData;
        });
    }

    const handelSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email validation
    
        if (!formData.email || !formData.password || !isMatched) {
            toast.warning("Fill all the fields correctly");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            toast.warning("Enter a valid email address");
            return;
        }
        signup(formData);
    };
    

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
                onChange={handelPassword("password")}
            />
            <Input
                placeholder="Confirm Password"
                type="password"
                className="rounded-full p-6"
                value={formData.confirmPassword}
                onChange={handelPassword("confirmPassword")}
            />
            {!isMatched && <p className='text-sm text-red-600'>Password does not match</p>}
            <Button className="rounded-full p-6" onClick={handelSubmit}>
                {loading ? <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : "Sign Up"}
            </Button>
        </>
    )
}

export default Signup