import React, { Fragment } from 'react';
import './index.scss';

import TopMenu from '@/components/Blocks/TopMenu/index.jsx';

export default class App extends React.Component {
    render() {
      return (
        <Fragment>
            <TopMenu></TopMenu>
        </Fragment>
      )
    }
}