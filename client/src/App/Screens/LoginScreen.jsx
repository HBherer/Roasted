import React from "react";
import NavHeader from "../Components/Header/NavHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
   font-size: 18px;
   font-weight: bold;
   background-color: #D0C4A5;
   border: none;
   border-radius: 40px;
   padding: 15px 5rem;
   margin-top: 30px;
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

const LoginScreen = () => {
    return (
        <>
            <NavHeader />
            <MainLogin>
                <SectionLogin>
                    <Headind3>Rebonjour!</Headind3>
                    <FormLogin>
                        <LabelLogin htmlFor="LoginEmail">Adresse courriel</LabelLogin>
                        <InputLogin type="email" id="LoginEmail" name="email" placeholder="votre@email.com" required />

                        <LabelLogin htmlFor="LoginPassword">Mot de passe</LabelLogin>
                        <InputLogin type="password" id="LoginPassword" name="password" placeholder="••••••••••••••" required />

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