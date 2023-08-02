import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Taipei", "Taoyuan", "Hsinchu", "Hualien", "Taitung"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // return <div><Message></Message></div>
  return (
    <div>
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities where I lived"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
