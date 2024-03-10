import React from "react";

export default function ResultNotFound() {
  return (
    <div>
      <img
        alt="empty content"
        src="/images/svg/empty_content.svg"
        style={{ width: 300, margin: "0 auto" }}
      />
      <h3 style={{ marginTop: "10px" }}>No data</h3>
    </div>
  );
}
