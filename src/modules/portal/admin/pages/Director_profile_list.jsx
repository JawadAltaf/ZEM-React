import { useEffect, useRef, useState } from 'react';
import { Plus, Ellipsis, Edit, Eye, Trash2, Ban } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const directorsData = [
    {
        id: 1,
        name: 'Ali',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Hassan',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 3,
        name: 'Abdullah',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 4,
        name: 'Saim',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 5,
        name: 'Sarmad',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 6,
        name: 'Ubaid',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 7,
        name: 'Noman',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 8,
        name: 'Hamza',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 9,
        name: 'Usama',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 10,
        name: 'Ali Hassan',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    {
        id: 11,
        name: 'Magda Bartakova',
        dob: '1986-10-20',
        gender: 'Female',
        nationality: 'British',
        contact: '07480 499199',
        email: '86majda@gmail.com',
        status: 'Active',
    },
    // Add more entries if needed
];

const Director_profile_list = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const menuRef = useRef(null);

    const filteredData = directorsData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + entriesPerPage);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="p-2 sm:p-4 lg:p-6 w-full">
            <Breadcrumb items={[
                { label: 'Director' }, { label: 'Director List' }
            ]} />

            {/* Header with Add Button */}
            <div className="flex justify-end items-center mb-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 sm:px-4 rounded flex items-center gap-2 text-sm sm:text-base">
                    <Plus className='size-4 sm:size-5' />
                    <span className="hidden sm:inline">Add Director Profile</span>
                    <span className="sm:hidden">Add</span>
                </button>
            </div>

            {/* Main Container */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-3 sm:p-4 border-b">
                    <h2 className="text-sm sm:text-base font-semibold dark:text-black">DIRECTOR LIST</h2>
                </div>

                {/* Controls */}
                <div className="p-3 sm:p-4 bg-gray-50 border-b">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 dark:text-black">
                        {/* Entries per page */}
                        <div className="flex items-center text-xs sm:text-sm">
                            <span className="mr-2">Show</span>
                            <select
                                className="mx-2 px-3 py-1 border rounded focus:outline-none focus:ring-0 text-xs sm:text-sm"
                                value={entriesPerPage}
                                onChange={(e) => {
                                    setEntriesPerPage(parseInt(e.target.value));
                                    setCurrentPage(1);
                                }}
                            >
                                {[10, 25, 50].map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                            <span className="ml-2">entries</span>
                        </div>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search directors..."
                            className="border px-3 py-1 rounded w-full sm:w-64 focus:ring-0 focus:outline-none text-xs sm:text-sm"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                {/* Desktop Table - Hidden on mobile */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="text-gray-500 uppercase bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 text-xs font-medium">S.NO</th>
                                <th className="py-3 px-4 text-xs font-medium">Name</th>
                                <th className="py-3 px-4 text-xs font-medium">Date of Birth</th>
                                <th className="py-3 px-4 text-xs font-medium">Gender</th>
                                <th className="py-3 px-4 text-xs font-medium">Nationality</th>
                                <th className="py-3 px-4 text-xs font-medium">Primary Contact</th>
                                <th className="py-3 px-4 text-xs font-medium">Email Address</th>
                                <th className="py-3 px-4 text-xs font-medium">Status</th>
                                <th className="py-3 px-4 text-xs font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {currentData.length > 0 ? (
                                currentData.map((item, index) => {
                                    const isMenuOpen = openMenuId === item.id;
                                    return (
                                        <tr key={item.id} className="border-t hover:bg-gray-50">
                                            <td className="py-3 px-4">{startIndex + index + 1}</td>
                                            <td className="py-3 px-4 font-medium">{item.name}</td>
                                            <td className="py-3 px-4">{item.dob}</td>
                                            <td className="py-3 px-4">{item.gender}</td>
                                            <td className="py-3 px-4">{item.nationality}</td>
                                            <td className="py-3 px-4">{item.contact}</td>
                                            <td className="py-3 px-4 max-w-xs truncate" title={item.email}>{item.email}</td>
                                            <td className="py-3 px-4">
                                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 relative">
                                                <button
                                                    onClick={() =>
                                                        setOpenMenuId(openMenuId === item.id ? null : item.id)
                                                    }
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <Ellipsis size={18} className="text-gray-400" />
                                                </button>

                                                {isMenuOpen && (
                                                    <div
                                                        ref={menuRef}
                                                        className="absolute top-8 right-0 w-36 bg-white border border-gray-200 shadow-lg rounded z-50"
                                                    >
                                                        <ul className="py-1 text-sm text-gray-700">
                                                            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                <Eye size={16} /> View
                                                            </li>
                                                            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                <Edit size={16} /> Edit
                                                            </li>
                                                            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                <Trash2 size={16} /> Delete
                                                            </li>
                                                            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                <Ban size={16} /> Ban
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td className="py-8 px-4 text-center text-gray-500" colSpan="9">
                                        No entries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile/Tablet Card View - Visible on small screens */}
                <div className="lg:hidden">
                    {currentData.length > 0 ? (
                        <div className="divide-y divide-gray-200">
                            {currentData.map((item, index) => {
                                const isMenuOpen = openMenuId === item.id;
                                return (
                                    <div key={item.id} className="p-4 hover:bg-gray-50">
                                        {/* Header with name and actions */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">#{startIndex + index + 1}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                                                    {item.status}
                                                </span>
                                                <div className="relative">
                                                    <button
                                                        onClick={() =>
                                                            setOpenMenuId(openMenuId === item.id ? null : item.id)
                                                        }
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        <Ellipsis size={16} className="text-gray-400" />
                                                    </button>

                                                    {isMenuOpen && (
                                                        <div
                                                            ref={menuRef}
                                                            className="absolute top-8 right-0 w-36 bg-white border border-gray-200 shadow-lg rounded z-50"
                                                        >
                                                            <ul className="py-1 text-sm text-gray-700">
                                                                <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                    <Eye size={16} /> View
                                                                </li>
                                                                <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                    <Edit size={16} /> Edit
                                                                </li>
                                                                <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                    <Trash2 size={16} /> Delete
                                                                </li>
                                                                <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                                    <Ban size={16} /> Ban
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span className="text-gray-500">DOB:</span>
                                                <span className="ml-2 text-gray-900">{item.dob}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Gender:</span>
                                                <span className="ml-2 text-gray-900">{item.gender}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Nationality:</span>
                                                <span className="ml-2 text-gray-900">{item.nationality}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Contact:</span>
                                                <span className="ml-2 text-gray-900">{item.contact}</span>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <span className="text-gray-500">Email:</span>
                                                <span className="ml-2 text-gray-900 break-all">{item.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-12 text-center text-gray-500">
                            <p>No entries found.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="p-3 sm:p-4  border-t">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-600">
                        <p className="text-center sm:text-left">
                            Showing {startIndex + 1} to{' '}
                            {Math.min(startIndex + entriesPerPage, filteredData.length)} of{' '}
                            {filteredData.length} entries
                        </p>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-2 sm:px-3 py-1 rounded border text-xs sm:text-sm ${currentPage === 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                <span className="hidden sm:inline">Previous</span>
                                <span className="sm:hidden">Prev</span>
                            </button>

                            <span className="px-2 sm:px-3 py-1 bg-indigo-500 text-white rounded text-xs sm:text-sm">
                                {currentPage}
                            </span>

                            <button
                                onClick={() =>
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                }
                                disabled={currentPage === totalPages}
                                className={`px-2 sm:px-3 py-1 rounded border text-xs sm:text-sm ${currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                <span className="hidden sm:inline">Next</span>
                                <span className="sm:hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director_profile_list;
