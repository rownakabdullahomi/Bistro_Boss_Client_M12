import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="my-16">
        {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex items-center justify-center">
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
