import { LOCAL_STORAGE_KEYS } from "../../../constants/constants";
import { ContactList } from "./components/ContactList";
import { Flex, Cascader } from "antd";
const children = [
  {
    value: "asc",
    label: "A to Z",
  },
  {
    value: "desc",
    label: "Z to A",
  },
];
const sortOptions = [
  {
    value: "name",
    label: "Sorty by name",
    children: children,
  },
  {
    value: "surname",
    label: "Sorty by surname",
    children: children,
  },
];

export function Contacts({ contactsData, handleOnSort, handleOnPageChange }) {
  const onSortOptionChange = (value) => {
    const sortParams = {
      sort: value[0],
      direction: value[1],
    };
    localStorage.setItem(LOCAL_STORAGE_KEYS.sortName, value[0]);
    localStorage.setItem(LOCAL_STORAGE_KEYS.sortDirection, value[1]);
    handleOnSort(sortParams);
  };
  return (
    <>
      <Flex justify="space-between" align="center">
        <label style={{ fontWeight: "bold", fontSize: "500" }}>
          {contactsData?.data.length}{" "}
          {`contact${contactsData?.data.length > 1 ? "s" : ""}`}
        </label>
        <Cascader
          allowClear={false}
          options={sortOptions}
          defaultValue={["name", "asc"]}
          onChange={onSortOptionChange}
          placeholder="Sort by"
        />
      </Flex>
      <ContactList
        contactsData={contactsData}
        handleOnPageChange={handleOnPageChange}
      />
    </>
  );
}
