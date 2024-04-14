import { FILTER_PARAMS } from "../constants/constants";

export function getContactTypeBy(value) {
  const obj = FILTER_PARAMS.contactType.find((x) => x.value === value);
  let v = undefined;
  if (obj !== undefined) v = obj.label;
  return v;
}
