import React from 'react';
import type {UserInterface} from "../../../types";

const UserItem: React.FC<UserInterface> = ({name, email, role, isActive}) => {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-md-12">
                    <div className="p-3 border rounded shadow-sm">
                        <h3 className="mb-0">{name}</h3>

                        <div>
                            <strong className="text-black me-2">role:</strong>
                            <span>{role}</span>
                        </div>

                        <div>
                            <strong className="text-black me-2">email:</strong>
                            <span>{email}</span>
                        </div>

                        {isActive ?
                            <p className="mb-0 mt-2 badge bg-success">online</p>:
                            <p className="mb-0 mt-2 badge bg-danger">offline</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;