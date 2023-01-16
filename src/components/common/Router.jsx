import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';
import AddClient from '../../components/add/AddClient'
import ClientList from '../list/ClientList';

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-client" element={<AddClient />} />
                <Route path="/client-list" element={<ClientList />} />
            </Routes>
        </>
    )
}

export default Router