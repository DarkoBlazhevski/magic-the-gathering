import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Link, Route, Switch } from 'react-router-dom';

function Home() {
    const [isMousedOver, setMouseOver] = useState(false);
    const [name, setName] = useState('');

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    function handleChange(e) {
        //   let firstLetter = event.target.value.slice(0, 1);
        //   let restOfName = event.target.calue.slice(1, event.target.value.length);
        //   return firstLetter + restOfName
        setName(e.target.value)
        setName(e.target.value)

    };

    function handleClick() {

    };

    return (
        <div>
            <h1>Hello </h1>
            <form className="form">
                <input
                    onChange={handleChange}
                    type='text'
                    minLength="3"
                    placeholder="Enter Your Name Here"
                />
                {}

                <Link to={`/dashboard/${name}`}>
                    <button
                        onClick={handleClick}
                        className="submit-button"
                        type="submit"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        style={{ backgroundColor: isMousedOver ? 'black' : 'white' }}
                    >Submit</button>
                </Link>

                <Switch>
                    <Route
                        exact
                        path='/:parameter1'
                        render={props => <Dashboard {...props} parametar1 />}
                    />
                </Switch>

            </form>
            {name}
        </div>
    );
};

export default Home;