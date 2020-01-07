import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description:
      'Declarative, component based routingLorem ipsum dolor, sit amet consectetur adipisicing elit. Amet facilis quibusdam dicta aliquid. Illum eligendi deserunt sequi, architecto quis accusantium quidem totam aspernatur sunt quod esse rem earum dolores amet.',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description:
          'url parameters are parementers bla bla blaLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibus!',
        url: 'https://something.com/anything'
      },
      {
        name: 'Programatically navigate',
        id: 'programatically-program',
        description:
          'when building an app url parameters are parementers blLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibua bla bla',
        url: 'https://something.com/anything'
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description:
      'A javascript library for building Declarative, component basedLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibu routing',
    resources: [
      {
        name: 'React life cycle events',
        id: 'react-lifecycle',
        description:
          'React life cycle events allow url parameters are paremLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibuenters bla bla bla',
        url: 'https://something.com/anything'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description:
          'A collection of aha moments building an app url parameterLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibus are parementers bla bla bla',
        url: 'https://something.com/anything'
      }
    ]
  },
  {
    name: 'Funtional Programming',
    id: 'functional-programming',
    description:
      'In computer science, functional programming component based Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatiburouting',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description:
          'a guide to understand parameters are parementers bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibubla',
        url: 'https://something.com/anything'
      },
      {
        name: 'Building user Interfaces with pure functions',
        id: 'fn-composition',
        description:
          'a guide to building an app url parameters are parementerLorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta debitis temporibus reprehenderit earum voluptates labore dignissimos, vel dolores voluptatum iure quisquam nostrum qui ipsa odio illum hic eaque necessitatibus bla bla bla',
        url: 'https://something.com/anything'
      }
    ]
  }
];

function Resource() {
  let { topicID, resourceID } = useParams();
  const topic = topics
    .find(topic => topic.id === topicID)
    .resources.find(({ id }) => id === resourceID);
  return (
    <div className='card-panel pink'>
      <h5>{topic.name}</h5>
      <p>{topic.description}</p>
    </div>
  );
}

function Topic() {
  let { topicID } = useParams();
  let match = useRouteMatch();
  const topic = topics.find(topic => topic.id === topicID);
  return (
    <div className='card-panel orange lighten-2'>
      <h2>{topic.name}</h2>
      <p className='white-text'>{topic.description}</p>
      <ul>
        {topic.resources.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:resourceID`} component={Resource} />
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}
function Topics() {
  let match = useRouteMatch();
  return (
    <div className='card-panel lighten-1'>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:topicID`} component={Topic} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className='App card-panel green lighten-3'>
        <ul className='center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/topics' component={Topics} />
      </div>
    </Router>
  );
}

export default App;
