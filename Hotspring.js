import React from 'react';

const Hotspring = ({title, pref, rank, image, rev}) => {
  return(

    <div class="hotspring">
    <div class="flex">
    <div class="box-l">
      <img src={image} alt=""/>
    </div>
    <div class="box-r">
      <h3>{title}</h3>
      <p class="pref">{pref}</p>
    <p>{rev}</p>
    </div>

    </div>
    </div>
  )
}

export default Hotspring;
