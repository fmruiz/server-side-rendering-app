import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions';

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const renderUserList = () => {
        return users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
        });
    };

    return (
        <div>
            <Helmet>
                <title>Users App</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
            <ul>{renderUserList()}</ul>
        </div>
    );
};

export default UsersList;
