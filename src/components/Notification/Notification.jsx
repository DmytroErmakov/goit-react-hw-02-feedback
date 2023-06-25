import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css'
  
export class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        <p className={style.text}>{message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
