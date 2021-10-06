// function to throw an error if there is no valid css selector
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Please double check your class name, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
