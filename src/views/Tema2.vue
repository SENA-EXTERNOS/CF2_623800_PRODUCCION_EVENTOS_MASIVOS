<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ficha técnica de un evento

    .row.justify-content-center
      .bloque-texto-b2.color-acento-contenido.p-4
        .bloque-texto-b2__texto
          p Es un documento informativo que se utiliza como su nombre lo indica para detallar características básicas y técnicas del evento, dando a conocer los aspectos que lo conforman basados en el objetivo. Esta ficha le da identidad al evento. Tenemos que recordar que de acuerdo con la tipología del evento o su naturaleza es como vamos a crear esta ficha técnica.

    .row.justify-content-center
      p Algunos de los ítems que se deben tener en cuenta al momento de construir la ficha técnica del evento son:

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-left")
        .tarjeta.tarjeta--gris2
          .row.justify-content-center
            .col-lg-10.p-3
              ImagenInfograficaB
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/tema2/punto-caliente.svg', alt='Texto que describa la imagen')

                div(x="6%" y="27%" tooltip="1" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img1.png',)
                    .col-8.col-lg-8
                      p #[strong Nombre o título del evento:] Es importante que cada evento sea identificado o diferenciado con un nombre o título.

                div(x="6%" y="32.2%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img2.png',)
                    .col-8.col-lg-8
                      p #[strong Tipo de evento:] Se define si el evento es una feria, congreso, exposición, seminario, simposio, entre otros.

                div(x="6%" y="38.7%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img3.png',)
                    .col-8.col-lg-8
                      p #[strong Objetivo del evento:] Se debe definir porque se va a realizar el evento.

                div(x="6%" y="45.1%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img4.png',)
                    .col-8.col-lg-8
                      p #[strong Fecha y hora del evento:] Se define para que los invitados y asistentes tengan claro cuándo se llevará a cabo.

                div(x="6%" y="50.1%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img5.png',)
                    .col-8.col-lg-8
                      p #[strong Lugar del evento:] se define para que los invitados y asistentes puedan llegar a donde se desarrollara.

                div(x="6%" y="55.1%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img6.png',)
                    .col-8.col-lg-8
                      p #[strong Responsable del evento:] se presenta al organizador de evento.

                div(x="6%" y="59.6%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img7.png',)
                    .col-8.col-lg-8
                      p #[strong Duración del evento:] Se define el tiempo que durará el evento.

                div(x="6%" y="65.1%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img8.png',)
                    .col-8.col-lg-8
                      p #[strong Invitados:] Se listan quienes serán los invitados del evento.

                div(x="6%" y="72.5%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img9.png',)
                    .col-8.col-lg-8
                      p #[strong Descripción del evento:] Se hace una presentación del evento.

                div(x="6%" y="83%" tooltip="" numero="")
                  .row.justify-content-center.mt-5
                    .col-4.col-lg-1
                      figure
                        img(src='@/assets/curso/temas/tema2/img10.png',)
                    .col-8.col-lg-8
                      p #[strong Orden del día:] Se da a conocer la agenda que se llevará a cabo en el evento.

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-lg-4(data-aos="fade-up-right")
            figure
              img(src='@/assets/curso/temas/tema2/img11.png',)        
          
          .col-lg-8(data-aos="fade-up-left")
            .cajon.color-acento-contenido.p-4
              p Se puede presentar que la empresa organizadora no sea la misma que desarrolla el evento, así que la ficha técnica debe presentarse en papel membretado donde cuente tanto con el logo de la empresa organizadora, como el logo de la empresa del responsable del evento, esto facilitará y ayudará a que el evento tenga mayor credibilidad para invitados y asistentes. 
              Br
              Br
              p También es importante tener en cuenta que si el evento cuenta con patrocinadores, estos deben ser mencionados en la ficha técnica. 

    .row.justify-content-center.my-5
      .col-lg-10
        p Podemos citar como ejemplo un evento empresarial de capacitación donde la ficha técnica va a decirnos su objetivo, fecha y horas del evento desde que inicia hasta que termina, número de participantes, perfil de los conferencistas e invitados especiales, orden del día, elementos de apoyo para la capacitación y conferencias, entre otros #[i ítems], que estos se definen de acuerdo con la tipología del evento.

    .row.justify-content-around.align-items-centerrd.mt-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-lg-2
              img(src="@/assets/curso/temas/tema2/img12.png").img12-tm2
            .col-9.col-lg-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 1
                  p Ejemplos de fichas técnicas para eventos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema2',
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
