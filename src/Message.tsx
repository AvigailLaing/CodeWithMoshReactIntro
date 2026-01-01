//PascalCasing
function Message(){
    //JSX: JavaScript XML -- this code gets converted to React/JavaScript code
    //JSX allows us to easily create dynamic content 
    const name = 'Mosh';
    if (name)
        return <h1>Hello {name}</h1>
    return<h1>Hello World</h1>
}

//We have an App and child Message component
//React takes the component tree and builds a JavaScript
//data structure called the virtual DOM out of it
//where each node represents a component and its properties
//when the state of a component changes, the virtual DOM is updated
//and React compares the virtual DOM to the original to see which nodes should be updates

export default Message