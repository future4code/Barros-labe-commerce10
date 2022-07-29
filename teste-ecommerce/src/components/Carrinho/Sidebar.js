import React from "react";
import {
SidebarContainer,
SidebarMenu,
SidebarRoute,
SidebarBtnWrap
} from "./styleSide";

const Sidebar = ({ isOpen, toggle }) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarMenu>
                <h1>Carrinho:</h1>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/'>Fechar Pedido</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    );
};


export default Sidebar;