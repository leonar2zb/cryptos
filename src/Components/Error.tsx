import { ReactNode } from "react";
import './Error.css'

export default function Error({ children }: { children: ReactNode }) {
    return (<div className="error_container">{children}</div>)
}