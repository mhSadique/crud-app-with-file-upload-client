import React, { useEffect } from 'react';
import UserInput from './TestUserInput';
import UsersCollection from './TestUsersCollection';

const Test = () => {
    useEffect(() => {
        fetch('http://localhost:3000/products/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <UserInput />
            <UsersCollection />
        </div>
    );
};

export default Test;