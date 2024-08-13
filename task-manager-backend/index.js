const express = require('express');
const cors = require('cors'); // Importa cors
const app = express();
const port = 3000;

// Habilita CORS para permitir solicitudes de otros orígenes
app.use(cors()); 
app.use(express.json());

// Datos iniciales de tareas
let tasks = [
  { id: 1, title: 'Tarea 1  de jhimi', completed: false },
  { id: 2, title: 'Tarea 2 de marcelo', completed: true },
];

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  console.log('GET /tasks - Obteniendo todas las tareas');
  res.json(tasks);
});

// Agregar una nueva tarea
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  console.log(`POST /tasks - Tarea agregada: ${newTask.title}`);
  res.status(201).json(newTask);
});

// Eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find(task => task.id === taskId);
  tasks = tasks.filter(task => task.id !== taskId);
  console.log(`DELETE /tasks/${taskId} - Tarea eliminada: ${task ? task.title : 'No encontrada'}`);
  res.status(204).send();
});

// Obtener estadísticas de las tareas
app.get('/tasks/stats', (req, res) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  console.log('GET /tasks/stats - Obteniendo estadísticas de tareas');
  res.json({
    totalTasks,
    completedTasks,
    pendingTasks,
  });
});

// Inicia el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:${port}`);
});
