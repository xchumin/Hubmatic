import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend(message.trim());
        setMessage("");
      }
    }
  };

  return (
    <div style={{
      display: "flex",
      padding: "12px 16px",
      borderTop: "1px solid #ddd",
      backgroundColor: "#fff"
    }}>
      <button title="Attach file" style={{ marginRight: 8 }}>📎</button>
      <button title="Emoji" style={{ marginRight: 8 }}>😀</button>
      <textarea
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        style={{ flex: 1, resize: "none", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <button title="Send Voice" style={{ marginLeft: 8 }}>🎤</button>
    </div>
  );
};

export default MessageInput;
