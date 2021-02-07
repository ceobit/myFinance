import React from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { createWallet } from '../redux/actions';
import classes from './NewWallet.module.scss';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? meta.error : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? meta.error : null}
    </>
  );
};

const NewWalletSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  balance: Yup.number()
    .default(0)
    .required('Required'),
  currency: Yup.string()
    .oneOf(['USD', 'EUR', 'RUR'], 'Invalid currency type')
    .required('Required'),
});

const NewWallet = (props) => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    props.createWallet({ ...values, id: 4 });
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        balance: 0,
        currency: '',
      }}
      validationSchema={NewWalletSchema}
      onSubmit={onSubmit}
    >
      <Form className={classes.NewWalletContent}>
        <h1>New wallet</h1>
        <CustomTextInput label="Wallet name" name="name" type="text" placeholder="wallet name" />
        <CustomTextInput label="balance" name="balance" type="text" placeholder="balance" />
        <CustomSelect label="currency" name="currency">
          <option value="">Select a currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUR">RUR</option>
        </CustomSelect>
        <button type="submit">{props.isSubmitting ? 'Loading' : 'Submit'}</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = {
  createWallet,
};

export default connect(null, mapDispatchToProps)(NewWallet);
