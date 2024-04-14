import dayjs from "dayjs";

export function UserToForm(userData) {
  return {
    ...userData,
    dateOfBirth: userData.dateOfBirth ? dayjs(userData.dateOfBirth) : "",
  };
}
