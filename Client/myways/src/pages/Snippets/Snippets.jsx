import React, { useState } from "react";
import "./Snippets.css";
import useFetch from "../../useFetch";
import axios from 'axios'
// import axios from "axios";
const Snippets = () => {
  const { data } = useFetch("http://localhost:5000/snippets/snippets_Display");

  const [name, setName] = useState();
  const [detail, setDetail] = useState();

  const snippetsDetail = {
    name : name,
    detail: detail
  }

  const dataSubmit = async () =>{
    try {
      const datasend = await axios.post("http://localhost:5000/snippets/snippetsAdd",{snippetsDetail})

    } catch (error) {
      console.log(error);
    }
  }

  const snippetsDelete = (_id) =>{
    fetch(`http://localhost:5000/snippets/snippets_Delete/${_id}`,{method: "DELETE"}).then(()=>{
      console.log("Deleted");
    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <div className="form">
            <form action="http://localhost:5000/snippets/snippetsAdd" method="post">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="detail">Detail : </label>
            <input
              type="text"
              name="detail"
              id= "detail"
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
            <button onClick={dataSubmit}>Submit</button>
            </form>
          </div>
        </div>
        <div className="cardContainer">
          {data?.map((value) => {
            return (
              <div className="card">
                <h3>{value.name}</h3>
                <p>{value.detail}</p>
                <button onClick={() =>{
                  snippetsDelete(value._id)
                }}>delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Snippets;
