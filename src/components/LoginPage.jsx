import '../styles/index.css';

const LoginPage = () => {
    return (
        <>
            <div className="bg-[#BEE1E6]  full-width bg-bg-6 px-5 text-center flex flex-col items-center justify-center pt-[127px] pb-[100px] ">
                <div >
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[50px]">
                        Welcome Back
                    </h2>

                    <form className="bg-white w-full login_page_form p-8 shadow-3 rounded-[6px] md:p-10 lg:p-10" action="#">
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
                                className="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                                placeholder='Enter your password'
                                type="password"
                                name="password"
                                id="password"
                                required
                            />
                            <span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">
                                Password
                            </span>
                            <i className="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]">
                                <img
                                    src="assets/images/icons/icon-eye-gray.svg"
                                    alt="eye icon"
                                />
                            </i>
                        </div>




                        <button
                            className="mb-6 w-full text-white bg-[#409299] transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75"
                            type="submit"
                        >
                            Login
                        </button>

                        <div className="flex gap-2">
                            <p className="text-text text-gray-500">Don’t have an account?</p>
                            <a className="text-[#409299] hover:opacity-70" href="#">
                                <p className="text-text">Sign up</p>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginPage;