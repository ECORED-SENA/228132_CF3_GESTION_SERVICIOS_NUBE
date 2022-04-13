<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-02
      .row.mb-3
        .col-12.col-md-6.col-lg-6(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/sintesis/s-1.png', alt='1-7')
        .col-12-col-md-6.col-lg-6.mtop
          div.p-2.p-md-3.bgr_1
            p.m-0 La arquitectura de la nube, tiene algunas especificaciones técnicas que debe tener sé en cuenta cuando se van a llevar a cabo procesos de gestión en <em>cloud.</em>
          .row.mt-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/template/puntos1.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/template/puntos2.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold En algunos casos la estructura lógica y física posibilitará un mejor y mayor desarrollo de la gestión, sin embargo, es necesario tener en cuenta las características propias del dominio, la seguridad con que deben establecerse las cuentas, que permiten generar relaciones de confianza para el usuario y el administrador.
      
            .bgr_5.p-4.mb-4(data-aos="zoom-in-up")
              p.m-0 Por otra parte, el recurso del Docker, como contenedor, es de fácil manejo y servicio, posibilitando un mejor almacenamiento de información, todo esto enmarcado en las guías que ha facilitado Min Tic para el desarrollo tecnológico.
    p Un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
