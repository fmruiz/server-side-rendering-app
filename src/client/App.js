import React from 'react';
import Home from './components/Home';

const App = () => {
    return (
        <div>
            <Home />
            <button onClick={() => console.log('xxx')}>ss</button>
        </div>
    );
};

export default App;
