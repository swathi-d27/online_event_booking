import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/product");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const deleteuser = async (id) => {
    const confirmed = window.confirm("Would you like to delete the user?");
    if (confirmed) {
      await axios.delete(`http://localhost:8080/product/delete/${id}`);
      loadUsers();
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <Link className='btn btn-primary mx-2' to={"/add"}>
          ADD EVENT
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">ID</th>
              <th scope="col">EVENT</th>
              <th scope="col">DATE</th>
              <th scope="col">COLLEGE</th>
              <th scope="col">TICKETS</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.event}</td>
                <td>{user.date}</td>
                <td>{user.college}</td>
                <td>{user.tickets}</td>
                <td>
                  
                  <Link className='btn btn-outline-primary mx-2' to={`/edit/${user.id}`}>
                    Edit
                  </Link>
                  <button
                    className='btn btn-danger mx-2'
                    onClick={() => deleteuser(user.id)}
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
