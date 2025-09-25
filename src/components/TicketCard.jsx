import React from "react";

function PriorityBadge({ priority }) {
  const map = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-semibold ${map[priority]}`}
    >
      {priority} PRIORITY
    </span>
  );
}

export default function TicketCard({ ticket, onClick }) {
  return (
    <div
      className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-800">{ticket.title}</h4>
          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {ticket.description}
          </p>
          <div className="mt-3 flex gap-3">
            <span className="text-xs text-gray-500">{ticket.id}</span>
            <PriorityBadge priority={ticket.priority} />
          </div>
        </div>
        <div className="text-right">
          <div
            className={`text-sm font-medium ${
              ticket.status === "open" ? "bg-green-300 text-green-700 w-[60px] h-[25px] rounded-xl text-center items-center" : "text-yellow-600"
            }`}
          >
            {ticket.status === "open" ? "Open" : "In-Progress"}
          </div>
          <div className="text-xs text-gray-400 mt-3">{ticket.customer}</div>
          <div className="text-xs text-gray-300 mt-2">{ticket.createdAt}</div>
        </div>
      </div>
    </div>
  );
}