import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Required"),
    username: yup.string().min(3, "Minimum 3 characters").required("Required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid phone number")
      .required("Required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      phone: values.phone,
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    Swal.fire({
      title: "Registration successful!",
      icon: "success",
      draggable: true,
    });
    resetForm();
    navigate("/login")
  };
  return (
<Formik initialValues={{email:'',password:'', username:'',phone:''}} onSubmit={handleSubmit}  validationSchema={validationSchema}>
   
    <Form className="container mx-auto flex flex-col gap-4 items-center mt-20">
        <h2 className="font-black text-2xl font-serif" >Create Account<span className="text-[#00B4D8]">.</span></h2>
        <p className="mr-[43%] font-bold font-sans">Username</p>
        <Field name='username' type='text' className="w-[50%] input rounded-lg focus:outline-none" placeholder='Enter your name'/>
        <ErrorMessage name='username' component='div' className="text-red-600"/>
        <p className="mr-[46%] font-bold font-sans">Email</p>
        <Field name='email' type='email' className="w-[50%] input rounded-lg focus:outline-none" placeholder='Enter your email address' />
        <ErrorMessage name='email' component='div' className="text-red-600"/>
        <p className="mr-[43.5%] font-bold font-sans">Password</p>
        <Field name='password' type='password' className="w-[50%] input rounded-lg focus:outline-none" placeholder='Enter your password'/>
        <ErrorMessage name='password' component='div' className="text-red-600"/>
        <p className="mr-[40%] font-bold font-sans">Phone Number</p>
        <Field name='phone' className="w-[50%] input rounded-lg focus:outline-none" placeholder='Enter your phone number'/>
        <ErrorMessage name='phone' component='div' className="text-red-600"/>
        <button type="submit" className="w-[50%] bg-blue-700 text-white px-6 py-2 mt-4 font-bold cursor-pointer font-sans">Register</button>
        <div className="flex gap-2"><p className="text-gray-500 font-light">Already have an account?</p> <a href="/login" className="text-[#00B4D8] font-light">Log In</a></div>
    </Form>
</Formik>
  )
}
