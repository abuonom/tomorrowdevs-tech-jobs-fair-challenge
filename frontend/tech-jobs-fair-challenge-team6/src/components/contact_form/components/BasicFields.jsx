import { Form, Input, Select } from "antd";
import prefixSelector from "./PrefixSelector";
import { useState } from "react";
import { FILTER_PARAMS } from "../../../constants/constants";
const { Option } = Select;

const BasicFields = ({ data }) => {
  const [isInternal, setIsInternal] = useState(
    data?.type === FILTER_PARAMS.contactType[0].value
  );

  const handleTypeChange = (value) => {
    setIsInternal(value === FILTER_PARAMS.contactType[0].value);
  };

  return (
    <>
      <Form.Item
        label="Name:"
        name="name"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname:"
        name="surname"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number:"
        name="number"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
        ]}
      >
        <Input
          //  addonBefore={prefixSelector}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Email:"
        name="email"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
          {
            type: "email",
            message: "Please enter a valid email address.",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="type"
        label="Type:"
        rules={[
          {
            required: true,
            message: "This field is required.",
          },
        ]}
      >
        <Select
          placeholder="Select a type"
          onChange={handleTypeChange}
          options={FILTER_PARAMS.contactType}
        />
      </Form.Item>

      {isInternal ? (
        <Form.Item
          name="department"
          label="Department:"
          rules={[
            {
              required: true,
              message: "This field is required.",
            },
          ]}
        >
          <Select
            placeholder="Select a department"
            options={FILTER_PARAMS.department}
          />
        </Form.Item>
      ) : (
        <Form.Item name="" label="Department:">
          <Select placeholder="-" disabled={true}></Select>
        </Form.Item>
      )}
    </>
  );
};

export default BasicFields;
