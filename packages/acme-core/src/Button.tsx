import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function Button(props: ButtonProps) {
  return <button style={{
    backgroundColor: props.backgroundColor
  }}>{props.children}</button>;
}

Button.displayName = "Button";
