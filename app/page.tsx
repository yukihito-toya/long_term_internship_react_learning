"use client";
// This is a client component
import { useState } from "react";
import styles from "./page.module.css";
import Game from "./tic-tac-toe";

const Mini = (props: { temperature: number }) => {
  let content;
  if (props.temperature < 15) {
    content = (
      <>
        <p>Here is too cold...</p>
      </>
    );
  } else {
    content = (
      <>
        <p>Here is warm!</p>
      </>
    );
  }
  return <div>{content}</div>;
};

const hope = {
  template: "I want to",
  mainHope: "be hot",
  subHope: "keep warm",
  ending: ".",
};

const status = [
  { title: "Happines", isPositive: true, id: 1 },
  { title: "Terrior", isPositive: false, id: 2 },
  { title: "Sadness", isPositive: false, id: 3 },
  { title: "insanity", isPositive: false, id: 4 },
];

const StatusList = () => {
  const listItems = status.map((e) => (
    <li
      key={e.id}
      style={{
        color: e.isPositive ? "pink" : "darkred",
      }}
    >
      {e.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

const Temperature_Slider = (props: {
  temperature: number;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTemperature(parseInt(event.target.value));
    console.log(props.temperature);
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      defaultValue={props.temperature}
      onChange={handleChange}
    />
  );
};

export default function Home() {
  const [temperature, setTemperature] = useState(10);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.flexbox}>
          <h1>My first Next.js app</h1>
          <p>now temperature is...{temperature}</p>
          <Temperature_Slider
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <p>I wanna learn.</p>
          <Mini temperature={temperature} />
          <p>
            {hope.template} {temperature < 15 ? hope.mainHope : hope.subHope}{" "}
            {hope.ending}
          </p>
          <p>My status:</p>
          <StatusList />
        </div>
        <div className={styles.flexbox}>
          <Game />
          </div>
      </main>
    </div>
  );
}
