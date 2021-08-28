import React from 'react';
import styled from 'styled-components';
import Phone from '../imgs/app.png';
import AnimatedShape from './AnimatedShape';

const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 480px){
        flex-direction: column;
        padding: 30px 20px;
      }
`;

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px){
        display: none;
      }
`;

const Image = styled.img`
    width: 80%;
    margin-left: 10px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 480px){
        width: 100%;
      }
`;

const Title = styled.span`
    font-size: 70px;

    @media only screen and (max-width: 480px){
        font-size: 50px;
      }
`

const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color:#333;
margin-top: 30px;
`

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

const Button = styled.button`
    width:150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color:#fff;
    border-radius: 7px;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 1px;
    margin-top: 20px;
`

function Feature() {
    return (
        <Container>
            <Left>
                <Image src={Phone} />
            </Left>
            <Right>
                <Title>
                    <b>good</b> design<br/>
                    <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>
                We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
                </Desc>
                <Desc> We care your business and guarantee you to achieve marketing goals.</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShape/>
        </Container>
    )
}

export default Feature;
