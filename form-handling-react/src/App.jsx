import { useState } from 'react'
import './App.css'
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";


function App() {
  return (
    <div className="p-6 space-y-10">
      <section>
        <h1 className="text-2xl font-bold mb-4">Ordinary Form</h1>
        <RegistrationForm />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Formik Form</h1>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
