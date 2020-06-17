import React from 'react';
import styles from './layout.module.scss';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          { props.children }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;