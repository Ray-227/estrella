import React, { Fragment } from 'react';
import './index.scss';

import TopMenu from '@/components/Blocks/TopMenu/index.jsx';
import BottomFixedMenu from '@/components/Blocks/BottomFixedMenu/index.jsx';

export default class App extends React.Component {
    render() {
      return (
        <Fragment>
            <TopMenu></TopMenu>
            <BottomFixedMenu></BottomFixedMenu>
        </Fragment>
      )
    }
}