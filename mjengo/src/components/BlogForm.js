import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import * as React from 'react';
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

import axios from "axios";

const Container = styled.div`
  .mane {
    margin: 30px;
    background: whitesmoke;
    height: 70vh;
    width: 60em;
    align-items: center;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }

  .unit {
    text-transform: capitalize;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  /* .text {
  margin-bottom:20em ;
} */
  #cars {
  }
  .regform h2 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .inputs {
    display: flex;
    margin: 2em 0em;
    justify-content: space-around;
  }
  .inpu {
    margin: 2em 10em;

  }
  #cars{
    padding: 1em ;
  }
  .inpu input {
    box-shadow: 5px 10px 20px 10px rgba(0, 0, 0, 0.2);
    /* box-shadow: 5px 10px #888888; */
  }
  .inpu input {
    padding: 1em 1em 1em 1em;
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-right: 10em;
    margin-left: 5em;
  }
  .head button {
    padding: 1em;
    margin-top: 2em;
    box-shadow: 5px 5px gray ;

  }
`;

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fullname, setFullname] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault();

    axios
      .post("http://localhost:2000/api/create", {
        title,
        body,
        fullname
      })
      .then((res) => {
        console.log("Post added Successfully");
      })
      .catch((err) => {
        console.log("Their was an error when adding post !! Try Again");
      });
//   };
  return (
    <Container>
      <div className="head">
        <h2> Mjengo Smart</h2> 
       
      </div>{" "}
      <div className="mane">
        <div className="reqform">
          <h2> Create New Post </h2>{" "}
        </div>{" "}
        <form action="post">
          <h3 className="name"> Full Name </h3>{" "}
          
          <div className="text">
            <textarea
              required
              name="question"
              placeholder="Enter your name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              rows="3"
              cols="60"
            ></textarea>{" "}
          </div>{" "}

          <h3 className="name"> Title</h3>{" "}

          <div className="text">
            <textarea
              required
              name="question"
              placeholder="Add Title of your post here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows="5"
              cols="60"
            ></textarea>{" "}
          </div>{" "}
          <h3 className="name"> Description </h3>{" "}

          <div className="text">
            <textarea
              required
              name="question"
              placeholder="Enter your blog post here"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="8"
              cols="60"
            ></textarea>{" "}
          </div>{" "}
          <div className="inpu">
            <input type="submit" value="Submit Questions" />
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </Container>
  );
}