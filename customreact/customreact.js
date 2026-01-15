const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_main",
  },
  children: "content for page",
};

function customrender(reactElement, mainContainer) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   mainContainer.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

customrender(reactElement, mainContainer);
