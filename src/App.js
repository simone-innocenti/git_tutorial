import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
class App extends React.Component{

    render(){
        return(
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
                <CountryPicker />
            </div>
        )
    }

}


export default App;