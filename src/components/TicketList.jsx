import React from 'react'
import TicketCard from '../components/TicketCard'

export default function TicketList({ tickets, onSelect }){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.length === 0 && <div className="text-gray-500">No open tickets left.</div>}
      {tickets.map(t => (
        <TicketCard key={t.id} ticket={t} onClick={() => onSelect(t)} />
      ))}
    </div>
  )
}