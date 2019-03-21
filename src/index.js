import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/app';
import ErrorBoudary from './components/error-boundary/error-boundary';
import StroikaServices from './services/stroika-services';
import { PostroikaServiceProvider } from './postroika-service-context/postroika-service-context';

const stroikaServices = new StroikaServices();

// каждый компонент отвечает за свой аспект и все эти аспекты становятся доступны тем элементам которые находятся ниже по иерархии
ReactDOM.render (
        <ErrorBoudary>
         <PostroikaServiceProvider value={ stroikaServices }>
          <Router>
            <App />
          </Router>  
         </PostroikaServiceProvider>
        </ErrorBoudary>,
    document.getElementById('root')
);