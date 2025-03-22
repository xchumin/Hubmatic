import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MessageInput from "./MessageInput";

const socket = io("http://localhost:5000");

const ChatWindow = () => {
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    socket.on("chat-message", (data) => {
      setChatLog((prev) => [...prev, { sender: "Other", text: data }]);
    });
    return () => socket.off("chat-message");
  }, []);

  const handleSend = (msg) => {
    socket.emit("chat-message", msg);
    setChatLog((prev) => [...prev, { sender: "You", text: msg }]);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#fff0f6" }}>
      <div style={{ flex: 1, padding: 16, overflowY: "auto" }}>
        {chatLog.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 10, textAlign: msg.sender === "You" ? "right" : "left" }}>
            <span style={{
              backgroundColor: msg.sender === "You" ? "#fbb6ce" : "#ffe3f2",
              padding: "8px 12px",
              borderRadius: 12,
              display: "inline-block",
              maxWidth: "70%"
            }}>
              <strong>{msg.sender}:</strong> {msg.text}
            </span>
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
