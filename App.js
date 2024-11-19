const heading = React.createElement(
  "h1",
  { id: "Heading" },
  "Hey this is my react app"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
