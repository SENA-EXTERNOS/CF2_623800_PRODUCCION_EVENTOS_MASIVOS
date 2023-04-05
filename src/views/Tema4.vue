<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Divulgación y comunicaciones


    .row.justify-content-center.my-5
      .bloque-texto-b4.color-acento-contenido.p-4
        .bloque-texto-b4__texto
          p Teniendo en cuenta que los eventos son fundamentalmente comunicativos, la divulgación es una actividad que se debe realizar desde el momento que el evento se tiene en la fase de planeación. Ya habiendo determinado el tipo de evento, su objetivo, la fecha y el lugar, se inicia una campaña publicitaria de expectativa en los medios de comunicación buscando llegar a aquellos que son el público objetivo, para luego establecer una campaña permanente, muy cerca a la fecha de realización del evento.
          br
          p A continuación, lo invitamos a profundizar sobre la temática divulgación de los eventos a través del siguiente video: 

    .row.my-5(data-aos="zoom-in")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/oDgG6BSZtU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Es necesario aclarar que las piezas de comunicación que se quieran utilizar deben contar con la imagen corporativa del evento, y adaptarse dependiendo el medio en el que se vaya a publicar de tal forma que el mensaje sea asertivo y el impacto sea el mismo. Generalmente se crea un comité de medios conformado por un comunicador periodista, un diseñador y un relacionista público, quienes se encargan exclusivamente de esta tarea, como con los otros comités se establece un cronograma con base en el cronograma general del evento para ir divulgando el mismo.
  
    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-right")
        .bloque-texto-g.color-morado.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img2.png')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0  Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


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
