# CAC #22809 - Trabajo Práctico - Backend

Para una referencia mas global del alcance ir a https://github.com/cesaremorel/cac-22809-grupo3-trabajo_practico

## Levantar una DB de Prueba (con Docker)

Para levantar un servidor Mysql de pruebas hay que ir a la carpeta `database` y usar docker compose (debes tener docker instalado en tu sistema). 

```bash
cd database/
docker-compose up -d
```

Esto va a levantar un servidor mysql en tu localhost en el puerto no estandar 6603 y podras acceder con el siguiente comando:

```bash
mysql --host=127.0.0.1 --user=developer_user --password=developer_pass --port=6603 stock
```

Ya dentro de la base de datos recomiendo se pueden correr las sentencias SQL del archivo `database/create.sql` para crear las tablas e inicializar algunos datos.


## Levantar una DB de Prueba (sin Docker)

Tambien es posible usar una instancia local de Mysql (sea porque se instaló como standalone o dentro de algun paquete como XAMPP).
En tal caso, solo hay que modificar los datos de conexion dentro del archivo `database/db.js`.

## Iniciar la aplicacion.

Volver a la carpeta raiz del proyecto y dentro de la misma ejecutar:

```bash
npm i
node app.js
```
La salida será similar a esto:

```text
Executing (default): SELECT 1+1 AS result
conexion a la BD OK
Servidor ok en el puerto 9000
```

## Probando los webservices

Recomendamos la extensión Thunder Client (https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).