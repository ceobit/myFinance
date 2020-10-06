import React, { useState } from "react";
import "./App.css";

import Wallets from "./UI/Wallets/Wallets";
import Modal from "./UI/Modal/Modal";
import Context from "./Context/Context";

function App() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentWalletId, setCurrentWalletId] = useState(0);

  const openWalletSettings = (visible, id) => {
    setVisibleModal(visible);
    setCurrentWalletId(id);
  };

  return (
    <Context.Provider value={{ openWalletSettings }}>
      <>
        <Wallets />
        {visibleModal ? <Modal
            id={currentWalletId}
        /> : null}
      </>
    </Context.Provider>
  );
}

export default App;
