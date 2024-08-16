import React from 'react';

type User = {
    id: number;
    name: string;
}

export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}