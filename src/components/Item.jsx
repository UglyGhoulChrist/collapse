import React from "react";
import styles from "./Item.module.scss";

function Item({ text, hidden = false }) {
  const classes = [styles.item, hidden ? styles._hidden : null].join(" ");
  return (
    <li className={classes}>
      <div className={styles.text}>{text}</div>
    </li>
  );
}
export default Item;
