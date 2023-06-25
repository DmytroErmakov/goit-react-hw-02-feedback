import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';


export class Section extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
            <h2 className={styles.section}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
