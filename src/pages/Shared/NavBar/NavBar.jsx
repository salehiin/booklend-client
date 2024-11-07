import { Link } from "react-router-dom";
import logo from '../../../assets/blogo.png';


const NavBar = () => {

    const navItems = <>
        <li><Link className="hover:bg-[#F2B263] hover:text-[#333333]" to="/">Home</Link></li>
        <li><Link className="hover:bg-[#F2B263] hover:text-[#333333]" to="/">Add Book</Link></li>
        <li><Link className="hover:bg-[#F2B263] hover:text-[#333333]" to="/books">All Books</Link></li>
        <li><Link className="hover:bg-[#F2B263] hover:text-[#333333]" to="/">Borrowed Book</Link></li>
    </>

    return (
        <div className="z-10">
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navItems}

                        </ul>
                    </div>
                    <Link className="w-8 flex gap-1" to="/" clLinkssName="btn btn-ghost text-xl">
                        <img src={logo} className="" alt="" />
                        <p className="text-[#F2B263] text-xl font-semibold">Booklend</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#F2B263]">
                        {navItems}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-outline text-[#F2B263] hover:bg-[#F2B263]" to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;