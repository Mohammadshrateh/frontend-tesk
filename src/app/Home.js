import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import SideNav from "./common/SideNav";
import TasksList from "./task/TasksList";
import Header from "./common/Header";

class Home extends Component {
    render() {
        const loggedInUserName = 'John Doe';

        return (

            <div className='d-flex min-height-100'>
                <SideNav></SideNav>

                <div className={'w-100'}>
                    <Header userName={loggedInUserName} />
                    <TasksList></TasksList>

                </div>

            </div>
        );
    }
}

export default Home;
