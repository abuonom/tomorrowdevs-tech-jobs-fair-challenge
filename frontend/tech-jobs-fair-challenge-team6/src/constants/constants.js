export const ROUTS = { logIn: "/login", contacts: "/contacts" };
export const QUERY_KEYS = {
  getAllContacts: "getContactsList",
};
export const LOCAL_STORAGE_KEYS = {
  isAuth: "isAuthorizated",
  authUserData: "authorizatedUserData",
  page: "currentPage",
  sortName: "name",
  sortDirection: "desc",
};
export const FILTER_PARAMS = {
  department: [
    { label: "IT", value: "0" },
    { label: "HR", value: "1" },
    { label: "Finance", value: "2" },
    { label: "Suport", value: "3" },
  ],
  contactType: [
    { label: "Internal", value: "0" },
    { label: "External", value: "1" },
    { label: "Partner", value: "2" },
    { label: "Created by me ", value: "3" },
  ],
};
export const CONTACTS_PATH = "/contacts";
