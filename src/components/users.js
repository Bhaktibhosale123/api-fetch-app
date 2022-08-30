import React, { useEffect, useState } from 'react';
import Load from './load';
import User from './user';

export default function Users() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData([]);
        setTimeout(() => {
            const loadUsers = async () => {
                await fetch("https://reqres.in/api/users?page=1")
                    .then((response) => response.json())
                    .then((users) => {
                        setData(users.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            loadUsers();
        }, 1000);
    }, [])



    return (

        <div className='container my-3'>
            <div className="text-center">
            </div>
            {loading && <Load />}
            <div className="row">
                {data.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <User firstname={element.first_name} lastname={element.last_name} email={element.email} avatar={element.avatar} />
                    </div>
                })}
            </div>
        </div>

    )

}
