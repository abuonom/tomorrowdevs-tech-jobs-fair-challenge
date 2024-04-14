import { FILTER_PARAMS } from "../constants/constants";

export function getDepartmentBy(value) {
  const obj = FILTER_PARAMS.department.find((x) => x.value === value);
  let v = undefined;
  if (obj !== undefined) v = obj.label;
  return v;
}
