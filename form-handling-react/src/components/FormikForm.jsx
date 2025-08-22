import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();
          console.log("User registered:", data);
          alert("Formik Registration successful!");
          resetForm();
        } catch (err) {
          console.error(err);
          alert("Something went wrong.");
        }
      }}
    >
      {() => (
        <Form className="p-4 border rounded-md shadow-md w-80">
          <h2 className="text-xl font-bold mb-3">Register with Formik</h2>

          <div className="mb-2">
            <label className="block">Username</label>
            <Field type="text" name="username" className="border p-2 w-full" />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-2">
            <label className="block">Email</label>
            <Field type="email" name="email" className="border p-2 w-full" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-2">
            <label className="block">Password</label>
            <Field
              type="password"
              name="password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
