import { Link } from "react-router-dom";
import logo from '../../../assets/blogo.png';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
import { FaBookJournalWhills } from "react-icons/fa6";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link className="hover:bg-orange-600 hover:text-[#333333]" to="/">Home</Link></li>
        <li><Link className="hover:bg-orange-600 hover:text-[#333333]" to="/books">All Books</Link></li>
        {
            user?.email ? <>
                <li><Link className="hover:bg-orange-600 hover:text-[#333333]" to="/">Add Book</Link></li>
                <li><Link className="hover:bg-orange-600 hover:text-[#333333]" to="/borrowings">Borrowed Books</Link></li>
                <li>
                    <Link to="/dashboard/shelf">
                        <button className="btn">
                            {/* <FaShoppingCart className="mr-2"></FaShoppingCart> */}
                            <FaBookJournalWhills className="mr-2" />
                            <div className="badge badge-warning">+</div>
                        </button>
                    </Link>
                </li>
            </>
                :
                (null)
                    }


    </>

    return (
        <div className="z-10">
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-orange-600">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-orange-600 shadow">
                            {navItems}

                        </ul>
                    </div>
                    <Link to="/" className="w-8 flex gap-1">
                        <img src={logo} className="" alt="" />
                        <p className="text-orange-600 text-xl font-semibold">Booklend</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex items-center px-1 text-orange-600">
                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? <>
                        {/* <Link to="/borrowings" >My Bookings</Link> */}
                        <Link onClick={handleLogOut} className="btn btn-outline text-orange-600 hover:bg-orange-600">Log out</Link>
                    </>
                        : <Link className="btn btn-outline text-orange-600 hover:bg-orange-600" to="/login">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;