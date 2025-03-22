const ChatSidebar = () => {
    return (
      <aside style={{ width: 250, backgroundColor: "#ffe4ec", padding: 16, borderRight: "1px solid #eee" }}>
        <h3 style={{ marginBottom: 20 }}>My Notes</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: 12 }}>Chat with Jerome</li>
          <li style={{ marginBottom: 12 }}>Team Hubmatic</li>
          <li style={{ marginBottom: 12 }}>Support Bot</li>
        </ul>
      </aside>
    );
  };
  
  export default ChatSidebar;
  