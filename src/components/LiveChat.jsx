import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router";
import { io } from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:3000");

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const messagesEndRef = useRef(null);

 
  useEffect(() => {
    askForName();
  }, []);

  const askForName = () => {
    Swal.fire({
      title: "Enter your name",
      input: "text",
      inputPlaceholder: "Your name",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: true,
      cancelButtonText: "Go Back",
      confirmButtonText: "Join Chat",
      inputValidator: (value) => {
        if (!value) {
          return "You need to enter your name!";
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setUserName(result.value);
      } 
    });
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("chat message", { user: userName, text: input });
      setMessages((prev) => [...prev, { user: userName, text: input }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col my-18 max-w-xl mx-auto h-[80vh] border rounded shadow p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Live Chat</h2>

      {!userName && (
        <button
          onClick={askForName}
          className="bg-yellow-400 text-black py-1 px-3 rounded mb-2 self-center hover:bg-yellow-500 transition"
        >
          Enter Your Name
        </button>
      )}

      <div className="flex-grow overflow-y-auto mb-4 px-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="p-2 my-1 rounded bg-blue-100 text-gray-800 max-w-[80%]"
          >
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          className="flex-grow border rounded px-3 py-2"
          placeholder={
            userName ? "Type your message..." : "Enter name to start chatting..."
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          disabled={!userName}
        />
        <button
          type="submit"
          className={`px-4 rounded transition text-white ${
            userName ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!userName}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
