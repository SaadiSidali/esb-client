import { Select } from "@chakra-ui/react";

function SalaryRange({ onChange, defaultValue }: any) {
  return (
    <Select
      placeholder="Select option"
      name="expectedSalary"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      <option value={"55"}>50000 DZD ~ 60000 DZD</option>
      <option value={"70"}>65000 DZD ~ 75000 DZD</option>
      <option value={"85"}>80000 DZD ~ 90000 DZD</option>
    </Select>
  );
}

export default SalaryRange;
