import NavBar from "./navbar";
const Layout=({children})=>{
    return (<div>
        <NavBar />
        <div>{children}</div>
        </div>)
};
export default Layout;