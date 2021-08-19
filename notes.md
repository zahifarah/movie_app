- React --> virtual DOM

# COMPONENTS

Components are one of the core building blocks of React. They let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

1. Functional Components
   Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters.

2. Class Components
   The class components are a little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use JavaScript ES6 classes to create class-based components in React.

3. Rendering Components
   React is also capable of rendering user-defined components. To render a component in React we can initialize an element with a user-defined component and pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method.

- NOTE: Always start component names with a capital letter.
  React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

# JSX

JavaScript XML is simply a syntax extension of JavaScript. It allows writing HTML directly in React within JavaScript code. It is easy to create a template using JSX in React, but it's not a simple template languages (such as PUG, EJS, etc.), instead it comes with the full power of JavaScript.
It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. Instead of separating the markup and logic in separated files, React uses components for this purpose.

JSX produces React “elements”.

# PROPS

Props (properties) are a way to send data from one component to another as an object.
