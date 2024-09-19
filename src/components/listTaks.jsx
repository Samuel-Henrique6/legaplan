import React from 'react'
import RemoveTasks from './removeTasks'

export function Checkbox({ checked, task, tasks, setTasks }) {
    console.log(checked, task, tasks, setTasks)
    // Marcar uma tarefa como concluída
    const toggleTask = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
    }

    return (
        <button onClick={() => toggleTask(task.id)}>
            {checked ? (
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='#A0DCF6' />
                    <rect x='0.5' y='0.5' width='23' height='23' rx='3.5' stroke='#0796D3' />
                    <path
                        d='M18 7.5L9.75 15.75L6 12'
                        stroke='#0796D3'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    />
                </svg>
            ) : (
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='white' />
                    <rect x='0.5' y='0.5' width='23' height='23' rx='3.5' stroke='#185AD9' />
                </svg>
            )}
        </button>
    )
}

export default function ListTasks({ title, done, tasks, setTasks }) {
    return (
        <React.Fragment>
            <h1>{title}</h1>
            <div className='taskList'>
                {tasks
                    .filter((task) => task.done === done)
                    .sort((a, b) => a.id - b.id)
                    .map((task) => (
                        <div key={task.id} className='task'>
                            <Checkbox checked={task.done} task={task} tasks={tasks} setTasks={setTasks} />
                            <span className={task.done ? 'done' : ''}>{task.text}</span>
                            <RemoveTasks task={task} tasks={tasks} setTasks={setTasks} />
                        </div>
                    ))}
            </div>
        </React.Fragment>
    )
}
