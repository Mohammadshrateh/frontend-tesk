import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import SideNav from "./common/SideNav";

class Home extends Component {
    render() {
        return (
            <div className='d-flex h-100'>
                <SideNav></SideNav>
            </div>
        );
    }
}

export default Home;
