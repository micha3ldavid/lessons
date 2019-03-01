# React Hooks

Good morning, everybody!

Today we’re going to talk about React Hooks.

In React we have three types of components – [Functional, Component, and PureComponent](https://reactjs.org/docs/components-and-props.html). Component and PureComponent are both class-based components, where Functional components are as bare-bones basic as it gets – a function that returns JSX and has no concept of [local state or lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).

It’s great we have all three of these options but sometimes we run into situations where, for instance, we build something using a Functional component only to realize we need to use something like local state and now we’ve got to convert our function into a class-based component all just because we need a single feature. Lame.

Well in React version 16, engineers decided to add something called 'Hooks,' which basically allows you to take advantage of react class-based component features in Functional components.

There are 10 new React Hooks. We're going to look at the 3 I feel we will use the most. Before I jump into it, anybody doing app related work (React Native), these hooks will be available to you in the next React Native release.

Okay let’s get on with it.

### useState
Pretty straight-forward. We're basically able to keep a local state within functional components. `useState` take one argument (the initial state value) and returns you two things - the current state value and a function to change that value.

```jsx
import React, { useState } from 'react'

export default function myComponent (props) {

  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      You've clicked me ${count} times
    </button>
  )
}
```

### useEffect
What `useEffect` does is allows us to hook into `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. `userEffect` takes one argument (a function).
That function will invoke on `componentDidMount` and `componentDidUpdate`. If you specify a return function it will be called on `componentWillUnmount`, which is useful if you need to clean up resources when your component unmounts.

```jsx
import React, { useState, useEffect } from 'react'

export default function myComponent (props) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info('my component mounted/updated!')
    return function () {
      console.info('my component is unmounting!')
    }
  })
  
  return (
    <button onClick={() => setCount(count + 1)}>
      You've clicked me ${count} times
    </button>
  )
}
```

### useCallback
I like this Hook because it was made to make DOM event handlers more performant. Basically, we can create an event handler that is `memoized` if props we specify have not changed. This helps tremendously when the React lifycycle is constantly adding/removing events handlers on our JSX elements.

```jsx
import React, { useState, useCallback } from 'react'

export default function myComponent (props) {

  const [count, setCount] = useState(0)

  // this function will only change its signature
  // when props.a or props.b change
  const onClick = useCallback(() => {
    setCount(count + 1)
  }, [props.a, props.b])

  return (
    <button onClick={onClick}>
      You've clicked me ${count} times
    </button>
  )
}
```

The only *potential issue* I see with React Hooks is that you can only use them at the *TOP LEVEL* meaning you cannot put them inside loops, closures, nested functions, or statements (if, else, switch, etc) or you run the risk of really messing up your components functionality. This is due to the way React engineers implemented Hooks. [Read more about that problem and about the other 7 Hooks here](https://reactjs.org/docs/hooks-reference.html).

SO the next time you're deciding between a Functional Component and class-based Component/PureComponent be sure to keep this valuable new feature in mind.

Happy tinkering, happy Friday
