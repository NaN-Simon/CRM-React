
import React from 'react'
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { Button } from '@/components/ui/button';
import CustomFormikField from '@/components/CustomFormikField';
import { toast } from "sonner"

const FormPage = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  const handleFormSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    address1: string;
    address2: string;
  }, { resetForm }: { resetForm: () => void }) => {
    toast.success(`User ${values.firstName} ${values.lastName} created successfully`);
    console.log(values);
    resetForm();
  };

  return (
    <div className='p-3'>
      <h2 className='text-2xl font-bold'>CREATE USER</h2>
      <h3 className='text-lg font-semibold'>Create a New User Profile</h3>
      <div className='mt-3'>
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            // values,
            errors,
            touched,
            // handleBlur,
            // handleChange,
            handleSubmit,
          }) => (
            <Form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3'
            >
              <div className='flex gap-3'>
                <CustomFormikField label="First Name" name="firstName" errorsName={errors.firstName} touchedName={touched.firstName} />
                <CustomFormikField label="Last Name" name="lastName" errorsName={errors.lastName} touchedName={touched.lastName} />
              </div>
              <CustomFormikField label="Email" name="email" errorsName={errors.email} touchedName={touched.email} />
              <CustomFormikField label="Contact" name="contact" errorsName={errors.contact} touchedName={touched.contact} />
              <CustomFormikField label="Address 1" name="address1" errorsName={errors.address1} touchedName={touched.address1} />
              <CustomFormikField label="Address 2" name="address2" errorsName={errors.address2} touchedName={touched.address2} />
              <Button type="submit" variant="secondary" className='self-end mt-3'>
                Create New User
              </Button>
            </Form>
          )
          }
        </Formik>
      </div>
    </div>
  )
}

export default FormPage