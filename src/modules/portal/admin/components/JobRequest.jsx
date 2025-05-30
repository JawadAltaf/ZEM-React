import React, { useEffect, useRef, useState } from 'react';
import { NotepadText, MoreVertical } from 'lucide-react';

const JobRequestCard = ({ title, total, accepted, rejected, pending }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            // Close menu if clicked outside of both the dropdown and the button
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full  relative">
            {/* Header with title, icon, and three dots */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <NotepadText className="text-gray-500 mr-2 h-5 w-5" />
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                </div>

                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <MoreVertical className="h-5 w-5" />
                </button>
            </div>

            {/* Three dots menu (appears when clicked) */}
            {isMenuOpen && (
                <div ref={dropdownRef} className="absolute right-4 top-10 bg-white shadow-lg rounded-md py-1 z-10">
                    <button
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => {
                            console.log('View clicked');
                            setIsMenuOpen(false);
                        }}
                    >
                        View
                    </button>
                </div>
            )}

            {/* Card content */}
            <div className="space-y-1">
                <div className="flex justify-between items-center">
                    <span className='dark:text-black'>Total</span>
                    <span className="font-semibold dark:text-black bg-black text-white h-6 w-6 text-center rounded-sm">{total}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className='dark:text-black'>Accepted</span>
                    <span className="font-semibold dark:text-black text-white h-6 w-6 text-center rounded-sm bg-green-500">{accepted}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className='dark:text-black'>Rejected</span>
                    <span className="font-semibold text-white dark:text-black h-6 w-6 text-center rounded-sm bg-red-500">{rejected}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className='dark:text-black'>Pending</span>
                    <span className="font-semibold text-white dark:text-black  h-6 w-6 text-center rounded-sm bg-yellow-500">{pending}</span>
                </div>
            </div>
        </div>
    );
};

export default JobRequestCard;