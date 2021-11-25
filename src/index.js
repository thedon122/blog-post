import React from 'react';
import { ReactDOM } from 'react';
import { Provider } from 'react';
import { createSrore } from 'redux';

import App from './compoments/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createSrore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);