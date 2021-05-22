import React, { Fragment } from 'react';
import './index.scss';

import TopMenu from '@/components/Blocks/TopMenu/index.jsx';
import Lk from '@/components/Blocks/Lk/index.jsx';
import BottomFixedMenu from '@/components/Blocks/BottomFixedMenu/index.jsx';


export default class App extends React.Component {
    render() {
      return (
        <Fragment>
            <TopMenu></TopMenu>
            <Lk></Lk>
            <BottomFixedMenu></BottomFixedMenu>
        </Fragment>
      )
    }
}