import useFirestore from "../../hooks/useFirestore";

const Admin = () => {
  const { docs } = useFirestore("guests");
  return (
    <table className='relative overflow-x-auto shadow-md'>
      <thead className='w-full text-sm text-left rtl:text-right'>
        <tr className='border-b-4'>
          <th scope='col' className='px-6 py-3'>
            First Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Last Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Attending
          </th>
          <th scope='col' className='px-6 py-3'>
            Adult
          </th>
          <th scope='col' className='px-6 py-3'>
            Child
          </th>
          <th scope='col' className='px-6 py-3'>
            Starter
          </th>
          <th scope='col' className='px-6 py-3'>
            Main
          </th>
          <th scope='col' className='px-6 py-3'>
            Dessert
          </th>
          <th scope='col' className='px-6 py-3'>
            Song Request
          </th>
          <th scope='col' className='px-6 py-3'>
            Additional Info
          </th>
        </tr>
      </thead>
      <tbody>
        {docs.map((doc) => (
          <tr key={doc.id} className='odd:bg-white even:bg-gray-300'>
            <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>
              {doc.firstName}
            </th>
            <td>{doc.lastName}</td>
            <td>{doc.attending}</td>
            <td>{doc.isAdult ? "Yes" : "No"}</td>
            <td>{doc.isChild ? "Yes" : "No"}</td>
            <td>
              {doc.adultChoice.starter}
              {doc.childChoice.starter}
            </td>
            <td>
              {doc.adultChoice.main}
              {doc.childChoice.main}
            </td>
            <td>
              {doc.adultChoice.dessert}
              {doc.childChoice.dessert}
            </td>
            <td>{doc.songRequest}</td>
            <td>{doc.additionalInfo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Admin;
