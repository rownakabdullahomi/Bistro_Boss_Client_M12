import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soups = menu.filter(item => item.category === "soup");
    const salads = menu.filter(item => item.category === "salad");
    const pizzas = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            {/* Offered Section */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert Section */}
            <MenuCategory 
                items={desserts}
                title={"Dessert"}
                coverImg={dessertImg}
            ></MenuCategory>

            {/* Pizza Section */}
            <MenuCategory 
                items={pizzas}
                title={"Pizzas"}
                coverImg={pizzaImg}
            ></MenuCategory>

            {/* Salad Section */}
            <MenuCategory 
                items={salads}
                title={"Salad"}
                coverImg={saladImg}
            ></MenuCategory>

            {/* Soup Section */}
            <MenuCategory 
                items={soups}
                title={"Soup"}
                coverImg={soupImg}
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;