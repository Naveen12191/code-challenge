# Question 7: What is the use of the useEffect hook in React?
The useEffect hook is used to perform side effects in functional components, such as fetching data, setting up subscriptions, or manually changing the DOM. It runs after the component renders, and you can specify when it should run (e.g., after every render, on mount, or on specific state changes).

# Question 8: What is a Higher Order Component (HOC)?
A Higher Order Component (HOC) is a function that takes a component and returns a new component with additional props or functionality. It is used to reuse component logic across different parts of an app.

# Question 9: What use cases would an HOC be useful?
HOCs are useful for adding common logic like authentication checks, data fetching, or styling to multiple components without repeating code. They help enhance or modify the behavior of a component.

# Question 10: What does it indicate when a component is prefixed with use?
When a component is prefixed with use, it typically indicates that the component is a custom hook in React. Custom hooks are reusable functions that manage state or side effects.

# Question 11: What is a Generic type in TypeScript?
A Generic type in TypeScript allows you to create components, functions, or classes that can work with any data type, while still maintaining type safety. It enables code reusability and flexibility.

# Question 12: What's the difference between a controlled and uncontrolled input in React?
A controlled input is managed by React state (its value is controlled by the state), while an uncontrolled input is managed by the DOM (its value is not directly bound to React state, and you access it via refs).