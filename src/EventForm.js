import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import styled from "styled-components";

import MyTextInput from "./form/MyTextInput";
import MyTextArea from "./form/MyTextArea";
import MySelectInput from "./form/MySelectInput";
import { addEventToFirestore } from "./firestore/firestoreService";
import { categoryData } from "./CategoryData/CategoryOptions";

const initialValues = {
  title: "",
  category: "",
  description: "",
  venue: "",
  date: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("You must provide a title"),
  category: Yup.string().required("You must provide a category"),
  description: Yup.string().required(),
  venue: Yup.string().required(),
  date: Yup.string().required(),
});

const Heading = styled.div``;
const EventForm = ({ match, history }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await addEventToFirestore(values);
            setSubmitting(false);
            history.push("/events");
          } catch (error) {
            toast.error(error.message);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Heading>Event Details</Heading>
            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyTextArea name="description" placeholder="Venue" />
            <MyTextInput name="date" placeholder="Venue" />

            <button loading={isSubmitting} type="submit">
              submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EventForm;
