import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To Short!")
    .max(50, "To Long!")
    .required("required"),
  number: Yup.string()
    .min(3, "To Short!")
    .max(50, "To Long!")
    .required("required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  return (
    <div className={styles.addcontact}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const id = nanoid();

          const newContact = {
            id,
            name: values.name,
            number: values.number,
          };
          addContact(newContact);
          actions.resetForm();
        }}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <div className={styles.contactform}>
            <div className={styles.contactlabel}>
              <label> Name </label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.contactlabel}>
              <label>Number</label>
              <Field type="text" name="number" />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>
            <button className={styles.button} type="submit">
              Add Contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
