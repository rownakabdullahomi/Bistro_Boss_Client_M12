import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"what's new?"}
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
              {...register("name", {required: true})}
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category", {required: true})}
                className="select select-bordered w-full"
              >
                <option disabled selected>
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
                {...register("price", {required: true})}
                className="input input-bordered w-full"
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
              {...register("recipe", {required: true})}
            ></textarea>
          </label>

          {/* File Input */}
          <div className="form-control w-full my-6">
            <input  {...register("image", {required: true})}type="file" className="file-input " />
          </div>

          <button className="btn btn-outline btn-neutral">
            <input type="submit" value={"Add Item"} />
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
