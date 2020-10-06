import React from "react";
import classes from "./Balance.module.css";


export default function Balance({ balance }) {
    return (
        <p className={classes.Balance}> {balance} </p>
    );
}
