import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/util";

const ContactTable = async () => {
  const contact = await getContacts();

  return (
    <table className="w-full text-sm text-left text-gray-600">
      <thead className="text-sm text-gray-700 uppercase bg-gray-100">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((contact, index) => (
          <tr key={contact.id}>
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{contact.phone}</td>
            <td className="py-3 px-6">
              {formatDate(contact.createdAt.toString())}
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
