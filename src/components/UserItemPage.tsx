import axios from 'axios';
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from './List';
import UserItem from "./UserItem";
import { useParams, useNavigate } from 'react-router-dom';

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<string>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}, {user?.address.street}, {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage;