import Link from "next/link";
import { FaPlus } from "react-icons/fa";

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
