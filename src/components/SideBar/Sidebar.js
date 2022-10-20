import styled from "styled-components";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import { useThemeContext } from "../../hooks/useThemeToggler/useThemeContext";
import Search from "../Search/Search";

const Nav = styled.div`
  align-items: center;
  background: #493882;
  display: flex;
  height: 80px;
  justify-content: space-between;
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 4rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #32206b;
  width: 250px;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  overflow-y: auto;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { theme } = useThemeContext();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav style={{ background: theme.sidebarBackground }}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Search />
          <ThemeTogglerButton />
        </Nav>
        <SidebarNav
          sidebar={sidebar}
          style={{ background: theme.sidebarNavBackground }}
        >
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
