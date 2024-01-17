import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import './index.scss'
import { useNavigate } from "react-router-dom"


function Sidebar() {
    const navigate = useNavigate();
    return <SideNav
        onSelect={selected=> {
            console.log(selected)
            navigate('/'+selected)
         
        }}
        className='nav-bar'
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon><i className="fa-solid fa-house" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="about"> 
                <NavIcon><i className="fa-solid fa-user" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                <NavText>About me</NavText>
            </NavItem>
            <NavItem eventKey="contact">
                <NavIcon><i className="fa-solid fa-envelope" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                <NavText>Contact Me</NavText>
            </NavItem>
            <NavItem>
                <NavIcon><i className="fa-solid fa-link" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                <NavText>My Links</NavText>
                <NavItem>
                    <NavIcon><i className="fa-brands fa-github" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                    <NavText>Github</NavText>
                </NavItem>
                <NavItem>
                    <NavIcon><i className="fa-brands fa-linkedin" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                    <NavText>Linkedin</NavText>
                </NavItem>
                <NavItem>
                    <NavIcon><i className="fa-solid fa-file" style={{ fontSize: "1.5em" }}></i> </NavIcon>
                    <NavText>Resume</NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
}

export default Sidebar
