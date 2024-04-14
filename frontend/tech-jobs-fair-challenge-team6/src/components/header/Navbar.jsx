import React, { useCallback, useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, ROUTS } from "../../constants/constants";
import NewContactForm from "../contact_form/NewContactForm";
import { debounce } from "lodash";

const Navbar = ({ handleOnSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const debouncedHandleSearch = useCallback(debounce(handleOnSearch, 700), []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.isAuth);
    navigate(ROUTS.logIn);
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="navbar-logo">TechSolutions </div>
      <div className="search-box">
        <Input
          style={{ width: 304 }}
          allowClear
          onChange={(e) => debouncedHandleSearch({ search: e.target.value })}
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <Button
        onClick={showModal}
        className="add-new-contact-button"
        type="primary"
      >
        Add new contact
      </Button>
      <Button
        style={{ marginLeft: "30px", color: " #f7f7f7" }}
        onClick={handleLogOut}
        className="add-new-contact-button"
        type="text"
      >
        Log out
      </Button>
      <NewContactForm
        open={isModalOpen}
        onConfirm={handleOk}
        onCancel={handleCancel}
      ></NewContactForm>
    </Header>
  );
};

export default Navbar;
