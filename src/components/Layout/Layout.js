import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class layout extends Component {
  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default layout;