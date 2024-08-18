import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './index.scss';
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    return (
        <SideNav
            onSelect={(selected) => {
                if (selected !== "github" && selected !== "linkedin" && selected !== "resume") {
                    console.log(selected);
                    navigate('/' + selected);
                }
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
                    <NavItem eventKey="github"> 
                        <NavIcon>
                            <a href="https://github.com/Kush139" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github" style={{ fontSize: "1.5em" }}></i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="https://github.com/Kush139" target="_blank" rel="noopener noreferrer">Github</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="linkedin">
                        <NavIcon>
                            <a href="https://www.linkedin.com/in/kush-madan-4a9367297/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin" style={{ fontSize: "1.5em" }}></i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="https://www.linkedin.com/in/kush-madan-4a9367297/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="resume">
                        <NavIcon>
                            <a href="https://drive.google.com/file/d/1afGtj9352GvGcC-G_DKSRAN5Kl9AMDns/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-file" style={{ fontSize: "1.5em" }}></i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="https://drive.google.com/file/d/1afGtj9352GvGcC-G_DKSRAN5Kl9AMDns/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
