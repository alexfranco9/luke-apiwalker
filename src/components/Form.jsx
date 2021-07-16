import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form = props => {
    const [id, setId] = useState("");
    const [resource, setResource] = useState("people");
    const [resetStar, setResetStar] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${ resource }/${ id }`)
        .then(res => props.data(res.data))
        .catch(err => props.error(err))
    }, [resetStar])

    const onSubmitHandler = e => {
        e.preventDefault();
        setResetStar(!resetStar);
        navigate(`/${ resource }/${ id }`)
    }

    return(
        <>
        <form onSubmit={ onSubmitHandler } className="jumbotron">

            <label htmlFor="search"> Search for: </label>
            <select name="resource" onChange={e => setResource(e.target.value)} >
                <option value="people"> People </option>
                <option value="planets"> Planets </option>
            </select>


            <label htmlFor="id"> ID: </label>
            <input type="text" name="id" onChange={e => setId(e.target.value)} />
            
            <input type="submit" className="btn btn-primary" value=" Search "/>

        </form>
        </>
    )
}

export default Form;