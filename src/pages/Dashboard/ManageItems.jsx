import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  const handelDeleteItem = (item) => {};
  return (
    <div>
      <SectionTitle
        heading={"manage all items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>

                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <button
                      
                      className="btn btn-ghost btn-sm bg-orange-500"
                    >
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrash className="text-red-600"></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
