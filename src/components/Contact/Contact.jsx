import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={styles.phonebook}>
      <div className={styles.list}>
        <p>
          <FaUser className={styles.icons} />
          {name}
        </p>
        <p>
          <FaPhone className={styles.icons} />
          {number}
        </p>
      </div>
      <div>
        <button className={styles.button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
