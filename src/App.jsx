import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Card } from "./Cards";

function App() {
  return (
    <div className={styles.body}>
      <div className={styles.counter}></div>
      <>
        <Card />
      </>
    </div>
  );
}

export default App;
