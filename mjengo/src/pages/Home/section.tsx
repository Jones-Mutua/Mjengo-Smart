import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const Section = styled.div`
${tw`
pt-11
pb-10
mt-28
`}
`;
const MainHeading = styled.div`
/* color: blue;
font-size: 26px; */
${tw`
text-3xl
flex
 text-purple-900 
items-center
justify-center 
h-10
pt-3
`}
/* display: center; */

`;

const Underline = styled.div`

${tw`
h-1
flex
items-center
mx-auto
justify-center 
// w-16
bg-purple-500
mt-2.5
mb-2.5
ml-96
mr-96
`}

`;

const Text = styled.p`
font-family: san;
${tw`
ml-5
mr-5
items-center
text-3xl
flex
flex-wrap
justify-center 

`}

`

export function AppSection(){
    return (
        <Section >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <MainHeading>Our Company</MainHeading>
                        <Underline className=" mx-auto"></Underline>
                   <Text>Lorem ipsum dolor sit amet, consectetur 
                       adipisicing elit. Aut magnam error facere, 
                       culpa distinctio saepe, quos velit expedita eos,
                       xercitationem rerum. Et numquam ipsum,
                        dicta veritatis nostrum tenetur deserunt nam.</Text>
                    </div>
                </div>
            </div>

        </Section>
    )
}