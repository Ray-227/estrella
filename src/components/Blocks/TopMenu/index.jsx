import React from 'react';
import './index.scss';

export default class TopMenu extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hbrMenu: 'close',
      }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

      if (e.target.className.includes('top-menu__hbg-icon')) {
        const hbgIcon = e.target;
        const hbgMenu = e.target.parentNode.parentNode.querySelector('.top-menu__hbg-menu');

        if(this.state.hbrMenu === 'close') {
          hbgIcon.innerHTML = 'close';
          hbgMenu.style.display = 'flex';
          this.setState({hbrMenu: 'open'});
        } else if (this.state.hbrMenu === 'open') {
          hbgIcon.innerHTML = 'menu';
          hbgMenu.style.display = 'none';
          this.setState({hbrMenu: 'close'});
        }
      }

    }

    render() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">

                <nav className="top-menu">

                  <div className="top-menu__logo">
                    <img className="top-menu__logo-img" src="../src/images/logo.png"></img>
                  </div>

                  <div className="top-menu__hbg">
                    <span class="material-icons-round top-menu__hbg-icon" onClick={this.handleClick}>menu</span>
                    <nav className="top-menu__hbg-menu">
                      <ul className="top-menu__hbg-menu-ul">
                        <li className="top-menu__hbg-menu-li">
                          <a href="#" className="top-menu__hbg-menu-link">Menu</a>
                        </li>
                        <li className="top-menu__hbg-menu-li">
                          <a href="#" className="top-menu__hbg-menu-link">Menu</a>
                        </li>
                        <li className="top-menu__hbg-menu-li">
                          <a href="#" className="top-menu__hbg-menu-link">Menu</a>
                        </li>
                        <li className="top-menu__hbg-menu-li">
                          <a href="#" className="top-menu__hbg-menu-link">Menu</a>
                        </li>
                      </ul>
                    </nav>
                  </div>


                </nav>

              </div>
            </div>
          </div>
        )
    }
}

