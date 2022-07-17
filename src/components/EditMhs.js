

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditMhs = () => {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getMahasiswaById();
  }, []);
 
  const updateMhs = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/Mahasiswa/${id}`, {
        name,
        nim,
        address,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  const getMahasiswaById = async () => {
    const response = await axios.get(`http://localhost:5000/Mahasiswa/${id}`);
    setName(response.data.name);
    setNim(response.data.nim);
    setAddress(response.data.address);
    setGender(response.data.gender);
  };
 
  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateMhs}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nim</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="nim"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="address"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

 
export default EditMhs;