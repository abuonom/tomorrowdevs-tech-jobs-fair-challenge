import { Modal, Card, Avatar, Flex } from "antd";

import { Meta } from "antd/es/list/Item";
import { getContactTypeBy } from "../../utils/contact_type";
import { getDepartmentBy } from "../../utils/contact_department";

const ViewContactModal2 = ({ contactData, onClose }) => {
  const contact = {
    picture: contactData.profileImg,
    fullName: `${contactData.name} ${contactData.surname}`,
    number: contactData.number,
    email: contactData.email,
    social: contactData.social,
    birth: contactData.date_of_birth,
    type: getContactTypeBy(contactData.type),
    department: getDepartmentBy(contactData.department),
    note: contactData.note,
  };

  return (
    <Modal
      titleLineHeight={1.8}
      width={450}
      closablep
      open
      onCancel={onClose}
      footer={null}
    >
      <Card className="contact-info" style={{ border: "none" }}>
        <Meta
          avatar={
            <Avatar
              style={{ width: "100px", height: "100px" }}
              src={contact.picture ?? "..."}
            />
          }
          title={contact.fullName}
          description={
            <div className="content">
              <table>
                <tr>
                  <td>
                    <Flex vertical>
                      <label>Phone number</label>
                      <span>{contact.number ?? "-"}</span>
                    </Flex>
                  </td>
                  <td>
                    <Flex vertical>
                      <label>Email</label>
                      <span>{contact.email ?? "-"}</span>
                    </Flex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Flex vertical>
                      <label>Social</label>
                      <span>{contact.social ?? "-"}</span>
                    </Flex>
                  </td>
                  <td>
                    <Flex vertical>
                      <label>Birth</label>
                      <span>{contact.birth ?? "-"}</span>
                    </Flex>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Flex vertical>
                      <label>Type</label>
                      <span>{contact.type ?? "-"}</span>
                    </Flex>
                  </td>
                  <td>
                    <Flex vertical>
                      <label>Department</label>
                      <span>{contact.department ?? "-"}</span>
                    </Flex>
                  </td>
                </tr>
              </table>
              <div>
                <Flex vertical>
                  <label>Note</label>
                  <span>{contact.note ?? "-"}</span>
                </Flex>
              </div>
            </div>
          }
        />
      </Card>
    </Modal>
  );
};

export default ViewContactModal2;
