import React from 'react';

export default function Notification({ className = '', children, ...props }) {
  return (
    <div className={`notification ${className}`} {...props}>
      <button className="delete"></button>
      {children}
    </div>
  );
}

export function LightDangerNotification({
  className = '',
  children,
  ...props
}) {
  return (
    <>
      {children && (
        <Notification className="is-danger is-light" {...props}>
          {children}
        </Notification>
      )}
    </>
  );
}
