import { Outlet } from "react-router"


const Layout = (props) => {

    return (
        <div className="background">
            <div className="outer">
                <div className="inner">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;