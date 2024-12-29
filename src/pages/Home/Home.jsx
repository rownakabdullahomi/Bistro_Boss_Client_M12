import Categories from "./Categories";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;