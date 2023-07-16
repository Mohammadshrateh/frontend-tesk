import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import SideNav from "./common/SideNav";
import TasksList from "./task/TasksList";

class Home extends Component {
    render() {
        return (
            <div className='d-flex min-height-100'>
                <SideNav></SideNav>
                <TasksList></TasksList>
            </div>
        );
    }
}

export default Home;
