import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OuterHtml from './outer-html/OuterHtml';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OuterHtml />, document.getElementById('root'));
registerServiceWorker();