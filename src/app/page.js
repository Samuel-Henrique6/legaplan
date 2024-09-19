'use client'

import AddTasks from '@/components/addTasks'
import Header from '@/components/header'
import ListTasks from '@/components/listTaks'
import React, { useState, useEffect } from 'react'

function page() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    // Atualizar localStorage sempre que as tasks mudarem
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className='container'>
            <Header />
            <div className='container-tasks'>
                <ListTasks title='Suas tarefas de hoje' done={false} tasks={tasks} setTasks={setTasks} />
                <ListTasks title='Tarefas finalizadas' done={true} tasks={tasks} setTasks={setTasks} />
            </div>
            <AddTasks newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default page
