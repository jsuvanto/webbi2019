import React, { FunctionComponent } from 'react';
import Loadable from 'react-loadable';

// set moment locale
import moment from 'moment';
import 'moment/locale/fi';
moment.locale('fi');

import Spinner from './components/Spinner';

const APIWrapper = Loadable({
  loader: () => import('./components/APIWrapper'),
  loading: Spinner
});

const App: FunctionComponent = () => (
  <APIWrapper />
);

export default App;
