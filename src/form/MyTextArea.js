import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Label = styled.div`
  border: 1px solid red;
  color: red;
  font-size: 14px;
`;

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </>
  );
}
