# React Fiber & Reconciliation

## React Fiber

"React Fiber is an ongoing reimplementation of React's core algorithm."

✅ This means React Fiber is a new and improved version of the internal algorithm React uses to update the UI.
✅ It is not a separate library but a rewrite of how React processes updates behind the scenes.

"The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures."

✅ Older versions of React (before Fiber) had limitations in handling animations and complex UI updates.
✅ Fiber improves React’s ability to smoothly update animations, layout calculations, and user interactions.

"Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames."

✅ Instead of blocking the entire UI until rendering is complete, React Fiber divides the work into smaller parts.
✅ This makes animations and interactions feel smoother by distributing rendering across multiple frames.

### Other Key Features of React Fiber

"The ability to pause, abort, or reuse work as new updates come in."

✅ If a user interacts with the UI while React is updating it, React can pause the update, handle the interaction, and resume the work later.
✅ If an update is no longer needed (e.g., user switched to another page), React can abort it to save performance.

"The ability to assign priority to different types of updates."

✅ Some UI updates are more important than others.
✅ Example: Typing in an input field should be more responsive than a background data update.
✅ React Fiber allows updates with higher priority (like user interactions) to happen first.

"New concurrency primitives."

✅ "Concurrency" means React can now work on multiple tasks at the same time.
✅ This improves performance by allowing React to manage updates in a more flexible way.

## Reconciliation

"The algorithm React uses to diff one tree with another to determine which parts need to be changed."

✅ Reconciliation is the process React uses to compare the old UI (virtual DOM tree) with the new UI after an update.
✅ Instead of re-rendering the entire page, React only updates the changed parts, improving performance.

### Update

"A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render."

✅ Whenever `setState` is called, React updates the component’s state and triggers a re-render.
✅ Example:

```javascript
function App() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Click Me</button>;
}
```
When the button is clicked, setCount updates the state.
React detects this update and re-renders the component.

"The central idea of React's API is to think of updates as if they cause the entire app to re-render."

✅ React developers don’t need to manually update individual elements.
✅ Instead, they just update the state, and React automatically updates the UI.
✅ This makes development easier because you declare what you want, and React figures out the most efficient way to update the UI.

How Reconciliation Works (Virtual DOM)
"Reconciliation is the algorithm behind what is popularly understood as the 'virtual DOM.'"

✅ The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates.

"A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory."

✅ React creates a tree-like structure (Virtual DOM) that represents the UI.
✅ Example: If your app has a button and a paragraph, React internally creates this tree:

```HTML
<div>
  <button>Click Me</button>
  <p>some data</p>
</div>
```
"This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations."

✅ Once React builds the Virtual DOM, it updates the actual browser DOM with the necessary changes.
✅ Instead of modifying the entire page, React efficiently updates only the changed parts.

"When the app is updated (usually via setState), a new tree is generated."

✅ Every time an update occurs, React creates a new version of the Virtual DOM tree.

"The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app."

✅ React compares the old tree with the new one and finds the differences.
✅ Instead of reloading the whole page, React only changes the parts that have been modified.
✅ This process is called diffing.

Component Diffing
"Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely."

✅ If you change a component type, React doesn’t compare the old and new trees.
✅ Instead, it destroys the old tree and creates a new one.
✅ Example:

```JavaScript

function App() {
  const [isText, setIsText] = useState(true);

  return (
    <div>
      {isText ? <p>Hello</p> : <h1>Hello</h1>}
      <button onClick={() => setIsText(!isText)}>Toggle</button>
    </div>
  );
}
If isText is true, React renders a <p>.
If isText is false, React replaces the <p> with an  instead of diffing them.
```
Diffing Lists (Using Keys)
"Diffing of lists is performed using keys. Keys should be 'stable, predictable, and unique.'"

✅ When rendering lists, React needs a key to efficiently track changes.
✅ Example (Incorrect Approach):

```JavaScript

{items.map((item, index) => (
  <li key={index}>{item}</li> // ⚠️ Badpractice: Using index as key
))}
```
Using index as a key can cause bugs when reordering items.
✅ Correct Approach:

```JavaScript

{items.map((item) => (
  <li key={item.id}>{item.name}</li> // ✅ Unique and stable key
))}
```
Each item has a unique id, so React can efficiently update the list.