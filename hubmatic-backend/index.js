import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Your frontend dev server
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hubmatic backend is running 🚀");
});

// Socket.io setup
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for chat messages
  socket.on("chat-message", (data) => {
    console.log("Chat:", data);
    socket.broadcast.emit("chat-message", data);
  });

  // Later: Add signaling for WebRTC calls here

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
