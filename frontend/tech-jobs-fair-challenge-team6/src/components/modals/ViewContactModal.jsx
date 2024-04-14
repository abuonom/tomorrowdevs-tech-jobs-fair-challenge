import React from "react";
import { Space, Typography, Modal, Flex, Divider } from "antd";
import "./viewContactsModal.css";
const { Text } = Typography;

const ViewContactModal = ({
  title = "Contact",
  onClose,
  contactData,
  customFooter,
}) => {
  return (
    <Modal
      titleLineHeight={1.8}
      width={750}
      closable
      title={title}
      open
      onCancel={onClose}
      footer={customFooter}
    >
      <Flex wrap="wrap" gap={40} justify="center">
        <Space size="small" direction="vertical">
          <Divider className="divider" />
          <Text className="label">First Name</Text>
          <Text>{contactData.name}</Text>
          <Divider className="divider" />
          <Text className="label">Last Name</Text>
          <Text>{contactData.surname}</Text>
          <Divider className="divider" />
          <Text className="label">Phone number</Text>
          <Text strong>{contactData.number}</Text>
          <Divider className="divider" />
        </Space>
        <Space size="small" direction="vertical">
          <Divider className="divider" />
          <Text className="label">Email</Text>
          <Text>{contactData.email}</Text>
          <Divider className="divider" />
          <Text className="label">Social media</Text>
          <Text>{contactData.social_media_url}</Text>
          <Divider className="divider" />
          <Text className="label">Date of birth</Text>
          <Text>{contactData.date_of_birth}</Text>
          <Divider className="divider" />
        </Space>
      </Flex>
    </Modal>
  );
};
export default ViewContactModal;
