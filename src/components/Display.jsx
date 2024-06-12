import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Album from './Album'
import Visible from './Visible'
import Account from './Account'

const Display = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Album />} />
                <Route path='/album/:id' element={<Visible />} />
                <Route path='/account' element={<Account />} />
            </Routes>
        </div>
    )
}

export default Display