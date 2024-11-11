import { FaHome } from "react-icons/fa";
import { FaBookJournalWhills, FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { ImLibrary } from "react-icons/im";
import { IoLibraryOutline } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { TbBrandBlogger } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-base-200 text-orange-600">
                <ul className="menu p-4">
                    <li>

                        <NavLink to="/dashboard/userHome">
                            <ImLibrary className="mr-2" />
                            User Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/reservation">
                            <FaCalendar className="mr-2" />
                            Reserve Books
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/cart">
                            <IoLibraryOutline className="mr-2" />
                            My Shelf
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/sevices">
                            <FaBookJournalWhills className="mr-2" />
                            Library Services
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>

                        <NavLink to="/">
                            <FaHome className="mr-2"></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/books">
                            <LuLibrary className="mr-2" />
                            Book Collection
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/">
                            <TbBrandBlogger className="mr-2" />
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;