import React from "react";
import styled from 'styled-components';
import tw from 'twin.macro';

const SectionThreeWrapper = styled.div`
    section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    ${tw`
    bg-purple-100
    `}
}
.container {
    width: 100%;
    /* margin:0 auto; */
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.left {
    width: 50%;
    height: 600px;
    /* background: url(./images/jones5.jpg) ; */
   background-image: url('../assets/img3.jpg');
    ${tw`
    bg-purple-200
    
    `}

    border-radius: 8px;
}
.right{
    width: 35%;
    height: 450px;
    background-color: #b6cb58;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 8px;
    /* color: rgb(24, 27, 27);  */
    margin-left: -150px;
    ${tw`
    bg-purple-400
    `}
}
.right h2{
    font-size: 35px;
    font-weight: lighter;
    color: #041424;
}
.right p{
    margin: 20px 0;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
}

.content h3{
    font-size: 34;
    color: rgb(242, 243);
    margin-bottom: 15px;
    text-align: center;
}
.content p {
    color: rgb(9, 16, 22);
    font-size: 1rem;
    text-transform: capitalize;
}
.content hr{
  
    font-size: 34;
    color: rgb(35, 38, 43);
    margin-bottom: 1rem;
}
.content button {
    width: 100%;
    padding: 15px 20px;
    border: 0;
    border-radius: 10rem;
    background: rgb(44, 62, 80);
    color: aliceblue;
    font-size: 1.4rem;
    font-weight: 700;
    transition: .3s;
    }
    .content input {
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
        border: 1px solid #999;
        border-radius: 10rem;
        outline-color: #999;
        margin-bottom: 1rem;
    }
    .content button:hover {
        background: rgba(44, 62, 80, .8);
    } 
@media only screen and (max-width: 769px){
    .container{
        flex-direction: column;
    }
}
`

export default function SectionThree() {
    return (

        <SectionThreeWrapper>
            <section>
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="content">
                            <h2>Subscribe To Our Newsletter</h2>
                            <p>Get Updates to news & events</p>
                            <hr></hr>
                            <h3>
                                We offer high-quality education.
                            </h3>
                            <form action="#">
                                <input
                                    type="email"
                                    name="email_address"
                                    placeholder="Your Email Address"
                                />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </SectionThreeWrapper>
       
    );
}
