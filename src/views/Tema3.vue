<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de trabajo de un evento

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/img1.png", alt="alt").img1-t3
            .col.tex-left
              p.my-3 Este es un instrumento fundamental que da en detalle cada aspecto del evento, se utiliza para realizar un estudio minucioso de cada actividad y su ejecución, permitiendo que se puedan realizar cambios en caso dado, la planeación se realiza como la gestión del proyecto donde cada fase preproducción, producción y postproducción sean vistas teniendo en cuenta todo tipo de consideración con base en el objetivo del evento.
         
    .row-my-5
      p Dentro del plan de trabajo se plantean uno o varios objetivos dependiendo del evento, su magnitud e importancia, se revisan los recursos tanto financieros como físicos, las personas implicadas, el calendario, teniendo en cuenta que se va a desarrollar en forma progresiva y que los tiempos marcan algunos movimientos o actividades específicas a gestionar, es indispensable tener presente el análisis DAFO que se aplica en este plan debido a que este ayuda a revisar aspectos relevantes o factores críticos que pueden entorpecer o lograr el éxito de lo propuesto y que a veces conlleva a crear estrategias o un plan B que nunca sobra en la organización de un evento.
      p Existen tres factores fundamentales para el desarrollo de un plan de trabajo en un evento:

    .row.justify-content-center.my-5
      .col-10.col-lg-3.my-3
        .tarjeta--morada2.p-4(data-aos="flip-left")
          .row.justify-content-center
            .col-6.col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img2.png", alt="alt")
            .col-auto.my-4
              h4.text-center Las acciones:
              p.text-center Tareas por desarrollar.

      .col-10.col-lg-3.my-3
        .tarjeta--morada2.p-4(data-aos="flip-down")
          .row.justify-content-center
            .col-6.col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")
            .col-auto.my-4
              h4.text-center El tiempo:
              p.text-center Tiempo para la realización de cada tarea.  

      .col-10.col-lg-3.my-3
        .tarjeta--morada2.p-4(data-aos="flip-right")
          .row.justify-content-center
            .col-6.col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img4.png", alt="alt")
            .col-auto.my-4
              h4.text-center Los canales:
              p.text-center Donde se van a llevar a cabo las tareas.  

    .row.justify-content-center.my-5
      .col-lg-9
        .row.justify-content-center.my-3
          .col-4.col-lg-2(data-aos="zoom-in-down")
            figure
              img(src="@/assets/curso/temas/tema3/img5.png", alt="alt")        
          .col-lg-10
            p La importancia de realizar un plan de trabajo, es que sistematiza los procesos, optimiza los tiempos, divide las tareas, elabora estrategias y se consolida un equipo de trabajo con perfiles profesionales. Para que este plan cumpla adecuadamente su función debe arrancar conociendo el tipo o naturaleza del evento a realizar y su objetivo u objetivos en caso dado, este plan se nutre de la ficha técnica y del cronograma que se haya realizado en la fase de planeación. A continuación se conocerán algunos de los componentes que se tienen en un plan de trabajo.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Organigrama

    .row.justify-content-center.my-5(data-aos="flip-up")
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img6.png')})`}")
        .bloque-texto-g2__texto.p-4
          p.mb-0 Teniendo como base que un organigrama es donde se define el orden jerárquico de una organización, en este caso, es el orden jerárquico del comité organizador del evento teniendo como base que existen a nivel general los siguientes cargos:  Coordinador general, comité financiero, comité logístico, comité de relaciones, comité de medios, sin embargo, este organigrama puede cambiar dependiendo del evento.

    .row.my-5
      p Existen varios tipos de organigramas que se pueden aplicar a los eventos, tal como se muestra a continuación:

    .row.my-5
      .tarjeta.tarjeta--blanca.slyderA_bg_01.p-5(data-aos="zoom-out")
        SlyderA(tipo="b")
          .row
            .col-lg-6
              p El vertical que es en forma de pirámide y muestra un orden jerárquico preestablecido.

            .col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img7.png", alt="alt")

          .row
            .col-lg-6
              p El horizontal que solo muestra un nivel de organización sin tener altos mandos.

            .col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img7-2.png", alt="alt")

          .row
            .col-lg-6
              p El mixto combina funciones de alto nivel de responsabilidad y bajos niveles de responsabilidad. 

            .col-lg-6
              figure
                img(src="@/assets/curso/temas/tema3/img7-3.png", alt="alt")

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-acento-contenido.p-3
          p Es necesario tener presente que existen algunos componentes en común dentro de un organigrama, como son: niveles altos de la organización o comité organizador, los subcomités, los recursos de apoyo, el comité de control y la evaluación. 
          p El organigrama se puede elaborar teniendo como base los tipos existentes y de acuerdo con la necesidad de cada evento.
      .col-6.col-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/img8.png", alt="alt")

    .row.my-5
      p A continuación, se visualizan algunos de los que pueden llegar a conformar el organigrama del evento y las funciones que tienen a cargo:  

    .row.justify-content-center.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.carrusel-morado.color-acento-botones.p-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/tema3/img9.png' alt='AvatarTop')
          h3.text-center.mt-5 Coordinador del evento: 
          p.text-center Es el encargado de dirigir a todo el equipo encargado del desarrollo del evento y verificar que todo lo que se ha planeado y organizado se lleve a cabo de una manera satisfactoria.

        .tarjeta.carrusel-morado.color-acento-botones.p-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/tema3/img10.png' alt='AvatarTop')
          h3.text-center.mt-5 Comité financiero: 
          p.text-center Es el responsable de elaborar el presupuesto general del evento, teniendo claro cada uno de los rubros de gastos e inversión para llevar a cabo el evento, también identifica o busca cómo financiar el evento.

        .tarjeta.carrusel-morado.color-acento-botones.p-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/tema3/img11.png' alt='AvatarTop')
          h3.text-center.mt-5 Comité administrativo:  
          p.text-center Están delegados para administrar los recursos financieros, físicos, humanos necesarios para la buena ejecución del evento, tiene a cargo todo el apoyo logístico que se requiera para el éxito del evento.

        .tarjeta.carrusel-morado.color-acento-botones.p-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')
          h3.text-center Comité de relacionas públicas: 
          p.text-center Son los responsables de la imagen del evento, estableciendo estrategias para la publicidad, divulgación, promoción, del evento identificando los mejores medios para dar a conocer el evento, también son los encargados de identificar los invitados y asistentes al evento, llevar el registro de asistencia, entrega de memorias del evento si son necesarias.

        .tarjeta.carrusel-morado.color-acento-botones.p-3
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/tema3/img13.png' alt='AvatarTop')
          h3.text-center.mt-5 Comité de logística: 
          p.text-center Tienen a su cargo toda la gestión del lugar donde se desarrollará el evento, montaje y desmontaje del escenario, decoración, luces, sonido, distribución del espacio para que todos los invitados y asistentes se sientan a gusto.

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-g.color-morado.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img14.png')})`}"
          )
          .bloque-texto-g__texto.p-3
            p En el material complementario encontrará el tema: Plan de trabajo de un evento - Organigrama, por favor visite el enlace y complemente este tema con la información que allí se relaciona. 

    separador

    #t_3_2
    
    .titulo-segundo.color-acento-contenido
      h2 3.2 Flujograma

    .row.my-5
      .col-lg-10
        .bloque-texto-b3.color-acento-contenido.p-4
          .bloque-texto-b3__texto
            p El flujograma o diagrama de flujo de un evento es una herramienta que describe la secuencia de las actividades relacionando cada una de ellas, desde el comienzo del proceso, los puntos de decisión y el final. Su elaboración es importante porque lleva a definir en forma clara y precisa aspectos relevantes de los eventos y momentos críticos del mismo, permite ordenar las actividades eligiendo símbolos que conectan una con otra dando una secuencia lógica al desarrollo de la actividad o evento.
            br
            p Existen variedades de símbolos que conforman el flujograma, como lo son: 
      .col-lg-2
        img(src='@/assets/curso/temas/tema3/img15.png' alt='AvatarTop').img15-tm3

    .row.justify-content-center.my-5
      TabsC.color-primario
        .py-3.py-md-4(titulo="Símbolo de inicio y final").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img16.png', alt='Texto que describa la imagen')
            .col-md-6
              p.mt-5 El óvalo representa el inicio o el final de un proceso.

        .py-3.py-md-4(titulo="Símbolo de proceso/actividad").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
            .col-md-6
              p.mt-5 El rectángulo representa un paso del proceso.

        .py-3.py-md-4(titulo="Las líneas y flechas ").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img18.png', alt='Texto que describa la imagen')
            .col-md-6
              p.mt-5 Muestran la secuencia de los pasos y las relaciones entre ellos. 

        .py-3.py-md-4(titulo="Rombo ").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Texto que describa la imagen')
            .col-md-6
              p.mt-5 Permite generar una pregunta donde se debe, para tomar una decisión.

    .row.justify-content-center.my-5
      p Existen diferentes tipos de flujogramas, a continuación, se explicarán los que pueden ser de mayor utilidad para la organización de eventos:

    .row.justify-content-center.my-5
      .col-lg-7.my-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img20.svg', alt='Texto que describa la imagen') 
      .col-lg-5  
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          .row(titulo="Vertical")
            p Va de arriba hacia abajo, como una lista ordenada.

          .row(titulo="Horizontal")
            p Va de izquierda a derecha, según el orden de la lectura. 

          .row(titulo="Panorámico")
            p Combina los tipos horizontal y vertical y en un solo plano se visualiza la totalidad de las actividades o acciones de un proceso.

          .row(titulo="Arquitectónico")
            p Representa el proceso de diseño, modificación o construcción de un espacio.

    .row.my-5
      p Para ampliar su conocimiento al respecto, por favor consultar en el material complementario el tema:  Plan de trabajo de un evento - Flujograma.

    separador

    #t_3_3
    
    .titulo-segundo.color-acento-contenido
      h2 3.3 Cronograma

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-up")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img22.png')})`}"
          )
          .bloque-texto-g__texto.p-3
            p El nombre cronograma viene de griego #[i krónos], “tiempo”, y #[i grámma], “letra”, es una representación gráfica, ordenada y esquemática de eventos, generalmente venideros. Esta es una herramienta muy útil para realizar el seguimiento de cada tarea o actividad en forma cronológica, con un responsable a cargo de desarrollarla.
            br
            br
            p Es importante mencionar que existen dos diagramas que también apoyan la labor de la organización de un evento como son el de #[i Gantt] y el de #[i Pert].
    
    p A continuación, se muestran las características del cronograma y los diagramas de #[i Gantt] y de #[i Pert]: 

    .row.justify-content-center.my-5
      TabsC.color-primario
        .py-3.py-md-4(titulo="Cronograma").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img23.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Esta es una herramienta muy útil para realizar el seguimiento de cada tarea o actividad en forma cronológica, con un responsable a cargo de desarrollarla.
              p Dentro de los tipos de cronogramas que se encuentran para organización de eventos vamos a destacar tres de investigación, de trabajo y de hitos. El más utilizado en la organización de un evento es el de trabajo el cual marca los tiempos y movimientos. 
              p Cuando nos referimos a tiempos y movimientos estamos hablando de una herramienta que sirve para determinar los tiempos estándar de cada una de las tareas que componen cualquier proceso, como también para analizar los movimientos que son realizados por parte de un miembro de la organización del evento para realizar la operación.

        .py-3.py-md-4(titulo="El Diagrama de <i>Gantt</i>").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Es una herramienta en la que se proyecta la planificación de una actividad o en este caso de un evento. Cuenta con dos secciones: en la parte izquierda se incluye una lista de tareas y, en la derecha, un cronograma con barras que representan el trabajo, también puede incluir las fechas de inicio y de finalización de las tareas.
              p Algunas de las ventajas de elaborar el diagrama de #[i Gantt] para los eventos:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check
                  |  Son una hoja de ruta ayuda a los equipos a mantener una estrategia coherente en los eventos.
                li 
                  i.fas.fa-check
                  |  Se puede visualizar las fechas de inicio y finalización de cada actividad, para un mayor cumplimiento, seguimiento y control de las actividades establecidas.
                li 
                  i.fas.fa-check
                  |  Se visualiza los responsables para que todo el equipo o comité este coordinado. 
              
              p Para desarrollar un diagrama de #[i Gantt] se debe tener en cuenta:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check
                  | Definir fechas de inicio y finalización de acuerdo con la planeación del evento, donde se define la línea de tiempo de ejecución del evento teniendo en cuenta todas las fases del evento.
                li 
                  i.fas.fa-check
                  |  Precisar las actividades estableciendo fecha de inicio y finalización de cada actividad.
                li 
                  i.fas.fa-check
                  |  Establecer los responsables teniendo en cuenta el comité de eventos y las actividades a desarrollar.
        
        .py-3.py-md-4(titulo="El Diagrama de <i>Pert</i>").tarjeta--morada3.texto-blanco
          .row.p-5
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img25.png', alt='Texto que describa la imagen')
            .col-lg-8
              p Es una herramienta que se usa como técnica de revisión y evaluación de programas, tiene como objetivo programar, planificar y controlar proyectos de gran envergadura que, debido al gran número de actividades, que forman parte de este, necesitan una coordinación efectiva. 
              p #[i Pert] significa (#[i Program Evaluation and Review Technique] – Técnica de revisión y evaluación de programas), donde se desglosan de manera individual las actividades. Los pasos para tener en cuenta para la creación de un diagrama #[i Pert] son:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check
                  | Identificar las actividades a desarrollar.
                li 
                  i.fas.fa-check
                  | Establecer los responsables que tendrán a cargo el desarrollo de la actividad.
                li 
                  i.fas.fa-check
                  | Vincular las actividades entre sí, esto se realiza teniendo como referencia la figura geométrica circular que representa los nodos y las flechas pueden representar los responsables para llevar a cabo la actividad.
                li 
                  i.fas.fa-check
                  | Definir los tiempos de cada actividad estableciendo tres tipos de tiempos: el tiempo mínimo, el tiempo máximo y el tiempo estimado o preciso para realizar la actividad.

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-right")
        .bloque-texto-g.color-morado.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.png')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p Le invitamos a visitar los temas:   Plan de trabajo – cronograma, y Plantillas para planificación de eventos, los cuales se encuentran en el material complementario, ya que le serán de gran utilidad.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
