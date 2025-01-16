import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { DB_URl } from "../../constant/services";
import axios from "axios"
const SignupSchema = Yup.object().shape({
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
    <h1>Signup</h1>
    <Formik
      initialValues={{
        title: "",
        image: "",
        description: "",
        price: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={ async (values) => {
        const prod = {...values, ratings: 3, oldprice: null}
        const posted = await axios.post(`${DB_URl}/products`,prod);
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field name="image" type="url" />
          {errors.image && touched.image ? <div>{errors.image}</div> : null}
          <Field name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field name="price" type={"number"}/>
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Add

// import React from "react";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { DB_URl } from "../../constant/services";
// import axios from "axios"
// const AddSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   image: Yup.string().required("Required"),
//   description: Yup.string().required("Required"),
//   price: Yup.number().required("Required"),
// });

// const Add = () => (
//   <div>
//     <h1>Add</h1>
//     <Formik
//       initialValues={{
//         title: "",
//         image: "",
//         description: "",
//         price: "",
//       }}
//       validationSchema={AddSchema}
//       onSubmit={async (values) => {
//         const prod = { ...values, ratings: 3, oldprice: null };
//         const posted = await axios.post(`${DB_URl}/products`, prod);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="title" />
//           {errors.title && touched.title ? <div>{errors.title}</div> : null}
//           <Field name="image" type="url"/>
//           {errors.image && touched.image ? <div>{errors.image}</div> : null}
//           <Field name="description" />
//           {errors.description && touched.description ? (
//             <div>{errors.description}</div>
//           ) : null}
//           <Field name="price" type="number" />
//           {errors.price && touched.price ? <div>{errors.price}</div> : null}
//           <button type="submit">Add</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default Add;
