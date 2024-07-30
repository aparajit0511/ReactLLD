import "./App.css";
import Accordian from "./LLD/Accordian";
import Counter from "./LLD/Counter";
import PopOver from "./LLD/PopOver";
import Popup from "./LLD/Popup";
import StarRating from "./LLD/StarRating";

function App() {
  return (
    <div className="App">
      <StarRating />
      <Popup />
      <PopOver />
      <Counter />
      <Accordian />
    </div>
  );
}

export default App;
