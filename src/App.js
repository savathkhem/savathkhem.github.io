import React, {  Fragment } from 'react';
import { Head, Body } from "./components/Layout/";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <Fragment>
  <CssBaseline />
      <Head />
      <Body />
  </Fragment>
);

export default App;