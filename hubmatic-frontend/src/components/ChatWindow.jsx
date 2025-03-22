import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MessageInput from "./MessageInput";
import { FiPhoneCall, FiVideo, FiUserPlus, FiClock } from "react-icons/fi";

const socket = io("http://localhost:5000");

const ChatWindow = () => {
  const [chatLog, setChatLog] = useState([]);
  const [secretMode, setSecretMode] = useState(false);
  const [expireDuration, setExpireDuration] = useState(60 * 60 * 1000);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    socket.on("chat-message", (data) => {
      setChatLog((prev) => [...prev, { sender: "Other", text: data }]);
    });
    return () => socket.off("chat-message");
  }, []);

  const handleSend = (msg) => {
    socket.emit("chat-message", msg);
    setChatLog((prev) => [...prev, { sender: "You", text: msg }]);

    if (secretMode) {
      setTimeout(() => {
        setChatLog((prev) =>
          prev.filter((m) => m.text !== msg || m.sender !== "You")
        );
      }, expireDuration);
    }
  };

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff0f6",
      overflowX: "hidden",
      position: "relative"
    }}>
      {/* Header */}
      <div style={{
        padding: "10px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffe6ef",
        borderBottom: "1px solid #f9c1d8",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <h2 style={{ margin: 0, color: "#c24074", fontWeight: 700 }}>Chat Room</h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fdd6e7",
            padding: "6px 12px",
            borderRadius: "16px",
            gap: 8,
            fontSize: 14,
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)"
          }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={secretMode}
                onChange={(e) => setSecretMode(e.target.checked)}
              />
              <span style={{ fontWeight: 500 }}>Secret Chat</span>
            </label>
            <select
              value={expireDuration}
              onChange={(e) => setExpireDuration(Number(e.target.value))}
              style={{
                padding: "4px 8px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                fontSize: 13,
                backgroundColor: "#fff0f6",
                color: "#c24074",
                fontWeight: "500"
              }}
            >
              <option value={60000}>1 Min</option>
              <option value={3600000}>1 Hour</option>
              <option value={86400000}>24 Hours</option>
            </select>
          </div>
        </div>

        {/* Action Icons */}
        <div style={{ display: "flex", gap: 10 }}>
          <button title="Chat History" onClick={() => setShowHistory(!showHistory)} style={iconBtn}><FiClock /></button>
          <button title="Voice Call" style={iconBtn}><FiPhoneCall /></button>
          <button title="Video Call" style={iconBtn}><FiVideo /></button>
          <button title="Add to Group" style={iconBtn}><FiUserPlus /></button>
        </div>
      </div>

      {/* Chat History Panel */}
      {showHistory && (
        <div style={{
          position: "absolute",
          top: 60,
          bottom: 0,
          right: 0,
          width: "300px",
          backgroundColor: "#fffafd",
          borderLeft: "1px solid #f8c3db",
          boxShadow: "-3px 0 10px rgba(0,0,0,0.05)",
          padding: "16px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column"
        }}>
          <h3 style={{
            margin: 0,
            marginBottom: 12,
            color: "#d04e79",
            borderBottom: "1px solid #f3b4cd",
            paddingBottom: 6
          }}>
            Chat History
          </h3>
          <div style={{
            flex: 1,
            overflowY: "auto",
            fontSize: 14,
            lineHeight: 1.5,
            paddingRight: 6
          }}>
            {chatLog.map((msg, idx) => (
              <div key={idx} style={{
                marginBottom: 10,
                padding: 8,
                backgroundColor: msg.sender === "You" ? "#fde4ed" : "#f6e7f0",
                borderRadius: 10,
                wordBreak: "break-word"
              }}>
                <strong style={{ color: "#b13762" }}>{msg.sender}:</strong><br />
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={{ flex: 1, padding: 16, overflowY: "auto" }}>
        {chatLog.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 10, textAlign: msg.sender === "You" ? "right" : "left" }}>
            <span style={{
              backgroundColor: msg.sender === "You" ? "#fbb6ce" : "#ffe3f2",
              padding: "8px 12px",
              borderRadius: 12,
              display: "inline-block",
              maxWidth: "70%",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "pre-wrap"
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

const iconBtn = {
  backgroundColor: "#fbb6ce",
  border: "none",
  borderRadius: "50%",
  padding: "8px",
  color: "#fff",
  cursor: "pointer",
  fontSize: 16,
  transition: "all 0.2s ease"
};

export default ChatWindow;
