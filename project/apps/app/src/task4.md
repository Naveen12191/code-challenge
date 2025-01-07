# Question 4: What makes createSlice in Redux Toolkit different than a reducer in Redux?
Boilerplate Reduction: createSlice automatically generates action types, action creators, and reducers.In traditional Redux,you manually define these.
Immutability: createSlice uses Immer internally, allowing you to mutate the state directly in reducers, but it still ensures the state is not mutated.
Type Safety: createSlice works better with TypeScript by automatically inferring types, reducing boilerplate.


Question 4: What makes createSlice in Redux Toolkit different than a reducer in Redux?
Boilerplate Reduction: createSlice automatically generates action types, action creators, and reducers. In traditional Redux, you manually define these.
Immutability: createSlice uses Immer internally, allowing you to "mutate" the state directly in reducers, but it still ensures the state is not mutated.
Type Safety: createSlice works better with TypeScript by automatically inferring types, reducing boilerplate.
In short, createSlice simplifies Redux code by reducing repetition and handling immutability automatically.

 # Question 5: Describe the benefits of immutable code.
Predictability: State can’t be changed unexpectedly, making bugs easier to track.
Safer Concurrency: No risk of data being modified by multiple parts of the program at the same time.

History Tracking: Easier to implement features like undo/redo since previous states are preserved.
Easier Debugging and Refactoring: Changes don't accidentally affect other parts of the code.

Performance Optimization: Changes can be detected easily by comparing references, which helps with features like memoization.
