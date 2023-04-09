import { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'

interface Props {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout