import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../../styles/AdminStyle.css';
import {
    LayoutDashboard,
    Users,
    BarChart2,
    Menu,
    ChevronDown,
    ChevronRight,
    ListCollapse,
    X,
    Circle,
    Dot
} from 'lucide-react';


const navItems = [
    {
        label: "Dashboard",
        to: "/admin/dashboard",
        text: "Admin Portal",
        icon: <LayoutDashboard size={20} />,
    },

    {
        label: "Organization Profile",
        component: "COMPONENTS",
        icon: <Users size={20} />,
        children: [
            {
                label: "Profile",
                to: "/admin/organization-profile",
                icon: <Circle size={12} />,
            },
            {
                label: "Director's Profile List",
                to: "/admin/user",
                icon: <Circle size={12} />,
            },
        ],
    },
    // {
    //     label: "Company users",
    //     icon: <Users size={20} />,
    //     children: [
    //         {
    //             label: "All Users",
    //             to: "/admin/dashboard/company/all",
    //             icon: <Circle size={12} />,
    //         },
    //         {
    //             label: "Add User",
    //             to: "/admin/dashboard/company/add",
    //             icon: <Circle size={12} />,
    //         },
    //     ],
    // },

];


const Sidebar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

    // Close mobile sidebar on window resize (>= md)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarOpen = isOpen || isHovered;

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="md:hidden fixed top-4 right-6 z-50">
                <button
                    onClick={toggleMobileSidebar}
                    className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-md shadow-md"
                    aria-label="Toggle sidebar"
                >
                    <Menu />
                </button>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside
                className={`
    fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300
    z-50 flex flex-col 
    ${sidebarOpen ? "w-64" : "w-20"}
    md:static md:translate-x-0
    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
  `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="flex md:hidden justify-end p-2">
                    <button
                        onClick={toggleMobileSidebar}
                        className="text-white text-xl p-1 hover:bg-gray-700 rounded"
                    >
                        <X />
                    </button>
                </div>

                {/* Toggle and close buttons */}
                <div className="flex">
                    <div className="p-4 font-bold text-lg text-center whitespace-nowrap select-none">
                        {sidebarOpen && (
                            <Link to={'/admin/dashboard'}>
                                <img
                                    className="logo z-50 w-full md:w-[101px] lg:w-[122px] xl:w-[220px]"
                                    alt="dashboard logo"
                                    src="/assets/images/footer_logo.png"
                                />
                            </Link>
                        )}
                    </div>
                    <div className="relative right-8 hidden md:flex p-3">
                        <button
                            onClick={toggleSidebar}
                            className="text-white text-xl p-1 hover:bg-gray-700 rounded"
                        >
                            {sidebarOpen ? <ListCollapse /> : <Menu />}
                        </button>
                    </div>
                    {/* Logo */}

                </div>





                {/* Navigation */}
                <nav className="flex flex-col sidebar-scroll  space-y-1 p-2 flex-1 min-h-0 overflow-y-auto">

                    {navItems.map((item, idx) =>
                        item.children ? (

                            <div key={idx}>
                                {sidebarOpen ? (
                                    <div className='flex items-center gap-3 px-3 text-sm mt-2 rounded transition-colors duration-200'>
                                        {item.component}
                                    </div>
                                ) : (
                                    <Dot className='ml-4' />
                                )}

                                <button
                                    onClick={() =>
                                        setActiveDropdown(
                                            activeDropdown === item.label ? null : item.label
                                        )
                                    }
                                    className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-gray-700"
                                >
                                    <div className="flex items-center gap-3 ">
                                        {item.icon}
                                        {sidebarOpen && <span>{item.label}</span>}

                                    </div>
                                    {sidebarOpen &&
                                        (activeDropdown === item.label ? (
                                            <ChevronDown size={16} />
                                        ) : (
                                            <ChevronRight size={16} />
                                        ))}
                                </button>


                                {activeDropdown === item.label && sidebarOpen && (
                                    <div className="flex  flex-col gap-1 mt-1 ">
                                        {item.children.map((subItem, subIdx) => (
                                            <div key={subIdx}>
                                                <NavLink
                                                    key={subIdx}
                                                    to={subItem.to}
                                                    className={({ isActive }) =>
                                                        `flex items-center gap-2 py-1 rounded px-2 text-sm ${isActive ? "bg-gray-700" : "hover:bg-gray-700"
                                                        }`
                                                    }
                                                    onClick={() => setIsMobileOpen(false)}
                                                >
                                                    {subItem.icon} {subItem.label}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : <div key={idx}>
                            {sidebarOpen ? (
                                <div className='flex items-center gap-3 px-3 rounded transition-colors duration-200'>
                                    {item.text}
                                </div>
                            ) : (
                                <Dot className='ml-4' />
                            )}
                            <NavLink
                                key={idx}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded transition-colors duration-200 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"
                                    }`
                                }
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {item.icon}

                                {sidebarOpen && <span>{item.label}</span>}
                            </NavLink>
                        </div>
                    )}
                </nav>
            </aside>

        </>
    );
};

export default Sidebar;
