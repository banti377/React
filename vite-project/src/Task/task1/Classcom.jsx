import React from 'react'
import './Style.css'

class ClassCom extends React.Component {
    render() {
        return <div>
            <div className='head'>
                Header
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </nav>
            <div className='main'>
                Main Content
            </div>
            <footer className='footer'>
                Footer
            </footer>
        </div>
    }
}

export default ClassCom