

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const MhsList = () => {
  const [Mahasiswa, setMhs] = useState([]);
 
  useEffect(() => {
    getMhs();
  }, []);
 
  const getMhs = async () => {
    const response = await axios.get("http://localhost:5000/Mahasiswa");
    setMhs(response.data);
  };
 
  const deleteMhs = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/Mahasiswa/${id}`);
      getMhs();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (  
    <div className="columns mt-6 is-centered"> 
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>NIM</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Mahasiswa.map((mahasiswa, index) => (
              <tr key={mahasiswa.id}>
                <td>{index + 1}</td>
                <td>{mahasiswa.name}</td>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.address}</td>
                <td>{mahasiswa.gender}</td>
                <td>
                  <Link
                    to={`edit/${mahasiswa.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteMhs(mahasiswa.id)}
                    className="button is-small is-danger"
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
};
 
export default MhsList;