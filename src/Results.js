import React from 'react';

const Results = ({items}) => {
    items.map((item) => {
        return (<div>
          <h2>{item.title}</h2>
          <img src={item.image_url} alt="kn"/>
          </div>);
      })
      return(<div>
        </div>

      );
}

export default Results
