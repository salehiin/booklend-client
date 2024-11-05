import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Hub from "../Hub/Hub";
import Categories from "./Categories/Categories";


const Home = () => {
    return (
        <div className="min-h-96">
            <Banner></Banner>
            <Featured></Featured>
            <Categories></Categories>
            <Hub></Hub>
        </div>
    );
};

export default Home;