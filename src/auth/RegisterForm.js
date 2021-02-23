import { Form, Formik } from "formik";
import React from "react";

import * as Yup from "yup";
import { closeModal } from "../store/actions/modalAction";
import { useDispatch } from "react-redux";
import MyTextInput from "../form/MyTextInput";
import { registerInFirebase } from "../firebase/firebaseService";
import ModalWrapper from "../Modals/ModalWrapper";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await registerInFirebase(values);
            setSubmitting(false);
            dispatch(closeModal());
          } catch (error) {
            setErrors({ auth: error.message });
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errorrs }) => (
          <Form className="ui form">
            <MyTextInput name="name" placeholder="name" />
            <MyTextInput name="email" placeholder="email" />
            <MyTextInput
              name="password"
              type="password"
              placeholder="password"
            />
            <button type="submit"></button>
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default RegisterForm;
