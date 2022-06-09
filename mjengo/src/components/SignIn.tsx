import React, { useState } from "react";
// import { Link, Redirect} from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
// import img11 from "../../assents/images/undraw_Order_ride_re_372k.svg"
import axios from "axios";
import tw from 'twin.macro';
import styled from 'styled-components';


const MainContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1px;
  margin-top: 50px;
  /* height: 80vh; */
  /* width: 30%; */
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.15); */
   box-shadow: 0 8px 35px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;





  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small; 
     }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  } 
  ${tw`
// min-h-screen
bg-transparent
// flex
// flex-col
// justify-center
// place-items-center
// max-w-md
w-full
mx-auto
`}
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: red;
  padding-top: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  color: purple;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  color: green;
  /* hover: #82ec82; */
`;
const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;


const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: blue;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const Container = styled.div`

${tw``}
`

export const SignIn = () => {
  const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const[redirect, setRedirect] = useState('');
  
  
      const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();



          axios
               .post('http://localhost:2000/api/auth/login', {
                      email,
                      password,
                  })
                  .then((res)=> {
                      const user = res.data.data;
                      localStorage.setItem("user", JSON.stringify(user));
                      if (user.role === 'admin') {
                          setRedirect("/")
                      }else if (user.role === 'client') {
                          setRedirect('/');
                          window.location.reload();
                      }
                  })
                  .catch((err) => {
                      console.log(err.message);
                  });
          
              };
              


const Login =(
   
        < Container>
            <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input 
        type="text" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="mjengo@gmail.com" 
        name="email" 
      
         />
        <Input
         type="password" 
         value={password}
                required        
         placeholder="*********"
         onChange={(e) => setPassword(e.target.value)}
          name="password"

 />
      </InputContainer>
      <ButtonContainer>
          
      <StyledButton onClick={handleSubmit} type="submit" 
        
        >
           <Link to={redirect}></Link>
       
          lOGIN</StyledButton>
      </ButtonContainer>
      <LoginWith className="hover:-green-700">
        <Link to="/contact">OR SIGN UP</Link>
        </LoginWith>
      <HorizontalRule />
      <IconsContainer>
       
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer> 
        </Container>
    )
 
return redirect ? <Navigate to={redirect} /> : Login;
    }
