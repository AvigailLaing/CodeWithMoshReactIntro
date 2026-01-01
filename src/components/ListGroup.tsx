import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  //Converting items to li items
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //In React, a component can only return one thing
    //You can't also add an <h1>List</h1>
    //You can wrap it in div by going to command palette and looking up wrap, then add div
    //Or you can do fragment instead
    //Empty fragments tell React to automatically wrap the children up using a fragment
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      {/* If condition is true, the second element will show up (paragraph) */}
      {/* {getMessage()} */}
      <ul className="list-group">
        {
          items.map((item, index) => (
            <li
              className="list-group-item"
              key={item}
              onClick={handleClick}
            >
              {item}
            </li>
          ))
          /* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */
        }
      </ul>
    </>
  );
}
export default ListGroup;
