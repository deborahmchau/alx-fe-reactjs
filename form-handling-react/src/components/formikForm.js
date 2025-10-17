import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Yup schema for validation
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handles submit action
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted values:", values);
    alert("User registered successfully with Formik!");
    resetForm();
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Register (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
