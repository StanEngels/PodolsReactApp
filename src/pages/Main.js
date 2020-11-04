import React from 'react';
import NavBar from '../components/navigation bars/NavBar';
import MenuBar from '../components/navigation bars/MenuBar';
class MainPage extends React.Component {
    render(){
        return(
            <div>
                <NavBar/>
                <MenuBar/>
                <div class="main">
                    <div class="content">
                       
                    </div>
                    <div id="welcome">
                       
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage