import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { closeModal } from "../store/actions/modalAction";
import { signIn } from "../firebase/firebaseService";

import ModalWrapper from "../Modals/ModalWrapper";
import MyTextInput from "../form/MyTextInput";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const LoginForm = () => {
  return (
    <ModalWrapper header="Sign in">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signIn(values);
            setSubmitting(false);
            dispatchEvent(closeModal());
          } catch (error) {
            setErrors({ auth: "Problem with username or password" });
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="email" />
            <MyTextInput
              name="password"
              placeholder="password"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
