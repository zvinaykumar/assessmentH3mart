import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'


const Index = () => {
    return (
        <>
            <switch>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                </Routes>
            </switch>
        </>

    )
}

export default Index