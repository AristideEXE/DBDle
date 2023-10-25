import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <p>Header</p>
            <Outlet />
            <p>Footer</p>
        </>
    )
}

export default Layout;