import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend(message.trim());
        setMessage("");
      }
    }
  };

  const handleClick = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        padding: "12px 16px",
        borderTop: "1px solid #ddd",
        backgroundColor: "#fff",
        gap: "8px"
      }}
    >
      <button title="Attach file" style={iconButtonStyle}>📎</button>
      <button title="Emoji" style={iconButtonStyle}>😀</button>

      <textarea
        ref={textareaRef}
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        style={{
          flex: 1,
          resize: "none",
          padding: "10px 12px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          fontSize: "14px",
          transition: "all 0.2s ease",
          lineHeight: "1.5",
          maxHeight: "120px",
          overflowY: "auto",
          boxSizing: "border-box"
        }}
      />

      <button
        onClick={handleClick}
        title="Send"
        style={{
          backgroundColor: "#fbb6ce",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.1s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FiSend size={18} />
      </button>

      <button title="Send Voice" style={iconButtonStyle}>🎤</button>
    </div>
  );
};

const iconButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  padding: "6px",
  borderRadius: "50%",
  transition: "background-color 0.2s ease"
};


export default MessageInput;
