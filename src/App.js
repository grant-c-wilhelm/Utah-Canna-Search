import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainView from './MainView'
import StrainsListTitle from './StrainsListTitle'

import app from "./Assets/sass/app.sass";

function App () {
    return (
        <div>
            {/* <Header />  removed this here to add diff banners to each page*/}
            
            <MainView />
            {/* <Footer /> */}

        </div>
    )
}

export default App 