// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }) =>
        "px-3 py-2 rounded-md text-sm font-medium " +
        (isActive ? "bg-gray-200" : "hover:bg-gray-100");

    return (
        <nav className="bg-white shadow">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    <div className="text-lg font-semibold">Brand</div>
                    <div className="flex space-x-2">
                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>
                        <NavLink to="/services" className={linkClass}>
                            Services
                        </NavLink>
                        <NavLink to="/portfolio" className={linkClass}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/contact" className={linkClass}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
