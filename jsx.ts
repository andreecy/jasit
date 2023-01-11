type VNodeAttributes = Record<string, string> | null

type VNode = string | {
    name: string
    attributes: VNodeAttributes
    children: VNode[]
}

export function h(name: string, attributes?: VNodeAttributes, ...args: VNode[]) {
    const children = args?.length > 0 ? args : null
    return { name, attributes, children } as VNode;
}

export function render(vnode: VNode) {
    console.log('render', vnode)

    if (typeof vnode == 'string') {
        // Strings just convert to #text Nodes:
        return document.createTextNode(vnode);
    }

    // create a DOM element with the nodeName of our VDOM element:
    const n = document.createElement(vnode.name);

    if (vnode.attributes) {
        // copy attributes onto the new node:
        const a = vnode.attributes
        Object.keys(a).forEach(k => n.setAttribute(k, a[k]));
    }

    // render (build) and then append child nodes:
    (vnode.children || []).forEach(c => n.appendChild(render(c)));

    return n;
}