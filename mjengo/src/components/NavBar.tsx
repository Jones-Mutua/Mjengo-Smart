import React, { useState ,useEffect} from 'react';
import getCurrentUser from "../lib/auth";
import  './NavBar.css';

import { useNavigate } from "react-router-dom";

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
    <>
    <nav>
        <label  className="logo">Mjengo Smart</label>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            {
                !user && (
<>
                 <li><a href="signup">Register</a></li>
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
    </>
  )
}
