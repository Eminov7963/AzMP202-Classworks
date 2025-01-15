import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import axios from "axios"
import { Base_Url } from "../../constant/services";
const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string().url().required("Required"),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
});

const Add = () => (
  <div>
    <Container maxWidth="sm">
      <h1>Add</h1>
      <Formik
        initialValues={{
          title: "",
          image: "",
          description: "",
          price: "",
        }}
        validationSchema={productSchema}
        onSubmit={async (values) => {
          const product = { ...values, ratings: 3, oldprice : null};
          const posted = await axios.post(`${Base_Url}/products`, product);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field name="image" type="url" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <Field name="description" type="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <Field name="price" type="num" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Container>
  </div>
);

export default Add;
