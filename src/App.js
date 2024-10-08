import { Link } from "react-router-dom";
import "./App.css";
import Accordian from "./LLD/Accordian";
import Carousel from "./LLD/Carousel";
import Counter from "./LLD/Counter";
import Email from "./LLD/Email";
import InfiniteScroll from "./LLD/InfiniteScroll";
import PopOver from "./LLD/PopOver";
import Popup from "./LLD/Popup";
import StarRating from "./LLD/StarRating";
import DatePicker from "./LLD/DatePicker";
import Table2 from "./LLD/Table/Table2";
import List from "./LLD/List";
import AutocompleteSearch from "./LLD/AutocompleteSearch";
import FileUpload from "./LLD/FileUpload";
import LazyLoading from "./LLD/LazyLoading";
import Todo from "./LLD/Todo";
import TabComponent from "./LLD/TabComponent";

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
      <DatePicker />
      <Table2 />
      <List />
      <AutocompleteSearch />
      <FileUpload />
      <LazyLoading />
      <Todo />
      <TabComponent />
    </div>
  );
}

export default App;
