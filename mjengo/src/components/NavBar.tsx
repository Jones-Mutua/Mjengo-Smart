import React, { useState ,useEffect} from 'react';
import getCurrentUser from "../lib/auth";
import  './NavBar.css';

import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import tw from 'twin.macro';

const Nav = styled.div`

    ${tw`
        bg-purple-200
        `}


`




export const NavBar = () => {
 const navigate = useNavigate();

  const [user, setUser] = useState(null);
 

 const handleLogoutClick = (e: React.FormEvent) => {
     localStorage.removeItem("user");
     navigate("/");
     window.location.reload();
 };
 

 useEffect(() => {
     const user = getCurrentUser();

     if(user) {
         setUser(user);
     }
 }, []);
  return (
    <Nav>
    <nav>
        <label  className="logo">Mjengo Smart</label>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="contactus">Contact Us</a></li>
            {
                !user && (
<>
                 <li><a href="/signup">Register</a></li>
                 <li><a href="/login">Login</a></li>
                 </>
                )

            }
                  {
              user && (
                  <li>
                      <span style={{
                          cursor: 'pointer',
                      }}
                      onClick={handleLogoutClick}
                      >
                          Logout
                      </span>
                  </li>
              )
          }

        </ul>
    </nav>
    </Nav>
  )
}
