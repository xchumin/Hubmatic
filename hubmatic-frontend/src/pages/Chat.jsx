import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
  return (
    <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
