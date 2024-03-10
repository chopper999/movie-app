import { Icon } from "@iconify/react";
import React, { ReactNode } from "react";
import "../scss/popup.scss";

interface PopupProps {
  open: Boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}
export default function Popup({ open, onClose, title, children }: PopupProps) {
  return (
    <div className={"popup-container " + (open ? "open" : "")}>
      <div className="popup">
        <div className="popup-header">
          <h3>{title}</h3>
          <Icon
            height={30}
            icon="ci:close-sm"
            className="close-button"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
