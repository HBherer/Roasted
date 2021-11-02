import React, { useState } from "react";
import NavHeader from "../Components/Header/NavHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Messages from "../Components/Buttons/Messages";

const MainLogin = styled.main`
   display: flex;
   justify-content: center;
   @media (max-width: 960px) {
    padding: 26px;
  }
`;
const SectionLogin = styled.section`
   display: flex;
   justify-content: left;
   flex-wrap: wrap;
   width: 40%;
   @media (max-width: 960px) {
    width: 100%;
  }
`;
const Headind3 = styled.h3`
   width: 100%;
`;
const FormLogin = styled.form`
   width: 100%;
   margin-top: 24px;
`;
const LabelLogin = styled.label`
   width: 100%;
   font-size: 18px;
   font-weight: bold;
`;
const InputLogin = styled.input`
   width: 88%;
   margin: 8px 0px 16px 0px;
   font-family: 'Roboto', sans-serif;
   background-color: #1F100B;
   padding: 16px 22px;
   border: none;
   border-radius: 40px;
   color: #D3B992;
   margin-right: 30px;
`;
const ContainerEditBtnLogin = styled.div`
   margin-top: 52px;
   text-align: center;
   @media (max-width: 960px) {
    margin-top: 20px;
  }
`
const BtnLogin = styled.button`
   cursor: pointer;
   font-size: 18px;
   font-weight: bold;
   background-color: #D0B98E;
   border: none;
   border-radius: 40px;
   padding: 15px 5rem;
   margin-top: 30px;
   &:hover {
      background-color: #EEDDBE;
   }
   &:active {
      
   }
`;

const ContainerLogin = styled.div`
   width: 100%;
   text-align: center;
   margin-top: 42px;
`;
const LinkToLogin = styled(Link)`
   font-style: 18px;
   font-family: 'Roboto', sans-serif;
   font-weight: bold;
   color: #000000;
`;

const LoginScreen = ({ setAuth }) => {

   const [serverMessage, setServerMessage ] = useState([])
   const [inputs, setInputs] = useState({
      email: "",
      password: ""
   })    
   const {email, password} = inputs;

   const onChange = (e) => {
     setInputs({...inputs, [e.target.name] : e.target.value });
   };   

   const onSubmitForm = async (e) => {
      e.preventDefault();

      try {
         const body = {email, password};
         const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body)
      });
         const status = await response.status;
         const res = await response.json()
         setServerMessage([])
         if (status !== 200) {
            setAuth(false);
            setServerMessage( arr => [...arr, res])
         } else {
            localStorage.setItem("token", res.token);
            setAuth(true); 
         }
      }  catch (err) {
         console.error(err.message)
      }
   }
   
   
   
    return (
        <>
            <NavHeader />
            <MainLogin>
                <SectionLogin>
                    <Headind3>Rebonjour!</Headind3>
                    <FormLogin onSubmit={onSubmitForm}>
                        <Messages serverMessage={serverMessage} />
                        <LabelLogin htmlFor="LoginEmail">Adresse courriel</LabelLogin>
                        <InputLogin type="email" id="LoginEmail" name="email" placeholder="votre@email.com" value={email} onChange={e => onChange(e)} required />

                        <LabelLogin htmlFor="LoginPassword">Mot de passe</LabelLogin>
                        <InputLogin type="password" id="LoginPassword" name="password" placeholder="••••••••••••••" value={password} onChange={e => onChange(e)} required />
                        <ContainerEditBtnLogin>
                            <BtnLogin type="submit">Connexion</BtnLogin>
                        </ContainerEditBtnLogin>
                    </FormLogin>
                    <ContainerLogin>
                        <p>Vous n’avez pas encore de compte?</p>
                        <LinkToLogin to="/register">Inscrivez-vous!</LinkToLogin>
                    </ContainerLogin>
                </SectionLogin>
            </MainLogin>
        </>
    )
}

export default LoginScreen;