import React from "react";
import styled from "styled-components";
import Map from '../imgs/map.png';
import Phone from '../imgs/phone.png';
import Send from '../imgs/send.png'; 

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px){
    width: 100%;
  }
`;

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;

    @media only screen and (max-width: 480px){
      margin: 20px;
    }
`

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px){
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px){
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px){
    width: 50%;
    margin-right: 50px;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 480px){
    padding: 5px;
    margin-top: 15px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  @media only screen and (max-width: 480px){
    height: 70px;
    padding: 5px;
    margin-top: 25px;
  }
`;

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;

    @media only screen and (max-width: 480px){
      padding: 6px;
      font-size: 15px;
      margin: 15px -15px;
      margin-left: 30px;
    }
`

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px){
    width: 100%;
    margin-top: 25px;
  }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px){
      margin-bottom: 10px;
    }
`

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;

    @media only screen and (max-width: 480px){
      width: 15px;
    }
`

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;

    @media only screen and (max-width: 480px){
      font-size: 14px;
    }
`

function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
            <Title>Questions? <br/> Let's Get In Touch</Title>
          <Form>
            <LeftForm>
              <Input placeholder="User Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
            <AddressItem>
                <Icon src={Map} />
                <Text>123 Park Avenue St., New York, USA</Text>
            </AddressItem>
            <AddressItem>
                <Icon src={Phone} />
                <Text>+1 631 1234 5678</Text>
                <Text>+1 326 1234 5678</Text>
            </AddressItem>
            <AddressItem>
                <Icon src={Send} />
                <Text>contact@gmail.com</Text>
                <Text>sales@gmail.com</Text>
            </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
}

export default Contact;
