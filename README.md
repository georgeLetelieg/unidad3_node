# unidad3_node

# 1.  crear el proyecto en node
    -Crear un proyecto con nodeJS, con el siguiente comando
     en el terminal :

    npm init -y
    
# 1.1.- Cuando descargamos el proyecto de otro lado:
    Vamos a usar el siguiente comando para instalar dependencias de NodeMules

    npm i 

# 2.- instalar Express(para trabajar Javascript como servidor)
    -Realizar la instalacion de un paquete
     de desarrollo:

    npm i (o install) express (npm i express)

# 3.- Crear estructura de carpetas para el proyecto
    -Primero definimos la carpeta madre (src)
    -Crear el main de la aplicación, que es el app.js
    -Creamos 2 carpetas, una es para el ruter (definir rutas) y
     la otra es para los middleware (puente)

    src/
    ----app.js  <- Este es el main de la aplicación
    ----routes/
        ----users.js
    ----middlewares/
        ----logger.js

# 4.- Crear logger en carpeta middlewares/
    Creamos el puentes de la aplicación
    ----logger.js

# 5.- Creacion de una  ruta
    Crearemos un usuario con datos parseados(meterlos a la mala) en la ruta
    La ruta la usaremos para manejar las URL.

    users.js

# 6.- Creación del main
    Definimos el cerebro de la aplicación
    
    app.js

# 7.- Levantamos el servidor con el comando:
    recordar que node es palabra reservada, el src es la
    ubicación de la carpeta y el app.js en el main

    node src/app.js

# 8.- Verificamos las rutas cambiando el puerto
    ademas agregamos una constante para remplazar
    el numero del puerto

    const PORT = 3002;

# 9.- Agregamos mas usuarios en las rutas:
    Para esto creamos un array con dos usuarios nuevos
    en src/routes/users.js

# 10.- Instalacion de nodeMon:
    Este Pakage hace que no tengamos que bajar y
    levantar el servidor, se instala con el siguiente
    comando:

    npm i -D nodemon 

# 11.- Cambiamos el metodo de levantar el servidor
    Ahora estamos ejecutando un Script, esto es gracias a 'nodemon'

    npm run dev

# 12.- Tarea con 1 decima:
    Crear un router llamada personajes_de_marvel_que_no_salen_en_peliculas_de_marvel.js y crear su ruta
    respectiva en app.js
    junto  con un array con 4 valores que contenga: {id, nombre, poder, edad_relativa}