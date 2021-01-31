import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";

import classes from "./NewWallet.module.css";
import { createWallet } from "../redux/actions";


const NewWalletForm = (props) => {

  const onSubmit = (values) => {
    props.createWallet({ ...values, currency: "EUR", id: 4 }); // пока грабли
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className={classes.NewWalletContent} onSubmit={handleSubmit}>
          <Field
            component="input"
            name="name"
            placeholder="Wallet name"
            required
          />
          <Field
            component="input"
            name="balance"
            placeholder="Enter balance"
            required
          />
          <button type="submit" value="Submit">
            Save
          </button>
        </form>
      )}
    />
  );
};

const mapDispatchToProps = {
  createWallet,
};

export default connect(null, mapDispatchToProps)(NewWalletForm);
