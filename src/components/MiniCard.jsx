import React from 'react';
import styled from 'styled-components';
import Search from '../imgs/search.png';

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0pc 0pc 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0pc 0pc 17px -11px rgba(0, 0, 0, 0.58);

    @media only screen and (max-width: 480px){
        width: 50px;
        font-size: 14px;
      }
`

const Image = styled.img`
    width: 20px;
`

const Text = styled.span`
    margin-top: 10px;
    text-align: center;
`

function MiniCard() {
    return (
        <Container>
            <Image src={Search} />
            <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        </Container>
    )
}

export default MiniCard
