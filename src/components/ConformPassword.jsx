import '../styles/index.css';
import { useState } from 'react';


const ConformPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [conformShowPassword, setConformShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };

    const setConformToggle = () => {
        setConformShowPassword(!conformShowPassword)
    }
    return (
        <>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[20px] text-center">
                <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[13px]">Confirm password
                </h2>
                <p className="text-text text-gray-500 mb-[60px]">Please Enter Your New Password & Confirm New Password
                </p>
                <form className="bg-white w-full reset_page p-8 shadow-3 mx-auto border border-gray-200 rounded-[6px] md:p-12 max-w-[400px]" action="#">
                    <div className="relative mb-6 last-of-type:mb-4">
                        <input className="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" id="password" required="" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your new password" /><span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900"></span><i className="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]">  <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-1/2 -translate-y-1/2 right-[12px] hover:opacity-70"
                            title={showPassword ? "Hide password" : "Show password"}
                        >
                            <i className={`fa-solid text-gray-400 ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button></i>
                    </div>
                    <div className="relative mb-6 last-of-type:mb-4">
                        <input className="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" id="password" required="" type={conformShowPassword ? "text" : "password"} name="password" placeholder="Confirm new password" /><span className="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900"></span><i className="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]">  <button
                            type="button"
                            onClick={setConformToggle}
                            className="absolute top-1/2 -translate-y-1/2 right-[12px] hover:opacity-70"
                            title={conformShowPassword ? "Hide password" : "Show password"}
                        >
                            <i className={`fa-solid text-gray-400 ${conformShowPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button></i>
                    </div>
                    <button className="mb-6 w-full text-white bg-[#70ADB3] transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75" type="submit">Set New Password</button>
                   
                </form>
            </div>
        </>
    )
}

export default ConformPassword