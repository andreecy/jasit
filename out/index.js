// jsx.ts
function h(name, attributes, ...args) {
  const children = args?.length > 0 ? args : null;
  return { name, attributes, children };
}
function render(vnode) {
  console.log("render", vnode);
  if (typeof vnode == "string") {
    return document.createTextNode(vnode);
  }
  const n = document.createElement(vnode.name);
  if (vnode.attributes) {
    const a = vnode.attributes;
    Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));
  }
  (vnode.children || []).forEach((c) => n.appendChild(render(c)));
  return n;
}

// index.tsx
var vdom = /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", null, "Hello!"), /* @__PURE__ */ h("p", null, "World"));
console.log(vdom);
var dom = render(vdom);
document.body.appendChild(dom);
