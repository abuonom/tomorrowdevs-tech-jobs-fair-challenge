import { DatePicker, Form, Input } from "antd";

const { TextArea } = Input;

const AdvancedFields = () => {
  return (
    <>
      <Form.Item label="Social:" name="socialMediaURL">
        <Input />
      </Form.Item>

      <Form.Item label="Birth date:" name="dateOfBirth">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Note:" name="note">
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
      </Form.Item>
    </>
  );
};

export default AdvancedFields;
