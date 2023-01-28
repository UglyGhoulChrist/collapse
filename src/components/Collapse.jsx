import { useState } from "react";
import styles from "./Collapse.module.scss";
import CollapseHeader from "./CollapseHeader";
import Item from "./Item";
import List from "./List";
import Button from "./Button";

function Collapse() {
  // hiddenFirst, hiddenSecond - состояния первого и второго элемента
  const [hiddenFirst, setHiddenFirst] = useState(true);
  const [hiddenSecond, setHiddenSecond] = useState(true);
  const arrayItem = [
    "Это текст первого элемента. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Страну запятой над вершину строчка имени! Агентство парадигматическая коварных первую.",
    "Это текст второго элемента. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
  ];
  return (
    <div className={styles.collapse}>
      <CollapseHeader>
        <Button
          text={`${hiddenFirst ? "Показать" : "Скрыть"} первый элемент`}
          handleClick={() => setHiddenFirst((prev) => !prev)}
        />
        <Button
          text={`${hiddenSecond ? "Показать" : "Скрыть"} второй элемент`}
          handleClick={() => setHiddenSecond((prev) => !prev)}
        />
        <Button
          text={"Переключить оба элемента"}
          handleClick={() => {
            setHiddenFirst((prev) => !prev);
            setHiddenSecond((prev) => !prev);
          }}
        />
      </CollapseHeader>
      <List>
        <Item text={arrayItem[0]} hidden={hiddenFirst} />
        <Item text={arrayItem[1]} hidden={hiddenSecond} />
      </List>
    </div>
  );
}
export default Collapse;
