
/* eslint-disable */

import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, AnyAction, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


const initialState = new Array<any>();

function reducerTest(stateData:Array<any> = initialState, action:AnyAction) {
  switch (action.type) {
    case 'data/dataLoaded': {
      return action.data // Replace the existing state entirely by returning the new value
    }
    default:
      return stateData
  }
}

//const store = createStore(reducerTest, applyMiddleware(thunk));
const store = createStore(reducerTest);


function GlobalStateContainer(props:any) {
  const dispatch = useDispatch();

  function fetchDummy() {
    setTimeout(function() {
        dispatch({ type: 'data/dataLoaded', data: ["1", "2", "3"] })
    }, 1000);
  }

  let testdata = useSelector((state) => state);
  function showData() {
      console.log(testdata);
      alert(testdata);
  }

  return (
    <>
      GlobalStateContainer
      <button onClick={fetchDummy}>Fetch Data</button>
      <button onClick={showData}>Show Data</button>
    </>
  )
}


export function Render(context:any, container:any) {

    /* ReactDOM.render is deprecated, but FluentUI does not support new React version until now
    const root = createRoot(container);
    root.render(<div><SearchSelectControl context={context} theobj={theobj} /></div>);
    */  

    ReactDOM.render(
      <>
        <Provider store={store}>
          <GlobalStateContainer />
        </Provider>
      </>
      , container
    );
  }



