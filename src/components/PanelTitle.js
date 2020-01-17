import React from "react";
import Link from "./Link";
import Title from "./Title";

function PanelTitle({
  children: child = false,
  className = "",
  columnSize = false,
  style = {},
  title,
  url: to = "#",
  ...props
}) {
  return (
    <>
      {child && (
          <Title>
            <Link
              className="links"
              to={to}
              style={{
                color: "#00d1b2",
                border: ".3rem dotted #00d1b2",
                borderTop:'none',
                borderRight:'none',
                padding: "0.1rem .5rem",
                marginLeft: '0rem',
                ...style
              }}
            >
              {child}
            </Link>
          </Title>
      )}
    </>
  );
}

export default PanelTitle;
