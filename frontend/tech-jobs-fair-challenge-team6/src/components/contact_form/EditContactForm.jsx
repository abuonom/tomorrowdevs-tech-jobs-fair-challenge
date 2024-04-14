import React from "react";
import BasicFields from "./components/BasicFields";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AdvancedFields from "./components/AdvancedFields";
import { errorMessage, successMessage } from "./constants/messages";
import TabForm from "../tab_form/TabForm";
import { UserToForm } from "../../utils/user_to_form";
import { QUERY_KEYS } from "../../constants/constants";
import { updateContact } from "../../api/contacts";

const EditContactForm = ({ data, onConfirm, onCancel }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllContacts] });
    },
  });

  const items = [
    {
      key: "1",
      label: "Basic info",
      children: <BasicFields data={data} />,
    },
    {
      key: "2",
      label: "More info",
      children: <AdvancedFields />,
    },
  ];
  const handleConfirm = (value) => {
    onConfirm();
    mutate({ contactId: data.id, contactData: value });
  };

  return (
    <TabForm
      title="Edit contact"
      confirmValue="Edit"
      items={items}
      successMsg={successMessage}
      errorMsg={errorMessage}
      onConfirm={handleConfirm}
      onCancel={onCancel}
      open
      initialValues={UserToForm(data)}
    />
  );
};
export default EditContactForm;
