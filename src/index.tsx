import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import BaseStyles from './components/BaseStyles';
import Concentration from './components/Concentration';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BaseStyles />
        <Concentration />
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
