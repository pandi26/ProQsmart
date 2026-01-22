import { useState } from "react";

export default function TreeRow({ label, level, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr>
        <td
          style={{
            paddingLeft: level * 20,
            cursor: "pointer",
            fontWeight: level < 3 ? "bold" : "normal"
          }}
          onClick={() => setOpen(!open)}
        >
          {children ? (open ? "▼ " : "▶ ") : "• "}
          {label}
        </td>
      </tr>

      {open && children}
    </>
  );
}
