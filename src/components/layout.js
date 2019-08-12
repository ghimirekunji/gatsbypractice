
import React from "react"
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutstyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className = {layoutstyles.container}>
            <div className = {layoutstyles.content}>
            <Header/>
            
            {props.children}
            
            </div>
            <Footer/>
           

        </div>
    )
}

export default Layout