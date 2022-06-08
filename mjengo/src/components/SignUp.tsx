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
// background: blue;

${tw`
text-sm h-full  w-full font-bold text-gray-900   block
`}

`
const Top = styled.div`
${tw`
text-sm h-full  w-full font-bold text-gray-900   block
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
`}
`
const Contain = styled.div`
${tw`
max-w-md w-full mx-auto mt-4 bg-transparent p-8 border border-blue-300
`}
`
const Input  = styled.input`
${tw`
w-full p-2 border border-blue-300 rounded mt-1 
`}
`
const All = styled.div`
${tw`
font-medium  text-sm  text-blue-500
`}
`
const Button = styled.button`
${tw`
w-full py-2 px-4 bg-gray-500 hover:bg-gray-700 rounded-md text-green-200 
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
            <Link  to="/">Register</Link>
          </Button>
         

         
        </div>
      </form>
    </Contain>

   
   </div>
    </Register>
  );
};








