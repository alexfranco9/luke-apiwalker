import React from 'react';
import logo from './obi-wan.jpeg';

const Results = props => {
    
    return(
        <>
            {
            props.error ?
            <div>
                <img src={ logo } alt=""/>
                <p>"These are not the droids you are looking for"</p>
                </div> :
        
            props.resource == "people" ?
            <div className="card">
                <h1> {props.Info.name} </h1>
                <p>Birth year: {props.Info.birth_year} </p>
                <p>Mass: {props.Info.mass}</p>
                <p>Height: {props.Info.height}</p>
                <p>Skin Color: {props.Info.skin_color}</p>
            </div>: 
        
                
            props.resource == "planets" ?
            <div className="page-link">
                <h1> {props.Info.name} </h1>
                <p>Terrain: {props.Info.terrain} </p>
                <p>Climate: {props.Info.climate}</p>
                <p>Population: {props.Info.population}</p>
                <p>Gravity: {props.Info.gravity}</p>
            </div>: ""
            } 
        </>
    )
}

export default Results;

