import React, { useState ,useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
// import {toast} from "react-toastify";


const Container = styled.div`
margin-left: 4em;
margin-right: 4em;
.styled {

  /* border-collapse: collapse ; */
  margin: 25px 0 ;
  font-size: 0.9em;
  font-family: sans-serif;
  /* min-width: 70em; */
  box-shadow: 0 0 20px  rgba(0, 0, 0, 0.2);

}
.head h1{
  text-transform: uppercase;
}
.head{
  display: flex;
  justify-content: space-between
}
.head button {
  /* background-color: green; */
  padding: 1em ;
  margin-top: 2em;
  box-shadow: 0 0 20px  rgba(0, 0, 0, 0.2);

}
.head button:hover{
  color: gray;
  /* background-color:  white; */
}


.edit {
  /* background-color: blue; */
  position: relative;
  margin:2em ;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  /* border: 0.5px solid ; */
}
.styled Button{
  /* display: flex;
  flex-direction: column; */
  margin-bottom: 2em;
}
.styled thead tr{
  text-align: left;
  color: gray;
  background: whitesmoke ;
  padding-top: 2em;
  padding-bottom:10em ;
}
.styled th,
.styled td {
  padding: 2em 15px ;
}
.styled tbody tr{
  border-bottom: 1px solid #ddd;
  /* margin-bottom: 2rem; */
}
`


export const ViewExam = () => {
  const [blog, setBlog] = useState([]);
  const {_id} = useParams();

  
useEffect(() =>  {
  const getPost = async () => {
    try {
      const res = await axios.get("http://localhost:2000/api/blog/");
      //  res.status(200).send('Data Successfully obtained');
      console.log("Data Successfully obtained");

const myBlog = res.data;
setBlog(myBlog)
    } catch (error) {
      console.log(error)

    }
  };
  getPost();

}, [blog]);
  
  
  // console.log(exam);

const detetePost = (_id,e) => {
  e.preventDefault();
  axios.delete(`http://localhost:2000/api/blog/${_id}`)
  .then(res => {
    console.log('Deleted Successfully');
    res.status(200).send('Deleted Successfully');
    // toast("blog is deleted from the system.");
    
  })
  .catch(err => console.log(err));
  // toast("Delete failed. Try again");

}

// renderCell: (params) => {
  return (
  
    < >
    <Container>
      <div className='head'>
  
     </div>
 

<table className="styled" 

>
  <thead>
    <tr>
      <th>Question</th>
      <th>Unit Name</th>
   
      <th>Action</th>

    </tr>
  </thead>
  {blog.map((blogs, key) => (
  <tbody key={key}>
   

    <tr>
   
    <td>{blogs.fullname }</td>
    
      <td>{blogs.title}</td>
      <td>{blogs.body}</td>
      <Link to={`/editExam/${blogs._id}` + _id}>
      <button variant="secondary" className="edit"> Edit</button>
</Link>
      <button variant="danger"  onClick={(e) => detetePost(blogs._id,e)}>Delete</button>
      {/* <Button variant="success" >Save</Button> */}

    </tr>

  </tbody>
      ))}

</table>

    </Container>
    </>
      
  )
}

  