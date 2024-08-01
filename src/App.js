import { Link } from "react-router-dom";
import "./App.css";
import Accordian from "./LLD/Accordian";
import Carousel from "./LLD/Carousel";
import Counter from "./LLD/Counter";
import Email from "./LLD/Email";
import InfiniteScroll from "./LLD/InfiniteScroll";
import Navbar from "./LLD/Navbar/Navbar";
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
      {/* <InfiniteScroll /> */}
      <Link to="/navbar">
        <button style={{ width: "100px", height: "60px" }}>Navbar</button>
      </Link>
    </div>
  );
}

export default App;
