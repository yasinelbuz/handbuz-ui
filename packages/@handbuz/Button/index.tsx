import { ReactElement } from "react";

export default function Button({ children }: { children: ReactElement }) {
  return <button>{children}</button>;
}
