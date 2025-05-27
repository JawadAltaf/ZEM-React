import { Link } from 'react-router-dom';
import '../styles/index.css';
import { useState } from 'react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="bg-[#BEE1E6]  full-width bg-bg-6 px-5 text-center flex flex-col items-center justify-center pt-[127px] pb-[100px] ">
                <div >
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[50px]">
                        Welcome Back
                    </h2>

                    <form className="bg-white w-full login_page_form p-8 shadow-3 rounded-xl md:p-10 lg:p-10" action="#">
                        <div className="relative mb-6">
                            <input
                                className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                Email
                            </span>
                        </div>



                        <div className="relative mb-6 last-of-type:mb-4">
                            <input
                                className="outline-none flex-1 pr-10 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                required
                            />
                            <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                Password
                            </span>
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 -translate-y-1/2 right-[12px] hover:opacity-70"
                                title={showPassword ? "Hide password" : "Show password"}
                            >
                                <i className={`fa-solid text-gray-400 ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>




                        <button
                            className="mb-6 w-full text-white bg-[#409299] transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75"
                            type="submit"
                        >
                            Login
                        </button>

                        <div className="flex justify-between">
                            <div className='flex gap-2'>
                                <p className="text-text text-gray-500">Don’t have an account?</p>
                                <Link to="/register" className="text-[#409299] hover:opacity-70">
                                    <p className="text-text">Sign up</p>
                                </Link>
                            </div>
                            <div>
                                <Link to="/reset-password" className="text-[#409299] hover:opacity-70">
                                    <p className="text-text">Reset password</p>
                                </Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginPage;