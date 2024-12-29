import Categories from "./Categories";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;