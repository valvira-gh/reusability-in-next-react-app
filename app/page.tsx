import RootLayout from "./layout";
import styles from "./page.module.css";
import React from "react";

const Home = () => {
  return (
    <RootLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Re-usable Components & Custom Hooks</h1>
        <p className={styles.description}>
          To re-use JSX markdown, create a component.
          <br />
          To re-use logic without React hooks, create a utility function.
          <br />
          To re-use logic with React hooks, create a custom hook.
        </p>
      </div>
    </RootLayout>
  );
};

export default Home;
