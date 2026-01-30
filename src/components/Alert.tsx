import type { ReactNode } from "react";

interface AlertProps {
    children: ReactNode,
    color?: 'primary' | 'secondary',
    onClose: () => void
}

function Alert({children, onClose, color = 'primary'}: AlertProps) {
  return (
    <div className={"alert alert-"+ color + " alert-dismissible fade show"} role="alert">
        {children}
        <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;