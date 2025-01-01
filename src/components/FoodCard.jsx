
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = food => {
    if(user && user.email){
      // send cart item to db

    }
    else{
      Swal.fire({
        title: "You are not logged in !",
        text: "Please login to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to login page
          navigate("/login")
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-4 rounded-lg">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
