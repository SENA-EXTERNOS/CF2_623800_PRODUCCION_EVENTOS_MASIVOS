<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fases y producción del evento

    .row.justify-content-center
      .col-lg-7(data-aos="fade-up-right")
        p Los eventos se van construyendo como todo proyecto con diferentes fases o etapas, en su fase de análisis, se concentra en recolectar información; en la fase de planeación se abre el espectro del evento dependiendo de su objetivo y se empieza a revisar el detalle de cada uno de sus componentes, con base en la magnitud del mismo para luego ejecutarlo con la mayor exactitud, sorteando lo que haya fallado en su planeación,  lo cual se revisa en esa fase de evaluación para hacer las mejoras pertinentes. 
        p Es importante que se tenga en cuenta cada fase que conforma el evento y ninguna se pase por alto, pues de estas depende el éxito de este. Producir un evento es algo exigible, requiere de una previa preparación en áreas como relaciones públicas, gestión, protocolo, #[i marketing], administración, diseño, logística, manejo de cliente y recurso humano, conocimientos de contratación, entre otros.

      .col-lg-5(data-aos="fade-up-left")
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")

    .row.my-5
      p A continuación, se relacionan las fases de un evento:

    .row.my-5(data-aos="flip-left")
      .tarjeta.tarjeta--blanca.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-lg-8
              h4 Preproducción
              p En esa primera fase de análisis encontramos #[strong la preproducción], donde se revisan los aspectos básicos, situaciones puntuales que se van a llevar a cabo en el evento.  En muchas ocasiones se realiza un prediseño o #[em briefing] como esquema general del evento para detectar aquellos puntos neurálgicos o específicos que son la clave en el desarrollo de este.
              p Cuando nos referimos a aspectos básicos estamos hablando, por ejemplo, de ver el escenario o lugar y todas sus condiciones en detalle, esto en el caso de ser un evento presencial, en los eventos digitales se debe revisar la plataforma por la cual se va a desarrollar el evento, sus condiciones, capacidad y posibilidades tecnológicas. 
              p Al hablar de situaciones puntuales tenemos que determinar acciones de seguridad, revisar esas variables no controlables como son las naturales, en caso de un evento presencial y en un evento digital, imprevistos que se puedan presentar tecnológicamente, estudiar estrategias, actividades, resultados esperados, cronograma y presupuesto disponible.

            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")

          .row
            .col-lg-8
              h4 Producción 
              p La fase de planeación se enfoca en #[strong la producción del evento], se empieza a revisar toda su logística o movimiento, cada detalle que lo conforma y que hacen que se cree una identidad del mismo. 
              p En esta fase de producción o planeación, el organizador del evento juega un papel de coordinador, supervisor, controla todos los aspectos del evento y sus imprevistos. 
              p El coordinador está a cargo del equipo técnico y humano que está en el lugar o escenario, quienes con roles muy determinados son responsables de cada detalle del evento. Es necesario mencionar que el coordinador o el organizador del evento está al frente del mismo, desde el montaje hasta el desmontaje y sortea todos los imprevistos.
              p Por esto, contar con todos los profesionales que exija el evento, evita la incertidumbre durante la ejecución y ofrece la confianza y seguridad al cliente, de que todos sus requerimientos se cumplirán con excelencia, buscando siempre un equilibrio entre esta y las decisiones que se deben tomar a última hora. Es importante reconocer un límite en esta toma de decisiones para evitar que el evento se caiga.


            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img3.png", alt="alt")

          .row
            .col-lg-8
              h4 Postproducción 
              p En la fase de #[b postproducción], se entra a un proceso detallado de evaluación sobre todo lo que aconteció dentro del desarrollo del evento, que haya aportado a su éxito o que haya generado incertidumbre en su momento. 
              p Evaluar un evento permite no solo realizar acciones de mejora, sino determinar cuáles son los puntos frágiles que se deben fortalecer, ya sea en talento humano, los aspectos técnicos o logísticos que se evidenciaron y que deberán corregirse para próximos compromisos. El impacto de un evento es uno de los factores más relevantes dentro de la fase de postproducción o evaluación de este, debido a que este es el indicador del cumplimento del objetivo propuesto. 
              p No es menos relevante el informe final que se brinda al cliente, donde se da a conocer que se cumplió con todo lo planeado en forma precisa. Los indicadores de calidad del evento deben marcarse desde su producción y serán los que permitan medir su alcance.
              p Es importante que en el cierre de un evento se tenga en cuenta los agradecimientos tanto a quienes intervinieron, como a la audiencia, puesto que esto permite incentivar la asistencia para próximos eventos. Pareciera lógico, pero se puede presentar que a veces estos agradecimientos no se den, adicionalmente en esta fase es cuando se da el paso a las memorias del evento o hacer un buen resumen en redes sociales.

            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema1/img4.png", alt="alt")

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-morado.p-3.p-sm-4.p-md-5(data-aos="flip-up")
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img5.png')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p Ahora se concentrará en la fase de producción de eventos, la cual consiste en coordinar los equipos técnicos y humanos para que se ejecute el evento, en el lugar y tiempo preciso. Es necesario hablar de varios tipos de producción: una general, la técnica, artística y logística.

    .row.my-5
      p Diferentes tipos de producción y sus características: 

    .row.justify-content-center.my-5    
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
        .row(titulo="Producción general ")
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema1/img6.png", alt="alt")

          .col-lg-9
            p Como lo dice su nombre, abarca todo el aspecto general del evento, dándole una base para su desarrollo, por esto el determinar el objetivo, definir un comité organizador, señalar fechas, contar el número de invitados, escoger el lugar, realizar un cronograma y realizar la estimación de recursos son parte de las funciones que desarrolla este productor general, que también se puede denominar como organizador del evento. 
            p En muchas ocasiones el organizador o productor general está al frente de todo el evento, pero en otras delega de acuerdo con los profesionales especializados con quienes cuenta en su comité organizador. 
            p En la determinación del #[strong objetivo] es necesario tener presente indicadores cuantitativos, que permitan la evaluación del evento valorando su viabilidad y rentabilidad. Todo objetivo debe establecerse en una visión definiendo metas a alcanzar, es necesario tener presente que el planteamiento del objetivo debe ser sin involucrar ideas u opiniones, a razón de esto el objetivo debe contar con un verbo que denota acción y el impacto que se quiere lograr con dicha acción. 
            p Cuando se habla de un #[strong comité organizador], se relaciona son personas, preferiblemente profesionales que puedan apoyar las diferentes actividades propuestas en el evento y que cuenten con un perfil de liderazgo y alta responsabilidad, sus funciones están en participar activamente de la planeación, ejecución y evaluación del evento, creando la ficha técnica del mismo, el cronograma o flujograma dependiendo la naturaleza del evento. 
            p El #[strong escoger un lugar] apropiado para el evento varía de acuerdo con la tipología o naturaleza de este, sin embargo, debe hacerse con base en unos parámetros preestablecidos por el comité organizador, es importante realizar varias visitas al lugar y revisar las instalaciones eléctricas, las rutas de evacuación y todas las condiciones que exige el evento, para ello es necesario una lista de chequeo muy bien detallada de las exigencias de la actividad a realizar para que no afecte el objetivo del mismo. 
            p El productor general es el encargado de #[strong realizar el cronograma] midiendo tiempos y movimientos para que lo planeado sea desarrollado en forma puntual. En este cronograma se detalla cada actividad, responsable y tiempos de ejecución, este instrumento también ayuda a la evaluación del evento. 
            p En cuanto a #[strong la estimación de los recursos] se debe contar con una base de inversión inicial y realizar un presupuesto de acuerdo con las exigencias del cliente sin desconocer que existe un porcentaje de ganancia y que toda negociación bien realizada se basa en gana – gana, esto quiere decir que todo es beneficio común.
        
        .row(titulo="Producción técnica")
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema1/img7.png", alt="alt")

          .col-lg-9
            p Esta producción se especializa en la parte técnica del evento en especial de espectáculos, los cuales exigen tener muy claras las condiciones de este, ya sea festival, concierto, entre otros. 
            p Las funciones de la producción técnica, se basan en contar con una lista de proveedores en esta área ya sea de sonido, de iluminación e instrumentales que se requieran, exige ser especialista en sonido, iluminación, instalaciones. Esto significa reconocer en cada fase del evento las necesidades técnicas que se tengan, estar atentos a eventualidades y con planes de contingencia que hagan que se logre con éxito el evento. 
            p Es exigible realizar #[strong #[i rider] técnico] en caso de eventos como conciertos donde se determina banda y equipo técnico, contacto con responsables, requerimiento mínimo en potencia y número de monitores, de igual forma si es un festival la función del productor técnico es realizar el #[strong #[i stage plot]], que es la distribución en el escenario de los miembros de la banda y cada equipo a utilizar, para ello se debe realizar un mapa que permita definir en forma clara los espacios en el escenario de tal forma que si se presentan cambios sean manejables.
            p Para cumplir a cabalidad con la producción técnica es necesario conocer el #[strong #[i backline]] que es todo aquel equipo electrónico de amplificación de audio que se coloca detrás de una banda o agrupación sobre un escenario, estudio de grabación o sala de ensayo para poder hacer un #[em show]. Junto con esto diferenciar #[strong los tipos de sonido] los cuales pueden ser de alta frecuencia, frecuencia media y baja frecuencia, dependiendo del #[strong espacio si es cerrado] y del tamaño de la sala, se puede emitir un sonido directo que se concentra en la sala como energía sonora, este fenómeno se conoce como reverberación, el sonido en espacios cerrados se emite dependiendo de las paredes, las cuales absorben poca o mucha energía, por ejemplo: las de concreto absorben poca energía.
            p En #[strong espacios abiertos] el sonido es más intenso y no tiene obstáculos en su propagación y permite una amplitud sonora favorable y una intensidad sonora propagando el sonido en forma esférica transformando la energía propagándola y repartiéndola sin que se pierda.
            p #[strong La iluminación para escenarios] es otro aspecto de las funciones de la producción técnica, en este caso reconocer la variedad de iluminación dependiendo del evento y del escenario, por ejemplo, en las obras de teatro se hace una iluminación frontal, iluminación cenital, iluminación de contra, iluminación de fondo, iluminación de efectos, aunque se utilice estas iluminaciones en teatro solo existen dos tipos de iluminación en espectáculos que son la general y puntual. La general utiliza lámparas de techo y la focal o puntual, que apunta a un lugar en específico donde se encuentra el centro de atención del evento.

        .row(titulo="Producción logística")
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/tema1/img8.png", alt="alt")

          .col-lg-9
            p Esta es la producción que optimiza los procesos de almacenamiento y traslado de materiales y equipos de apoyo para realización del evento, también se encarga de brindar apoyo en la planeación y ejecución del evento buscando un engranaje perfecto del mismo.
            p Dentro de las funciones de un productor logístico, está el manejo del almacenamiento, donde se mueven grandes cantidades de materiales y se tiene un control del #[em stock], es fundamental conocer la trazabilidad de todos los materiales, no solo en su cantidad sino en su condición óptima para utilización dentro del evento, realizando sustituciones si son necesarias en un tiempo adecuado antes de su uso.
            p Otra de las funciones es el transporte de estos elementos, el cual se debe planear con mucho detalle para que todo esté en el lugar del evento en el tiempo establecido, se puede utilizar transporte aéreo, terrestre o marítimo, dependiendo del lugar del evento, lo importante es prever tiempos y forma de almacenamiento y embalaje de los elementos garantizando que lleguen en buen estado. Para que la logística del transporte se realice con éxito es necesario utilizar un cronograma detallado haciendo un cálculo de los tiempos.
            p También es una función el transporte de las personas, su alojamiento, teniendo en cuenta que debe quedar cerca de la realización del evento para evitar transportes adicionales. En la gestión de traslado de las personas se debe contar con una base de datos clara que permita conocer su lugar de origen y los diferentes medios de transporte que podría usarse en su desplazamiento considerando el tiempo, los costos y las condiciones óptimas para las personas, ya sean artistas, invitados o personajes centrales del evento.
            p El hospedaje de los artistas como de los personajes centrales del evento debe estar ubicado cerca del sitio o lugar donde se realizará el mismo, debe ser acordado en sus condiciones con base en las necesidades planteadas por los artistas o invitados especiales de tal forma que se sientan a gusto para desarrollar de la misma forma su participación o actuación en el espectáculo.
            p Un aspecto importante dentro de las funciones de la producción logística es conocer #[strong las relaciones interinstitucionales] las cuales permiten a las empresas conocer las cuestiones legislativas, políticas, reglamentarias o administrativas que les afectan directamente o a sus intereses, esto si se trata de un evento empresarial público o privado. El conocer los reglamentos o políticas de la empresa en su participación de eventos permite determinar si se exigen #[strong permisos] específicos que se deban diligenciar antes o durante el evento.
            p Existen eventos como festivales musicales, en los cuales se utilizan los #[strong camerinos], esto ha exigido a la producción logística tener la experticia en el traslado y montaje de estos, exigiendo tomar medidas de seguridad y estabilidad de la estructura.
            p La seguridad como el aseo del lugar del espectáculo son otras de las funciones que ejerce este equipo logístico, dependiendo del escenario o sitio del evento deben revisar todos los aspectos necesarios para la seguridad en la ejecución de este, apoyarse con las entidades locales de prevención y atención de desastres, secretaría de salud, policía nacional en caso de ser un evento masivo, festivales, conciertos, ferias, manifestaciones, entre otros.
            p Existen series de herramientas que ayudan a la ejecución y evaluación del evento y que son realizados desde la planeación de este, entre ellos tenemos la ficha técnica del evento, un plan de trabajo del evento, organigrama, flujograma y cronograma que se verá dentro del desarrollo de este componente, se conocerá su importancia, diseño y aplicación dentro de la organización de un evento.

    .row.justify-content-center.my-5(data-aos="flip-down")
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando la naturaleza y características del evento requieran de shows o muestras artísticas, se deberá tener en cuenta, además de las anteriores, la producción artística. Esta se enfoca en materializar el evento con una motivación social y cultural utilizando elementos como color, sonido, armonía, ritmo, movimiento, estos elementos diferencian una versión artística de otra. Cada producción artística es fuente de conocimiento y placer estético, mejora la sensibilidad y favorece las relaciones sociales.

    .row.my-5
      p Entre los cargos que se encuentran en esta producción artística están:

    .row.justify-content-center.my-5
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="56%" y="8%" numero="1")
          h3.text-center Auxiliar de producción 
          p Encargado de resolver situaciones imprevistas y planificar para bajar costos.

        .tarjeta.color-acento-botones.p-3(x="25%" y="4%" numero="2")
          h3.text-center Regidor 
          p Quien se encarga de controlar las entradas y salidas del escenario, que se cumplan los tiempos establecidos, el responsable directo del espectáculo después que comienza.

        .tarjeta.color-acento-botones.p-3(x="53%" y="75%" numero="3")
          h3.text-center Secretario de producción 
          p Se encarga de tramitar viajes de los artistas y el equipo técnico.

        .tarjeta.color-acento-botones.p-3(x="77%" y="60%" numero="4")
          h3.text-center Traductor 
          p Esta figura se hace imprescindible cuando se realizan eventos a nivel internacional, asiste a músicos, personajes, presentadores y sin límite de perfiles que tenga que apoyar para que el evento fluya.

        .tarjeta.color-acento-botones.p-3(x="79%" y="10%" numero="5")
          h3.text-center Planchador y costurero
          p Se encarga de revisar los vestidos de los artistas, coser, planchar y revisar que todo lo relacionado en vestuario esté en perfecta condición.

        .tarjeta.color-acento-botones.p-3(x="41%" y="6%" numero="6")
          h3.text-center Asistente de vestuario
          p Es quien está al frente de los cambios de vestuario durante el espectáculo, maneja tiempo muy limitados para su función y debe ser muy atento.

        .tarjeta.color-acento-botones.p-3(x="32%" y="76%" numero="7")
          h3.text-center Acompañante y asistente  
          p Como lo dice su cargo acompaña y asiste a los personajes centrales del evento.

    .row.justify-content-center.my-5
      .col-lg-9
        .bloque-texto-b1.color-acento-contenido.p-4
          .bloque-texto-b1__texto
            p Los formatos que utiliza una producción artística varían de acuerdo con el evento, pues puede ser digital o híbrido y en ese caso se utilizan formatos que corresponde con una extensión específica del archivo que lo contiene. Los más utilizados en la actualidad son: BMP, GIF, JPG, TIF y PNG.
            br
            p Existe un formato como ejemplo, lo invitamos a revisarlo en los materiales de apoyo, este se titula #[em “Formato para la presentación de proyectos de creación en artes y formas asimilables de producción de conocimiento”].
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')        








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
