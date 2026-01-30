import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  let [isAlertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {isAlertVisible && <Alert onClose={() => {setAlertVisibility(false)}}>This is my message</Alert>}

      <Button handleClick={() => setAlertVisibility(true)} color="dark">
        Click me
      </Button>

      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
    </>
  );
}

export default App;
