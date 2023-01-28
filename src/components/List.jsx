import React from "react";
import styles from "./List.module.scss";

function List(props) {
  return (
    <ul className={styles.list}>
      {props.children[0]}
      {props.children[1]}
    </ul>
  );
}
export default List;
