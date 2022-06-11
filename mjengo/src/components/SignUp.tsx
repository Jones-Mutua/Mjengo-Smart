// import './App.css';
import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import axios from 'axios';
import tw from 'twin.macro';

import styled from 'styled-components';
// import Img5 from '../../assents/images/undraw_By_the_road_re_vvs7.svg'

const Register = styled.div`
 /* background: blue; */
 display: flex;
  align-items: center;
  flex-direction: column;
  /* padding-top: 1px; */
  margin-top: 50px;
  margin-left: 34em;
  margin-right: 34em;

  height: 80vh;
  /* width: -30%; */
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.15); */
   box-shadow: 0 8px 35px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;


${tw`
// text-sm h-full  w-full font-bold text-gray-900   block
// ml-96
// mr-96
font-bold text-gray-900
text-sm
bg-purple-300
// block
`}

`
const Links = styled.div`
color: white ;
/* background-color: white; */
/* background: white; */
${tw`
// bg-white
`}
`
const Top = styled.div`
margin-top: -10em;
${tw`
// text-sm h-full  w-full font-bold text-gray-900  
text-gray-900
font-bold
text-sm
w-full
`}
`
const Account = styled.div`
${tw`
text-3xl font-bold
text-gray-900 mt-4 text-center
`}
`
const Label = styled.label`
${tw`
text-sm font-bold text-gray-900 block
mt-5
flex
`}
`
const Contain = styled.div`
margin-bottom: -10em;
${tw`
max-w-md w-full mx-auto 
mt-6 bg-transparent p-1 border border-blue-300

`}
`
const Input  = styled.input`
box-shadow: 0 8px 35px 0 rgba(31, 38, 135, 0.37);

${tw`
w-full p-3 border border-blue-900 rounded mt-2 
`}
`
const All = styled.div`
${tw`
font-serif  text-sm  text-blue-300 mt-3
`}
`
const Button = styled.button`
color: red;
${tw`
w-full py-2 px-4 bg-purple-400 mt-2
 hover:bg-purple-300 
 rounded-md text-blue-900
`}
`
type UserSubmitForm = {
  fullname: string;
 
  email: string;
  password: string;
  confirmPassword: string;

};

export  function SignUp() {
 
     const [fullname, setFullname ] = useState('');
  
     const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

     const [ confirmPassword, setConfirmPassword ] = useState('');







  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    
  });

  const onSubmit = () => {
    // console.log(JSON.stringify(data, null, 2));

    axios.post("http://localhost:2000/api/auth/signup",{
   email,
   fullname,

   password,
  
   confirmPassword,

})
.then((res)=> {
  console.log(res.data);
})
.catch((err) => {
  console.log(err.message)
});

  };


  return (
    <Register className="" >
       <Top className="">
                <Account className="
           ">Create an Acount </Account>
          
    
            </Top>
            
            <div>
           
    <Contain className="">
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <Label className="">Full Name</Label>
          <Input
          onChange={e => setFullname(e.target.value)}
            type="text"
            required
            value={fullname}
            // {...register}
            className=''
          
          
          />
          <div className="invalid-feedback">
              {/* {errors.fullname?.message} */}
              </div>
        </div>

  

        <div className="form-group">
          <Label className="">Email</Label>
          <Input
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
            type="text"
            // {...register}
            className=''
          />
          <div className="invalid-feedback"></div>
        </div>

        <div className="form-group">
          <Label className="">Password</Label>
          <Input
          onChange={e => setPassword(e.target.value)}
            type="password"
            required
            value={password}
            {...register}
            className=''
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group">
          <Label className="">Confirm Password</Label>
          <Input
          onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            required
            autoComplete="off"
            value={confirmPassword}
            {...register}
            className=''
            
          />
          <div className="invalid-feedback">
            {/* {errors.confirmPassword?.message} */}
          </div>
        </div>
        <All className="" 
          
          
          >
          <Link to="/login">Already have an acount</Link>
          </All>
        <div className="form-group" >
          <Button onClick={onSubmit} type="submit" className="">
<Links>
<Link  to="/">Register</Link>
</Links>
          </Button>
         

         
        </div>
      </form>
    </Contain>

   
   </div>
    </Register>
  );
};








