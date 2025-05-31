import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index !== 0 && (
                            <span className="mx-2 text-gray-400">/</span>
                        )}
                        {item.path ? (
                            <Link
                                to={item.path}
                                className="text-sm font-medium dark:text-white text-black hover:underline"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-sm dark:text-white font-medium text-gray-500">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
