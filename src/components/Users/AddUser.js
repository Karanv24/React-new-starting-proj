import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("hi");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (years)</label>
        <input type="number" />
        {/* <button id="age" type="submit">
          Add User
        </button> */}
        <Button type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
