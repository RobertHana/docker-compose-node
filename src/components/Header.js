import { Link } from "react-router-dom";
import React from 'react';

import { Modal2 } from './Modals';
import { ModalProvider, ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';

function Header() {
  return (
    <header className="page-header">
      <h1>TodoList</h1>
      <div className="header-links">
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/table1">Table1</Link>
        |
        <ModalProvider>
          <ModalRoot />
          <ModalConsumer>
            {({ showModal }) => (
              <React.Fragment>
                <button onClick={() => showModal(Modal2, { title: 'New' })}>New</button>
              </React.Fragment>
            )}
          </ModalConsumer>
        </ModalProvider>
      </div>
    </header>
  )
}

export default Header;