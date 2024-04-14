import React from "react";
import { Layout } from "antd";
import Filter from "../filter/Filter";
import "./sidebar.css";

const { Sider } = Layout;

const Sidebar = ({ handleOnFilterParamsChange }) => {
  return (
    <Sider className="sidebar-box" width={210}>
      <Filter handleOnFilterParamsChange={handleOnFilterParamsChange} />
    </Sider>
  );
};

export default Sidebar;
