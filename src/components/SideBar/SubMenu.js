import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 60px;
  font-size: 4rem;

  &:hover {
    background: #252831;
    border-left: 0.4rem solid #632ce4;
    cursor: pointer;
  }
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  color: #f5f5f5;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const SidebarLabel = styled.span`
  font-size: 1.6rem;
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      <div>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon && <Icon src={item.icon} />}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </div>
    </>
  );
};

export default SubMenu;
