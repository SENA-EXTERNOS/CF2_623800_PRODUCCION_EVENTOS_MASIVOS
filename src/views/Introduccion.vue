<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-7
            .cajon.color-primario.p-4
              p Estimado aprendiz, bienvenido a este componente formativo, donde abordaremos los conceptos y técnicas para el desarrollo y fortalecimiento de las habilidades y destrezas que como organizador de eventos requiere, para su adecuada planeación, desarrollo y ejecución, ya que de estas fases depende el éxito de este. En las temáticas encontrará la guía necesaria para que los eventos cuenten con una sólida estructura en su organización, divulgación y comunicación y de esta forma se alcancen los objetivos planteados. Lo invitamos a ver el siguiente video para ampliar su visión al respecto. ¡Éxitos en esta experiencia de aprendizaje!
          
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/awOoEKQlTJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
