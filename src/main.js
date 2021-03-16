import React from 'react';
import HornedBeast from './hornedbeasts';

class Main extends React.Component {
  render() {
    let data = require ('./assets/data.json');

    return (
      <div>
        <main>
          {data.map ((info) => {
            return <HornedBeast
              title={info.title}
              url={info.image_url}
              description={info.description}
              alt={info.keyword}
              horns={info.horns}/>
          })}
        </main>
      </div>
    );
  }
}

export default Main;
