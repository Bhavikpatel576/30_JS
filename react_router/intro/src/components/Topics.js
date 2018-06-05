import React from 'react'
import {
  Route,
  Link,
} from 'react-router-dom'

function Topic({match}) {
  return (
    <div>
      <ul>
        <li>{match.params.topicID}</li>
      </ul>
    </div>
  )
}

export default function Topics ({match}) {
  return(
    <div>
      <h2>Topics</h2>
        <ul>
          <li>
            <Link to= {`${match.url}/rendering`}>Rendering with React </Link>
          </li>
          <li>
            <Link to= {`${match.url}/components`}> Componenents </Link>
          </li>
          <li>
            <Link to= {`${match.url}/props-v-state`}>Props vs State </Link>
          </li>
        </ul>

        <hr />
        <Route path={`${match.path}/:topicID`} component={Topic} />
        <Route exact path={match.path} render={() => {
          return <h3>Please select a topic</h3>
        }} />
    </div>
  ) 
}