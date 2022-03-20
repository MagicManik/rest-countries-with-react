import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, population } = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;