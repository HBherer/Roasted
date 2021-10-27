import React from "react";
import styled from "styled-components";
import LogoRCC from "../Buttons/LogoRCC";
import ProfilIcons from "../Buttons/ProfilIcon";
import MenuH from "../Buttons/MenuH";

const ContainerNav = styled.nav`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 22px 16px 18px 66px;
`;
const PositionNav = styled.div`
   display: flex;
`

const NavHeader = () => {
    return (
        <ContainerNav>
            <LogoRCC />
            <PositionNav>
                <ProfilIcons />
                <MenuH />
            </PositionNav>
        </ContainerNav>
    )
}

export default NavHeader;