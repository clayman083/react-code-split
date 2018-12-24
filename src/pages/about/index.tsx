import * as React from "react";
import { Link } from "react-router-dom";

const About = function () {
    return (
        <div>
            <h1>About</h1>

            <p>Demo React application with code-splitting and server side rendering</p>

            <p>Libraries:</p>
            <ul>
                <li>React</li>
                <li>React-Router</li>
                <li>React-Loadable</li>
                <li>Express on server side</li>
            </ul>

            <Link to="/">Back</Link>
        </div>
    );
};

export default About;
