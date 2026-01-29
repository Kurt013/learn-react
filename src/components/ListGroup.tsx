import { useState } from "react";

function ListGroup() {
  const items = ["Kurt", "Vincent"];

  const message = items.length === 0 && <p>No message found</p>;

  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>A list of goodies</h1>
      <ul className="list-group">
        {message}
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
