import React from 'react';
import './index.scss';

export default class TopMenu extends React.Component {

    render() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">

                <div className="user-info">
                  <div className="user-info__top">
                    <h2 className="user-info__top-name">Альбина Бийболатова</h2>
                    <span className="user-info__top-icon material-icons-round">edit</span>
                  </div>
                  <div className="user-info__line"></div>
                  <div className="user-info__bottom">
                    <span className="user-info__bottom-bonus"><b>0</b> бонусов</span>
                    <button className="user-info__bottom-button">Потратить</button>
                  </div>
                </div>

                <div className="my-preferences">
                  <h3 className="my-preferences__title">Мои предпочтения</h3>
                  <span className="my-preferences__icon material-icons-round">chevron_right</span>
                </div>

                <div className="feedback">
                  <h3 className="feedback__title">Обратная связь</h3>
                  <span className="feedback__icon material-icons-round">chevron_right</span>
                </div>

              </div>
            </div>
          </div>
        )
    }
}

