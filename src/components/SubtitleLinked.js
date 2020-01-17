import React from "react";
import Subtitle from "./Subtitle";
import Link from "./Link";

function SubtitleLinked({
  to = "#",
  className = "is-6",
  children: child,
  style = {},
  ...props
}) {
  return (
    <>
      {child && (
        <Subtitle className={className} style={{ ...style }} {...props}>
          <Link to={to} className='links'>{child}</Link>
        </Subtitle>
      )}
    </>
  );
}

export default SubtitleLinked;
