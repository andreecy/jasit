import { h, render } from "./jsx"

// JSX -> VDOM:
const vdom =  <div><p>Hello!</p><p>World</p></div>

console.log(vdom)

// VDOM -> DOM:
const dom = render(vdom);

// // add the tree to <body>:
document.body.appendChild(dom);