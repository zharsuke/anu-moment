import React, { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error: ' , error));
    }, []);
    return (
        <>
            <h1>Anu!</h1>
            {users.map((user) => (
                <div key={user.user_id}>
                    <p>{user.username}</p>
                </div>
            ))}
        </>
    );
}

export default App;