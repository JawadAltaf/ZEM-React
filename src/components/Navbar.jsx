import { useState } from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };





    return (
        <>
            <header className="h-auto w-full relative py-[15px] sticky-header">
                <div className="px-[12px] md:px-[36px] xl:px-0 flex items-center justify-between mx-auto max-w-[1320px]">
                    {/* Logo */}
                    <Link to={'/'} className="flex" >
                        <img className="logo z-50 w-[100%] md:w-[101px] lg:w-[122px] xl:w-[220px] " src="/assets/images/logo.png" alt="logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="z-50 hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ul className="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">

                            <li className="flex items-center group">
                                <Link to={'/'} className="hover:text-green-900  text-lg font-inter menu-link lg:text-heading-6 mr-[7px]" href="#">Home</Link>
                            </li>
                            <li className="flex items-center group">
                                <Link to={'/about'} className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="#">About</Link>
                            </li>
                            <li className="flex items-center group">
                                <Link to={'/contact'} className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="#">Contact us</Link>
                            </li>
                            <li className="flex items-center group">
                                <Link to={'/career'} className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="#">Career</Link>
                            </li>
                            <li className="flex items-center group">
                                <Link to={'/login'} className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" href="#">Login</Link>
                            </li>

                        </ul>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden xl:block">
                        <button type="button">
                            <Link to={'/register'} className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white" href="#">
                                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">Join now</span>
                            </Link>
                        </button>
                    </div>

                    {/* Burger Icon (Mobile) */}
                    <div className="lg:hidden z-50 cursor-pointer" onClick={toggleMenu}>
                        <div className="burger-icon burger-icon-white menu__icon">
                            <span className="burger-icon-top block w-6 h-[2px] bg-black mb-[6px]"></span>
                            <span className="burger-icon-mid block w-6 h-[2px] bg-black mb-[6px]"></span>
                            <span className="burger-icon-bottom block w-6 h-[2px] bg-black"></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav className={`fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll transition-all duration-300 w-[280px] sm:w-[320px] z-[100] transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>

                    {/* Close Icon */}
                    <div className="flex justify-end p-4">
                        <button onClick={() => setMenuOpen(false)} className="text-black text-2xl font-bold focus:outline-none hover:text-red-600">
                            &times;
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="p-[30px] pt-0">
                        <ul className="font-chivo font-medium text-[16px] leading-[16px] space-y-4">

                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/'}>Home</Link>
                                </div>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/about'}> About</Link>
                                </div>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/contact'}>Contact us</Link>
                                </div>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/career'}>Career</Link>
                                </div>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/login'}>Login</Link>
                                </div>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <Link to={'/register'}>Join now</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default Navbar;
