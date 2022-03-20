# Single Page Application (SPA)

- A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.
- The goal is faster transitions that make the website feel more like a native app.
- In a SPA, a page refresh never occurs; instead, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions.

# React Key Concepts

1. Don't touch the DOM. I'll do it.
2. Break your app into smaller reusable components.
3. Unidirectional Data flow.
4. UI, the rest is up to you.

## 1. Don't touch the DOM, I'll do it

### React's Declarative Paradigm

**In Imperative Paragigm**
you directly change individual parts of your app, in response to various user events.

**React's Declarative Paradigm**  
DOM operations take long time.  
Browser does two intensive operations

1. Repaint - change an element and add it on to page.
2. Reflow - recalculate the layout of the page,and move things around if need be.

React says I will find the best way to change the DOM, just declare to me what your app looks like.

```
let state = {
  user: 'Madhav',
  isLoggedIn: true,
}
```

Hence we declare state and how it changes. Based on this state React updates the DOM.  
Declarative approach reduces code complexity and improves its quality.

## 2. Break your app into smaller reusable components.

## 3. Unidirectional Data flow.

- Child components should only call functions from parent components, while parent components should only set/pass data to their children.
- Any time state changes, its children are rerendered

## 4. UI, the rest is up to you.

React says, I only care about changing UI (using Virtual DOM, state, jsx), everything else is up to you.

&nbsp;

# Virtual DOM

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

## Reconciliation

When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

## The Diffing Algorithm : O(n)

1. Different elements will produce different trees.  
   React parses the tree using Breadth-first search (BFS). For a node of tree, if the element type is changed, for example from ‘section’ to ‘div’. React will destroy all the sub-tree under that element and will reconstruct it from scratch.

2. The developer can hint at which child elements may be stable across different renders with a key prop.
   This means by adding keys to children, React will be able to track changes.

&nbsp;

# The Job of a React Developer

1. Decide on components.
2. Decide the state and where it lives.
3. What changes when state changes.
