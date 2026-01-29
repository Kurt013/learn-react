function ListGroup() {
  const items = ["Kurt", "Vincent"];

        
  const message = items.length === 0 && <p>No message found</p>;

  return (
    <>
      <h1>A list of goodies</h1>
      <ul className="list-group">
        {message}
        {items.map((item) => {
          return <li className="list-group-item">{item}</li>;
        })}
      </ul>
    </>
  );
}

export default ListGroup;
