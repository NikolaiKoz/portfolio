My Portfoli by Jose Luis Vallejos




## Descripcion


Este es mi portfolio personal para alojarlo en mi sitio web joseluisvallejos.io, en este sitio se mostratan mis trabajos como desarrollador


## Proceso


En este apartado explicare el proceso de desarrollo
### dominio


### hosting


### tecnologias


Este sitio web lo voy a desarrollar desde cero con React js como framework de JavaScript, aun asi no me gusta el tipado que tiene este lennguaje, JavaScript tiene un tipado debil, lo que nos permite hacer cosas como multiplicar clases por un string 😆, para evitar este problema utilizare TypeScript, si bien agregar un tipado fuerte trae sus problemas a la hora del desarrollo y con este me refiero a que constantemente uno siente que el tipado de datos interfiere o retrasa el desarrollo, de cara al futuro esto evita muchos problemas, resultando en un codigo mas mantenible a largo plazo.


Para los estilos utilizare SASS, concretamente SCSS si bien son lo mismo, me gusta como se ve el codigo final y prefiero las llaves antes que las tabulaciones para indicar que codigo pertenece a que cosa, esta tambien es la razon por la cual a tampoco me gusta el motor de plantillas de PUG, entre otras cosas.


Para los iconos utilizare React icons


### disenio


Tengo conocimientos de UX/IX, aun asi no soy diseniador grafico, pero generare un prototipo en figma de baja fidelidad, esto me ayudara a tener una vision mas amplia de como se vera mi sitio web y al mismo tiempo ayudarme a mentalizar la estructura de html que debo crear para cada componente.

#

## Proceso


1. Lo primero sin duda es generar la app de react utilizando una plantilla de typeScript para ello utilice el siguiente comando:

### `npx create-react-app my-app --template typescript`

* Este Comando crea la estructura de carpetas iniciales, inicializa git y me agrega typeScript por lo que podre trabajar con codigo .tsx


2. Agregar Sass a mi proyecto, por ello utilizo el siguiente comando:

### `npm i node-sass`

* Con esto tendre la funcionalidad para complilar archivos .sass y .scss que es con el que quiero trabajar, este archivo se convierte en .css en tiempo de ejecucion ya que SASS es un **preprocesador de css**.


3. En TypeScript los tipos de datos son muy importantes por que le permiten al compilador de ts verificar que el codigo es compatible con la estructura y los tipos de datos esperados en las diferentes bibliotecas del proyecto, por esta razon debemos intalar el siguiente paquete.


### `npm install --save @types/node-sass`


* Al agregar este paquete se agregan los tipos de typescript necesarios para utilizar "node-sass" en el proyecto.

4. Instalar React icons

### `npm install react-icons --save`

* Esto me permitira utilizar los iconos de forma sencilla.

5. Para la documentacion utilizare dos librerias mas jsdoc y sassdocs, estas librerias me permiten recolectar los comentarios escritos con una determinada sintaxis y generar un sitio web estatico, de esta forma tendre un sitio con la documentacion de los archivos .ts/.tsx y otro para los .scss.

### `npm i jsdoc`
### `npm i sassdoc`

6. Nesecitare generar ID en algun punto del desarrollo, asi que utilizare uuid, para generar los id y de esta forma simplificar la tarea.

### `npm i uuid`

7. Para los commits utilizare la extencion de Visual Studio Code **Conventional Commits**, ya que me parece una buena idea tener una nomeclatura unificada.

8. Este proyecto quiero realizarlo como full stack MERN por lo tanto la documentacion debe estar dividida, encontratas la documentacion de frontend y backend en sus respectivas carpetas y en las mismas estara detallado el proceso que segui en cada parte.









