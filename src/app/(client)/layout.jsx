import React, { Children } from 'react'
import Footer from '../../components/section/Footer'

const ClientLayout = ({ children }) => {
    return (
        <div>
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    )
}

export default ClientLayout