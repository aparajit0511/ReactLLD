// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./DnD.css";

// const DragNDrop = () => {
//   const [draggedItem, setDraggedItem] = useState(null);
//   const [items, setItems] = useState([
//     { id: 1, text: "Item 1" },
//     { id: 2, text: "Item 2" },
//     { id: 3, text: "Item 3" },
//   ]);

//   const onDragStart = (e, id) => {
//     setDraggedItem(id);
//     e.dataTransfer.effectAllowed = "move";
//   };

//   const onDragOver = (e, index) => {
//     e.preventDefault();
//     const draggedOverItem = items[index];

//     // if the item is dragged over itself, ignore
//     if (draggedItem === draggedOverItem.id) {
//       return;
//     }

//     // filter out the currently dragged item
//     let newItems = items.filter((item) => item.id !== draggedItem);

//     // add the dragged item after the dragged over item
//     newItems.splice(
//       index,
//       0,
//       items.find((item) => item.id === draggedItem)
//     );

//     setItems(newItems);
//   };

//   const onDrop = () => {
//     setDraggedItem(null);
//   };

//   return (
//     <div className="app">
//       <h1>Drag and Drop Example</h1>
//       <div className="items">
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             className="item"
//             draggable
//             onDragStart={(e) => onDragStart(e, item.id)}
//             onDragOver={(e) => onDragOver(e, index)}
//             onDrop={onDrop}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DragNDrop;

//App.js

import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import DragItem from "./DragItem";
import DropZone from "./DropZone";
import { useDrag } from "react-dnd";

const DragNDrop = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h1>Drag and Drop Example</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2>Drag Items</h2>
              <DragItem name="Item 1" />
              <DragItem name="Item 2" />
              <DragItem name="Item 3" />
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <h2>Drop Zone</h2>
              <DropZone onDrop={handleDrop} />
              {droppedItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    marginTop: "10px",
                    backgroundColor: "lightblue",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>{item.name}</p>
                  <button onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DragNDrop;

//DragItem.js

const DragItem = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "lightblue",
      }}
    >
      {name}
    </div>
  );
};
