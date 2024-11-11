import { Link } from "react-router-dom";


const Category = ({route, imageUrl, categoryName}) => {
    return (
        <Link to={route} className="w-full">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={imageUrl} alt={categoryName} className="w-full object-cover" />
                <div className="p-4 text-center font-semibold text-white">{categoryName}</div>
            </div>
        </Link>
    );
};

export default Category;