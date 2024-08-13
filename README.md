Una aplicación de gestión de tareas. El sistema tendrá dos microfrontends:

* Task Manager (Gestor de Tareas): Este microfrontend permitirá a los usuarios ver la lista de tareas actuales, agregar nuevas tareas y eliminar tareas existentes.

* Task Stats (Estadísticas de Tareas): Este microfrontend mostrará estadísticas básicas de las tareas, como el número total de tareas, cuántas están completadas y cuántas están pendientes.

* Backend:
El backend proporcionará los siguientes endpoints:

GET /tasks: Obtendrá la lista de tareas.;
POST /tasks: Agregará una nueva tarea.;
DELETE /tasks/:id: Eliminará una tarea específica.;
GET /tasks/stats: Obtendrá estadísticas sobre las tareas.;
