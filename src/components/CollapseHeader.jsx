import React from "react";
import styles from "./CollapseHeader.module.scss";

function CollapseHeader(props) {
  return (
    <div className={styles.buttons}>
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
    </div>
  );
}
export default CollapseHeader;
