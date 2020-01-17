import React from "react";

function Section({ children, className = "", style = {}, ...props }) {
  return (
    <>
      {children && (
        <section className={`section ${className}`} style={{...style}} {...props}>
          {children}
        </section>
      )}
    </>
  );
}

export function SectionContainer({ children, className = "", style = {}, ...props }) {
  return (
    <>
      {children && (
        <section className={`section ${className}`} style={{...style}} {...props}>
          {children}
        </section>
      )}
    </>
  );
}

export default Section;
