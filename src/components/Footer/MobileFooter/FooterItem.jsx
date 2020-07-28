import React, { useState } from "react";

import "./footer-item.scss";

export default ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="footer-item" onClick={handleToogle}>
        <h1>{title}</h1>
        <i className="fa fa-chevron-down" />
      </div>
      {isOpen && <div className="footer-children">{children}</div>}
    </>
  );
};
