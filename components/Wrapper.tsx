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

  const [menuCollapsed, setMenuCollapsed] = useState(true);

  return (
    <div>
      <div className="header-div">
        <CSSTransition
          in={menuCollapsed}
          timeout={200}
          classNames="title-div"
          appear={true}
        >
          <div>
            <span>Hello</span>
          </div>
        </CSSTransition>
        <CSSTransition
          in={menuCollapsed}
          timeout={200}
          classNames="menu-div"
          appear={true}
        >
          <div>
            <span
              style={{ zIndex: 100, cursor: "pointer" }}
              onClick={() => setMenuCollapsed(!menuCollapsed)}
            >
              {menuCollapsed ? <ClearIcon /> : "Menu"}
            </span>
            <OverlayCropSquareIcon />
          </div>
        </CSSTransition>
      </div>
      <div className="content-wrapper-div">
        <CSSTransition
          in={menuCollapsed}
          timeout={200}
          classNames="child-wrapper-div"
          appear={true}
        >
          <div>{children}</div>
        </CSSTransition>
        <CSSTransition
          in={menuCollapsed}
          timeout={200}
          classNames="sidebar-div"
          appear={true}
        >
          <div>
            {!menuCollapsed ? (
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
