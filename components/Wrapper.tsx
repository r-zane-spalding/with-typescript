import React, { Children, ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ClearIcon from "@mui/icons-material/Clear";
import { CSSTransition } from "react-transition-group";

type Props = { children: ReactNode };

const Wrapper: React.FC<Props> = ({ children }) => {
  const OverlayCropSquareIcon = styled(CropSquareIcon)(() => ({
    position: "absolute",
    bottom: "-12.5px",
    left: "-12.5px",
    zIndex: 100,
    background: "rgb(244,246,246)",
  }));

  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div>
      <div className="header-div">
        <CSSTransition in={menuExpanded} timeout={200} classNames="title-div">
          <div>
            <span>Sempre.ai</span>
          </div>
        </CSSTransition>
        <CSSTransition in={menuExpanded} timeout={200} classNames="menu-div">
          <div>
            <span
              style={{ zIndex: 100, cursor: "pointer" }}
              onClick={() => setMenuExpanded(!menuExpanded)}
            >
              {menuExpanded ? <ClearIcon /> : "Menu"}
            </span>
            <OverlayCropSquareIcon />
          </div>
        </CSSTransition>
      </div>
      <div className="content-wrapper-div">
        <CSSTransition
          in={menuExpanded}
          timeout={200}
          classNames="child-wrapper-div"
        >
          <div>{children}</div>
        </CSSTransition>
        <CSSTransition in={menuExpanded} timeout={200} classNames="sidebar-div">
          <div>
            {menuExpanded ? (
              [
                "Home",
                "About",
                "Products",
                "Resources",
                "Careers",
                "Contacts",
              ].map((section) => <span>{section}</span>)
            ) : (
              <></>
            )}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Wrapper;
