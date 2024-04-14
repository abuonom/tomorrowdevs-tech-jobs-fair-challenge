import { Form, Select } from "antd";
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="1">+1</Option>
      <Option value="39">+39</Option>
    </Select>
  </Form.Item>
);

export default prefixSelector;
