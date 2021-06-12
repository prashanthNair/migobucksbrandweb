import React, { useEffect, useState } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

export interface IProtectedRouteProps extends RouteProps {
    fallbackRedirect: string;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
    const { fallbackRedirect } = props;
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    setIsAuthenticated(true)
    useEffect(() => {
        // TODO: Implement auth logic.
    }, []);

    if (isAuthenticated) {
        return <Route {...props} />
    } else {
        return <Redirect to={fallbackRedirect} />
    }
}

export default ProtectedRoute;