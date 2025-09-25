import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import initialTickets from '../public/initialTickets.json'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const inProgressCount = taskStatus.length;
  const resolvedCount = resolved.length;

  const addToTaskStatus = (ticket) => {
    if (taskStatus.find((t) => t.id === ticket.id)) return;
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setTaskStatus((prev) => [{ ...ticket, status: "in-progress" }, ...prev]);
  };

  const completeTask = (task) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== task.id));
    setResolved((prev) => [{ ...task, status: "resolved" }, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <h3 className="text-gray-800 font-semibold mb-4">
              Customer Tickets
            </h3>
            <TicketList tickets={tickets} onSelect={addToTaskStatus} />
          </div>

          <aside className="space-y-6">
            <TaskStatus
              taskStatus={taskStatus}
              onComplete={completeTask}
              resolved={resolved}
            />
          </aside>
        </section>
      </main>
       <Footer></Footer>

      <ToastContainer position="top-right" />
    </div>
  );
}

