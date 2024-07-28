import "./App.css";
import PopOver from "./LLD/PopOver";
import Popup from "./LLD/Popup";
import StarRating from "./LLD/StarRating";

function App() {
  return (
    <div className="App">
      <StarRating />
      <Popup />
      <PopOver />
    </div>
  );
}

export default App;
