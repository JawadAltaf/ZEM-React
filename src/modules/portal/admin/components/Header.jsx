import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Search } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = ({ theme, toggleTheme }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [text] = useTypewriter({
        words: ['Enter your search term here...', 'Enter your search term here...'],
        loop: 0, // 0 = no loop, or set to `Infinity`
        typeSpeed: 60,
        deleteSpeed: 50,
        delaySpeed: 1500,
    });




    useEffect(() => {
        setPlaceholder(text);
    }, [text]);


    return (
        <header className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex items-center justify-between">
            {/* Search Input */}
            <input
                type="text"
                placeholder={placeholder}
                className="border  dark:border-gray-600 rounded px-4 py-2 lg:w-full  w-60  max-w-md bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 "
            />

            <div className="flex items-center gap-4">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="text-gray-600  lg:block hidden md:hidden  dark:text-gray-200 hover:text-black dark:hover:text-white "
                >
                    {theme === 'dark' ? <Sun size={20} className='text-yellow-600' /> : <Moon size={20} />}
                </button>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                        <img
                            src="/assets/images/fav-icon.png"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded shadow-lg z-50">
                            <Link
                                to="/admin/profile"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link
                                to="/admin/change-password"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Change Password
                            </Link>
                            <button
                                onClick={() => {
                                    setDropdownOpen(false);
                                    console.log("Logging out...");
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-400"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
