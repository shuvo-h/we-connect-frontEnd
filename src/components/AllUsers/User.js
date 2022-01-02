import React from 'react';

const User = ({user}) => {
    console.log(user);
    return (
        <div>
            <h1>Single user</h1>
            {user.area}
            <hr />
        </div>
    );
};

export default User;