import React from "react";

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => <button {...props}>{children}</button>;