<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad en la nube

    .bg_grad-02
      .row.mb-3
        .col-12.col-md-5.col-lg-5(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema5/t5-1.png', alt='1-5')
        .col-12-col-md7.col-lg-7.mtop
          .tarjeta.bgr_11.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-md-2.col-lg-2
                img(src="@/assets/curso/tema5/t5-2.svg")
              .col-9
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white
                    p.text-small Para este componente es necesario para la seguridad en la nube adoptar los puntos 11, 11.1, 11.1.1, 11.1.2, 11.2, 11.3, 11.4, 11.5 de la guía 12 del modelo MSPI del ministerio TIC, “5482_G12- Seguridad en la nube, el cual puede consultar en el enlace:   
                  .col-sm-auto
                    a.boton.color-acento-botones.text-black(href="https://mintic.gov.co/gestionti/615/articles-5482_G12_Seguridad_Nube.pdf" target="_blank")
                      span Abrir enlace
                      i.fas.fa-link
          div.p-2.p-md-3.bgr_13
            p.m-0 De igual manera nos refiere a que un problema frecuente es la gestión de los datos en <em>Cloud,</em> migraciones de datos sensibles sin aprobación o informado a las áreas necesarias para ello.
          .row.mtop_3.mb-2
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/template/puntos1.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/template/puntos2.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color Además de los controles tradicionales de seguridad de los datos (como controles de acceso o cifrado), hay otros dos pasos que ayudan a gestionar la migración no autorizada de datos a servicios <em>Cloud,</em> que podrá consultarse al desplegar el siguiente recurso, veamos:
      
        .bgr_5.p-4.mb-3.mb-md-4
          p.m-0 Monitorizar la existencia de grandes movimientos internos de datos con herramientas de monitorización de actividad de bases de datos <em>(DAM - Database Activity Monitoring)</em> y de monitorización de actividad en archivos <em>(FAM - File Activity Monitoring).</em>
    
    figure.justify-center.mb-3(data-aos="zoom-in-up")
      img.img900(src='@/assets/curso/tema5/t5-3.svg', alt='5-3')
    
    .bg_grad-04.mb-5
      .row.mb-3
        .col-12-col-md-7.col-lg-7.order-2.order-md-1.mtop
          div.p-2
            p.m-0 Monitorizar la migración de datos a <em>Cloud</em> con filtros URL y herramientas <em>Data Loss Prevention.</em> En las implementaciones de <em>Cloud</em> públicas y privadas, y a través de los diferentes modelos de servicio, es importante proteger los datos en tránsito. Esto incluye:
            div.p-3
              ul.lista-ul
                li 
                  i.color_1.fas.fa-caret-right
                  | Los datos moviéndose desde la infraestructura tradicional a los proveedores.
                li 
                  i.color_1.fas.fa-caret-right
                  | Cloud, incluyendo público/privado, interior/exterior y otras combinaciones.
                li 
                  i.color_1.fas.fa-caret-right
                  | Los datos migrando entre los proveedores de Cloud.
                li 
                  i.color_1.fas.fa-caret-right
                  | Los datos moviéndose entre instancias (u otros componentes) en un Cloud determinado. Hay tres opciones. 
        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema5/t5-4.png', alt='1-4')
    
    .bg_grad-09
      .row
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema5/t5-5.svg', alt='5-5')
        .col-md-8.mb-5.mb-md-0
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Cifrado Cliente/Aplicación")
              .col-md-12.mb-4.mb-md-0
                p.m-0.text-small Los datos son cifrados en el extremo o en el servidor antes de enviarse por la red o ya están almacenados en un formato de cifrado adecuado. Esto incluye el cifrado en cliente local (basado en agente), por ejemplo, para archivos almacenados, o el cifrado integrado en aplicaciones.
            .row(numero="2" titulo="Cifrado Enlace/Red")
              .col-md-12.mb-4.mb-md-0
                p.m-0.text-small técnicas de cifrado de red estándar incluyendo SSL21, VPNs22, y SSH23. Puede ser <em>hardware</em> o <em>software.</em> Es preferible extremo a extremo, pero puede no ser viable en todas las arquitectura.
            
            .row(numero="3" titulo="Cifrado basado en Proxy")
              .col-md-12.mb-4.mb-md-0
                p.m-0.text-small los datos son transmitidos a un servidor dedicado o servidor <em>proxy,</em> el cual los cifra antes de enviarlos por la red. Es la opción escogida frecuentemente para la integración con aplicaciones <em>legacy</em> pero no es generalmente recomendable.



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
