import React, { useState } from 'react'

export default function AddTasks({ newTask, setNewTask, tasks, setTasks }) {
    const [isModalOpen, setIsModalOpen] = useState(false) // Controla a exibição do modal

    // Adicionar uma nova tarefa
    const addTask = () => {
        if (newTask.trim() === '') return
        const task = { id: Date.now(), text: newTask, done: false }
        setTasks([...tasks, task])
        setNewTask('')
        setIsModalOpen(false) // Fecha o modal após adicionar a tarefa
    }

    return (
        <>
            {/* Botão para abrir o modal */}
            <button onClick={() => setIsModalOpen(true)} className='add-task-button'>
                Adicionar nova tarefa
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <h2>Nova Tarefa</h2>
                        <label>Título</label>
                        <input
                            type='text'
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder='Digite'
                        />
                        <div className='modal-buttons'>
                            <button onClick={() => setIsModalOpen(false)} className='cancel-button'>
                                Cancelar
                            </button>
                            <button onClick={addTask} className='add-task-button-confirm'>
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
