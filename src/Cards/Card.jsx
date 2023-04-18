import styles from "./Card.module.css";
import { useState, useEffect } from "react";

export function Card() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPAge, setuserPerPAge] = useState(25);

  const lastUser = currentPage * userPerPAge;
  const firstUser = lastUser - userPerPAge;
  const data = items.slice(0, lastUser);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;
      if (scrollBottom >= documentHeight) {
        setuserPerPAge(userPerPAge + 25);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [userPerPAge]);
  return (
    <div className={styles.container}>
      {data.map((data) => (
        <div key={data.id} className={styles.body}>
          <span className={styles.span}> {data.title}</span>
          <img className={styles.img} src={data.url} alt={data.id} />
          <p>id: {data.id}</p>
        </div>
      ))}
    </div>
  );
}
