import React from 'react';
import './index.scss';

export default class BottomFixedMenu extends React.Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <nav className="bottom-fixed-menu">
                    <ul className="bottom-fixed-menu__ul">
                      <li className="bottom-fixed-menu__li">
                        <a className="bottom-fixed-menu__link" href="#">
                          <span class="material-icons-round bottom-fixed-menu__link-icon">home</span>
                        </a>
                      </li>
                      <li className="bottom-fixed-menu__li">
                        <a className="bottom-fixed-menu__link" href="#">
                          <span class="material-icons-round bottom-fixed-menu__link-icon">room</span>
                        </a>
                      </li>
                      <li className="bottom-fixed-menu__li">
                        <a className="bottom-fixed-menu__link" href="#">
                          <span class="material-icons-round bottom-fixed-menu__link-icon">bookmark</span>
                        </a>
                      </li>
                      <li className="bottom-fixed-menu__li">
                        <a className="bottom-fixed-menu__link" href="#">
                          <span class="material-icons-round bottom-fixed-menu__link-icon">account_circle</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
        )
    }
}

