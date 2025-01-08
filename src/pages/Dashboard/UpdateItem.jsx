import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMGBB_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();
//   console.log(item);

const { register, handleSubmit, reset } = useForm();

const axiosPublic = useAxiosPublic();
const axiosSecure = useAxiosSecure();

const onSubmit = async(data) => {
  // console.log(data);
  //  upload img to imgbb and get url
  const imgFile = {image: data.image[0]}
  const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers:{
          "content-type" : "multipart/form-data"
      }
  });
  if(res.data.success){
      // now send the item data to the server
      const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: res.data.data.display_url
      }
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
          reset();
          // show success alert
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is update to the menu`,
              showConfirmButton: false,
              timer: 1500
            });
      }
  }
  // console.log(res.data);
};
  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Refresh Info"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              defaultValue={item.name}
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
                defaultValue={item.price}
              />
            </label>
          </div>

          {/* Recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
              defaultValue={item.recipe}
            ></textarea>
          </label>

          {/* File Input */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input "
            />
          </div>

          <button className="btn btn-outline btn-neutral">
            <input type="submit" value={"Add Item"} />
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
