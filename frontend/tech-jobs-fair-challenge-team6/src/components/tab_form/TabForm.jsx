import { Button, Form, Modal, Tabs, message } from "antd";

const TabForm = ({
  open,
  items,
  title,
  successMsg,
  errorMsg,
  confirmValue,
  onConfirm,
  onCancel,
  initialValues,
  setEditedValue,
}) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const showSuccessMsg = () => {
    messageApi.open({
      type: "success",
      content: successMsg,
    });
  };

  const showErrorMsg = () => {
    messageApi.open({
      type: "error",
      content: errorMsg,
    });
  };

  const onFinish = (values) => {
    form.resetFields();
    showSuccessMsg();
    onConfirm(values);
  };
  const onFinishFailed = (errorInfo) => {
    showErrorMsg();
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };
  return (
    <>
      {contextHolder}
      <Modal
        title={title}
        open={open}
        onConfirm={onConfirm}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          layout="vertical"
          form={form}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            style={{ minHeight: "550px" }}
          />
          <Form.Item style={{ display: "flex", justifyContent: "end" }}>
            <Button type="primary" htmlType="submit">
              {confirmValue}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TabForm;
