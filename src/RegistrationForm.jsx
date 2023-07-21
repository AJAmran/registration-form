import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photoURL: '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    photoURL: Yup.string().url('Invalid URL format'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = (values) => {
    console.log(values); // You can perform your registration logic here
  };

  return (
    <div className="container mx-auto mt-40">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto p-6 bg-transparent border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Registration Form</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-300">
                Full Name
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your Full Name"
                className="form-input w-full px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-gray-100"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 mt-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="form-input w-full px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-gray-100"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input w-full px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-gray-100"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 mt-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-300">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="form-input w-full px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-gray-100"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-gray-300">
                Photo URL (Optional)
              </label>
              <Field
                type="text"
                id="photoURL"
                name="photoURL"
                placeholder="https://example.com/photo.jpg"
                className="form-input w-full px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-gray-100"
              />
              <ErrorMessage name="photoURL" component="div" className="text-red-500 mt-2" />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <Field type="checkbox" name="acceptTerms" className="form-checkbox" />
                <span className="ml-2 text-gray-300">
                  I accept the <a href="/">terms and conditions</a>.
                </span>
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="text-red-500 mt-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg focus:outline-none hover:bg-indigo-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
