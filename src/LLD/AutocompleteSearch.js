import React, { useEffect, useState } from "react";

function AutocompleteSearch() {
  const [SearchItem, setSearchItem] = useState("");

  useEffect(() => {}, []);

  SearchItem &&
    Object.entries(SearchItem).map(
      (result) =>
        result &&
        console.log(
          result[1]
          //   Object.entries(result).map((item) => console.log("item", item))
        )
    );

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    searchBar(event.target.value);
    // async function searchBar(item) {
    //   const data = await fetch(
    //     `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${item}&limit=10&namespace=0&format=json`
    //   ).then((res) => res.json());
    //   //   await fetch(
    //   //     `https://en.wikipedia.org/w/api.php?action=opensearch&search=${item}&limit=10&namespace=0&format=json`
    //   //   ).then((res) => res.json());

    //   setSearchItem(data);
    // }
    async function searchBar(item) {
      try {
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://en.wikipedia.org/w/api.php?action=opensearch&search=${item}&limit=10&namespace=0&format=json`
          )}`
        );

        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          return;
        }

        const data = await response.json();
        console.log(data); // Log to see the structure

        const parsedData = JSON.parse(data.contents);
        const suggestions = parsedData[1];
        setSearchItem(suggestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  return (
    <div>
      <h1>AutocompleteSearch</h1>
      <div>
        <form>
          <input
            type="search"
            placeholder="Search here"
            onChange={onChangeHandler}
          ></input>
          <div>
            {SearchItem &&
              SearchItem.map((result, index) => (
                <ul key={index}>
                  <li>{result}</li>
                </ul>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AutocompleteSearch;
