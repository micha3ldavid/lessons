## Component vs. PureComponent

Good afternoon, peeps.

It's been a scattered day today, and I didn't have a specific topic in mind, so I thought I'd do a quick little ditty on React's Component vs. PureComponent.
Basically the only real difference between Component and PureComponent is a minor optimization built into a component's lifecycle method called `shouldComponentUpdate`.
What the optimization does is check a component's `props` to see if previous props are different than new props (they do this with === comparisons).

That's literally it.

And while this is super handy to have it also creates a lot of misuse.

Here's why.

#### Misuse #1 Inline Object Props
If you are specifying any inline props, that have a typeof "object" or "function", they will ALWAYS trigger a full re-render, even with PureComponent. This is because two object never share the same signature. Let's look at an example.
```jsx
<List style={{ background: 'deeppink' }} />

// when PureComponent's lifecycle is run it compares your previous 'style' prop to the new 'style' props,
// which is the equivalent of doing this:
var prevProp = { background: 'deeppink' }
var nextProps = { background: 'deeppink' }

// THIS IS ALWAYS FALSE!!!
return prevProp === nextProps
```
Other examples of this include:
```jsx
<List data={[1,2,3,4,5]} />
<List getData={() => getReduxData()} />
```

##### Solution: Use references rather than inline data.
```jsx
const styles = { background: 'crimson' }

export default function MyComponent () {
  return <List style={styles} />
}
```

### Misuse #2 Children Are Props Too
Yes, children are props too and since children are Objects, they will ALWAYS trigger a re-render when using PureComponent.
```jsx
<List>
  {data.map((item) => (
    <Item key={item.get('id')}>
      {item.get('title')}
    </Item>
  )}
</List>
```
##### Solution: Switch your component from a PureComponent to a Component.

### Misuse #3 renderProps Pattern
Lastly, using a renderProp pattern will ALWAYS trigger a re-render when lifecycle updates are triggered.
```jsx
<List getData={this.getListData}>
  {(item) => (
    <Item key={item.get('id')}>
      {item.get('title')}
    </Item>
  )}
</List>
```
##### Solution: Use a reference instead of an inline function
```jsx
<List getData={this.getListData}>
  {this.renderItem}
</List>
```

### Mod Your Component With ShouldComponentUpdate
The last thing you can do if you really want to optimize complex components (and makes them pretty kick ass) is to implement a mix of `Component` with `shouldComponentUpdate`.

#### shouldComponentUpdate
```jsx
export default class List extends React.Component {
  // only update component if data changes.
  // don't update component if children change.
  shouldComponentUpdate (props) {
    if (this.props.data !== props.data) return true
    return false
  }
  
  render () {
    const renderProp = React.Children.only(this.props.children)
    return (
      <ul>
        {this.props.data.map((item) => (
          <li key={item.get('id')}>
            {renderProp(item)}
          </li>
        ))}
      </ul>
    )
  }
}
```
In use:
```jsx
<List data={data}>
  {(item) => (
    <a href="#">
      {item.get('label')}
    </a>
  )}
</List>
```
