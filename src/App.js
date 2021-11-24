import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './__pages/Home/Home'
import PersonPage from './__pages/Person/Person'
import FoodPage from './__pages/Food/Food'

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/person' element={<PersonPage />} />
            <Route exact path='/food' element={<FoodPage />} />
        </Routes>
    </BrowserRouter>
}

export default App;