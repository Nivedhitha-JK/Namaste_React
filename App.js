const heading= React.createElement("h1",{id:"head"},"Hello World from React!"); // create html element
const root = ReactDOM.createRoot(document.getElementById("root")); //for DOM operation using ReactDom

root.render(heading); // render the react code using render

console.log(heading); // when you console the heading variable you will get the JS object
// so when we use React.creatElement it will create react element of h1 not just the actual html tags
// when you use render it will convetr the object into the html tag and put it inside the dom



const para = React.createElement("p",{className:"paraTxt"},"This is a paragraph from React!");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(para);


/*
CREATE NESTED HTML ELEMENT USING REACT

<div id="parent">
  <div id="child">
    <h1>I am an H1 tag</h1>
  </div>
</div>
*/
/*
*/

const data = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"I am an H1 tag"),
        React.createElement("h2",{},"I am an H2 tag")
    ]
    ),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"I am an H1 tag"),
        React.createElement("h2",{},"I am an H2 tag")
    ]
    )
]
);
root.render(data)

/*
CREATE NESTED HTML ELEMENT WITH SIBLINGS USING REACT

<div id="parent">
  <div id="child">
    <h1>I am an H1 tag</h1>
    <h2>I am an H2 tag</h2>
  </div>
    <div id="child">
    <h1>I am an H1 tag</h1>
    <h2>I am an H2 tag</h2>
  </div>
</div>
*/

// render will replace the already existing tags
