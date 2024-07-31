import "./App.css";
import Accordian from "./LLD/Accordian";
import Carousel from "./LLD/Carousel";
import Counter from "./LLD/Counter";
import Email from "./LLD/Email";
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
      <Email />
      <Carousel />
    </div>
  );
}

export default App;
