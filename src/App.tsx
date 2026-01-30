import ListGroup from './components/ListGroup'
import './App.css'

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const onSelectItem = (item: string) => {
    console.log(item)
  };

  return (
    <>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
    </>
  );
}

export default App
