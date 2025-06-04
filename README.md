¿Cómo funciona la función?

Esta versión mejora la interacción visual del usuario mostrando un modal personalizado cuando el usuario quiere eliminar un producto. El modal tiene dos botones: uno para confirmar y otro para cancelar.
Al hacer clic en "Eliminar del carrito", se muestra el modal.
Si se hace clic en “Sí, eliminar”, se cierra el modal y se lanza un mensaje de éxito.
Si se hace clic en “Cancelar” o fuera del modal, se cierra sin eliminar nada.

 ¿Por qué es útil la función?
 
Este tipo de confirmación visual mejora la experiencia del usuario:
Transmite seriedad en la acción que se está por realizar.
El modal capta completamente la atención del usuario.
Da más libertad de diseño que una alerta o confirmación nativa.

¿Cómo la pensaron y cómo la implementaron?

La idea fue inspirada en plataformas modernas como Shopify, Amazon o Mercado Libre, donde los usuarios son guiados con ventanas emergentes claras y estéticamente alineadas con el diseño.
Primero se utilizó confirm() pero decidimos escalarlo a una interfaz más profesional. Luego se probó la activación del modal y los distintos escenarios (clic en sí, no, fuera del modal). Se optimizó para que sea fácil de implementar en otros componentes del sitio con una estructura reutilizable.
