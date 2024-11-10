import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading title="one" description="this is a description" />
    <Heading title="hi" description="I am here" />
    <Heading title="bye" description="say good bye" />
  </>
);

function Heading(props) {
  console.log(props);

  const styles = {
    color: "red",
    fontSize: "20px",
    fontWeight: "normal",
  };
  return (
    <div>
      <h1 style={styles}>{props.title}</h1>
      <h2 style={{ color: "green" }}>{props.description}</h2>
    </div>
  );
}
