import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

// Create Button Component
export const CreateButton = () => {
  return (
    <Link
      href={"/contact/create"}
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 py-[9px] px-5 rounded-sm text-sm"
    >
      <FaPlus size={15} className="mr-1" /> Create
    </Link>
  );
};

// Edit Button Component
export const EditButton = () => {
  return (
    <Link
      href={"/contact/create"}
      className="inline-flex items-center space-x-1 text-white bg-orange-400 hover:bg-orange-500 py-[9px] px-5 rounded-sm text-sm"
    >
      <FaEdit size={15} className="mr-1" /> Edit
    </Link>
  );
};

// Delete Button Component
export const DeleteButton = () => {
  return (
    <Link
      href={"/contact/create"}
      className="inline-flex items-center space-x-1 text-white bg-red-700 hover:bg-red-800 py-[9px] px-5 rounded-sm text-sm"
    >
      <FaRegTrashCan size={15} className="mr-1" /> Delete
    </Link>
  );
};
