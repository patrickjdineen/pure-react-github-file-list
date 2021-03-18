import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import testFiles from './TestFiles'
import FileList from './FileList'

//creates general container for the items

//creates component for the FileList map function, Gathers items from functions below and other component pages


ReactDOM.render(
    <FileList files={testFiles} />,
    document.querySelector('#root')
);