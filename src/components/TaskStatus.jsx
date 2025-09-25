import React from 'react'
import { toast } from 'react-toastify'

export default function TaskStatus({ taskStatus, onComplete, resolved}){
  const handleComplete = (task) => {
    onComplete(task)
    toast.success(`Completed: ${task.title}`)
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-gray-700">Task Status</h4>
        <p className="text-sm text-gray-400 mb-3">Select a ticket to add to Task Status</p>
        <div className="space-y-3">
          {taskStatus.length === 0 && <div className="text-gray-400">No tasks selected yet.</div>}
          {taskStatus.map(task => (
            <div key={task.id} className="flex items-start justify-between gap-3 border rounded p-3">
              <div>
                <div className="font-semibold text-gray-800 text-sm">{task.title}</div>
                <div className="text-xs text-gray-500">{task.id} • {task.customer}</div>
              </div>
              <button onClick={() => handleComplete(task)} className="text-sm bg-green-600 text-white px-3 py-1 rounded">Complete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-gray-700">Resolved Task</h4>
        {resolved.length === 0 && <div className="text-gray-400">No resolved tasks yet.</div>}
        <div className="space-y-3 mt-3">
          {resolved.map(r => (
            <div key={r.id} className="flex items-center justify-between gap-3 border rounded p-3">
              <div>
                <div className="font-medium text-gray-800 text-sm">{r.title}</div>
                <div className="text-xs text-gray-500">{r.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
