<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img.d-none.d-lg-flex(src='@/assets/curso/portada/intro.png', alt='introducción')
      img.d-flex.d-lg-none(src='@/assets/curso/portada/intro2.png', alt='introducción')
      .row.justify-center
        .col-11
          .bgr
            p.m-0.p-4 Le damos la bienvenida al componente formativo “Diseño y documentación de propuesta para servicios en la nube”. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se muestra a continuación:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/p2URc4zjtSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
