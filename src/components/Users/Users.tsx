import React from 'react';
import type {UserMutation} from "../../types";
import UserItem from "./UserItem/UserItem.tsx";

interface Props {
    users: UserMutation[]
}

const Users: React.FC<Props> = ({users}) => {
    return (
        <>
            <h3>Users</h3>
            {users.map(user => {
                return <UserItem key={user.id}
                                 name={user.name}
                                 email={user.email}
                                 role={user.role}
                                 isActive={user.isActive}
                />
            })}
        </>
    );
};

export default Users;