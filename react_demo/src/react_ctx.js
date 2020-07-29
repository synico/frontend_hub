import React from 'react';
import { render } from '@testing-library/react';

const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        return (
            <ThemeContenxt.Provider value="dark">
                <Toolbar />
            </ThemeContenxt.Provider>
        );
    }
}


function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
}

export default App;