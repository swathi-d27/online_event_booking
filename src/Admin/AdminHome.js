import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [admin, setadmin] = useState([]);

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    try {
      const result = await axios.get("http://localhost:8080/product");
      setadmin(result.data);
    } catch (error) {
      console.error("Error loading admins:", error);
      // Handle the error (e.g., display an error message to the admin)
    }
  };

  const deleteadmin = async (id) => {
    const confirmed = window.confirm("Would you like to delete the admin?");
    if (confirmed) {
      await axios.delete(`http://localhost:8080/product/delete/${id}`);
      loadAdmin();
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <Link className='btn btn-primary mx-2' to={"/add"}>
         ADD SUBADMIN
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">ADMINID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">COLLEGE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((admin, index) => (
              <tr key={admin.id}>
                <th scope="row">{index + 1}</th>
                <td>{admin.id}</td>
                <td>{admin.event}</td>
                <td>{admin.date}</td>
                <td>{admin.college}</td>
                <td>{admin.tickets}</td>
                <td>
                  
                  <Link className='btn btn-outline-primary mx-2' to={`/edit/${admin.id}`}>
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger mx-2'
                    onClick={() => deleteadmin(admin.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
