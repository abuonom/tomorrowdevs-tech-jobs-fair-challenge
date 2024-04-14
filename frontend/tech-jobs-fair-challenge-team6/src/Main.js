import React, { useEffect, useState } from "react";
import { Alert, Layout } from "antd";
import Navbar from "./components/header/Navbar";
import { Contacts } from "./components/contents/contacts/Contacts";
import Sidebar from "./components/sidebar/Sidebar";
import { getAllContacts } from "./api/contacts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, QUERY_KEYS, ROUTS } from "./constants/constants";
const { Content } = Layout;

function Main() {
  const currentPage = localStorage.getItem(LOCAL_STORAGE_KEYS.page);
  const sortName = localStorage.getItem(LOCAL_STORAGE_KEYS.sortName);
  const sortDirection = localStorage.getItem(LOCAL_STORAGE_KEYS.sortDirection);

  const [filterParams, setFilterParams] = useState({
    page: currentPage,
    sort: sortName,
    diraction: sortDirection,
  });
  const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_KEYS.isAuth);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.getAllContacts],
    queryFn: () => getAllContacts(filterParams),
  });

  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate(ROUTS.logIn);
  }

  const handleOnFilterParamsChange = (checkedValues, key) => {
    setFilterParams((prevState) => ({ ...prevState, [key]: checkedValues }));
  };

  const handleOnPageChange = (param) => {
    setFilterParams((prevState) => ({ ...prevState, ...param }));
  };
  const handleOnSearchSort = (search) => {
    setFilterParams((prevState) => ({ ...prevState, ...search, page: 1 }));
  };

  useEffect(() => {
    refetch();
  }, [filterParams]);

  return (
    <>
      {isLoggedIn ? (
        <Layout style={{ height: "100%" }}>
          <Navbar handleOnSearch={handleOnSearchSort} />
          <Layout>
            <Sidebar handleOnFilterParamsChange={handleOnFilterParamsChange} />
            <Layout
              style={{
                padding: "24px 24px",
                overflow: "auto",
              }}
            >
              {/* <Alert message="Success Tips" type="success" showIcon closable /> */}
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "white",
                  borderRadius: "20px",
                  overflowY: "hidden",
                }}
              >
                <Contacts
                  contactsData={data}
                  handleOnSort={handleOnSearchSort}
                  handleOnPageChange={handleOnPageChange}
                />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Main;
