import React from 'react'

const Card = ({item}) => {
    return (
        <div className="col-md-6 col-lg-6 col-10 mx-auto">
        
        <div class="card">
        <a href={item.url}  target="_bla"><img src={item.image_url} className="card-img-top img-fluid" alt="..."/></a>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.synopsis}</p>
          
          </div>
        </div>
        </div>
     
      
        
    )
}

export default Card
