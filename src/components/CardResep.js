import React from 'react'
import '../style/CardResep.css'

export default function CardResep({title,imageUrl,kalori,karbon}){
    return(
        <div className="card-container">
          <div className="image-container">
              <img src={imageUrl} alt=''/>
          </div>
          <div className="card-content">
        
          <div className="list-inline d-flex flex-wrap justify-content-around mb-1">
          <div className="list-inline-item text-secondary fw-bold"><small><i class="far fa-fire"></i> {kalori} Kkal</small></div>
          <div className="list-inline-item text-secondary fw-bold"><small><i class="far fa-cloud"></i> {karbon} Kg</small></div>
          </div>
            <div className="card-title text-end"><h3>{title}</h3></div>
          </div>
        </div>
  
    )
}
