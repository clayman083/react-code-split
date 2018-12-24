import * as React from "react";
import { Link } from 'react-router-dom';

export const Index = function () {
    return (
        <div>
            <h1>Demo React application with code-splitting and server side rendering</h1>
            <Link to="/about">About</Link>
        </div>
    );
};
