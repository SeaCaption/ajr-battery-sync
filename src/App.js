import React, {Component} from 'react';
import './css/App.css';
import Container from '../src/components/content-container'
import TopBar from './components/app-bar/top-bar'

// import BottomBar from './components/app-bar/bottom-bar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopBar/>
                <Container/>
            </div>
        );
    }
}

export default App;
