import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const [theme, setTheme] = useState('light');
    const location = useLocation();
    const mainRef = useRef(null); 

    
    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTop = 0;
        }
    }, [location.pathname]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('admin-theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('admin-theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Header theme={theme} toggleTheme={toggleTheme} />
                    <main
                        ref={mainRef}
                        className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-[#1F2937] text-gray-900 dark:text-white transition-colors"
                    >
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
