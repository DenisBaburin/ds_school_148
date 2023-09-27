import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Table from "./table";
import { SetStateAction, useState } from "react";

export default function Home() {
  const App = () => {
    // const [isDark, setIsDark] = useState(false);
    // //let isDark = true;

    // const onClickHandler = () => {
    //   setIsDark((value) => {
    //     return !value;
    //   });
    //   // console.log(isDark);
    //   // isDark = false;
    // };

    // return (
    //   <div>
    //     <p style={{ color: isDark ? "blue" : "red" }}>test</p>
    //     <button onClick={onClickHandler}>Переключить цвет текста</button>
    //   </div>
    // );

    // const [name, SetName] = useState("");
    // const [password, SetPassword] = useState("");

    const [data, setData] = useState({ name: "", password: "" });

    const onChangeName = (event: { target: { value: any } }) => {
      setData({ ...data, password: event.target.value });
      //SetName(event.target.value);
    };

    const onChangePassword = (event: { target: { value: any } }) => {
      setData((currentData) => ({
        ...currentData,
        password: event.target.value,
      }));
      //SetPassword(event.target.value);
    };

    return (
      <div>
        <input type="text" onChange={onChangeName} />
        <input type="password" onChange={onChangePassword} />

        <p>Ваше имя: {data.name}</p>
        <p>Ваш пароль: {data.password}</p>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <App />
        <Table />
      </main>
    </>
  );
}
