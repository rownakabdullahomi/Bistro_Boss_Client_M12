import Categories from "./Categories";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;