<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contenedores
    
    .bg_grad-04.mb-5
      .row.mb-3
        .col-12-col-md-7.col-lg-7.order-2.order-md-1.mtop
          div.p-2
            p.m-0 Una vez revisadas los conceptos y características del servicio de directorio y la virtualización, nos adentramos un poco más en los modelos de virtualización a nivel de sistema operativo y adicionalmente se desarrollarán varios ejercicios que nos introducen a la plataforma Docker la cual es ampliamente utilizada por 
              span.color_1.text-bold la industria de desarrollo de 
                | #[em software.]
          .row.mt-3.mb-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/template/puntos1.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/template/puntos2.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold Al finalizar este componente formativo el aprendiz estará en la capacidad de crear imágenes de <em>docker</em>, construir y ejecutar contenedores <em>Docker</em> a partir de imágenes locales, modificar contenedores locales, transformar un contenedor editada a una imagen y compartir una imagen local en el repositorio en la nube <em>Docker Hub.</em>

        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema3/t3-1.png', alt='3-1')
    
    separador
    .bg_grad-20
      #t_3_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
          h2 3.1  Contenedores de <em>software</em>

      p.mb-5 El término de contenedores se ha vuelto muy común en la jerga actual asociada a la administración de servicios de infraestructura, pero en esencia hace referencia a un modelo de virtualización repasado en el componente anterior, específicamente la virtualización a nivel de sistema operativo.

      .row.mb-3
        .col-12.col-md-6.col-lg-6(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema3/t3-2.svg', alt='3-2')
        .col-12.col-md-6.col-lg-6
          .bloque-texto-e.bgr_12.p-5
            .bloque-texto-e__texto.position-relative.pt-5
              img.posit-10(src='@/assets/template/icon-comillas.svg', alt='icon')
              p.text-white En este modelo los contenedores no son más que máquinas virtuales aisladas entre sí, con un <em>software</em> específico que no tiene un sistema operativo propio, sino que comparte los recursos y el kernel del sistema operativo de la máquina anfitriona o host, logrando un mejor rendimiento ya que solo existe un sistema operativo encargado de la gestión de la infraestructura en la máquina anfitriona o host.
              
              div.pt-3.justify-end
                p.text-white.text-bold López (2018)
                i.color_3.fas.fa-square-full

      .bgr_5.p-4.mt-3.mb-5
        p.m-0.text-small Los contenedores encapsulan únicamente el <em>software</em> específico de la aplicación que se ejecuta dentro de él junto con las librerías de las cuales depende para su ejecución, abstrayendo el servidor en el que se va a ejecutar logrando entonces una portabilidad real ya que es posible predecir el comportamiento de un <em>software</em> cuando este se mueve desde un servidor a otro.
    
    .row.mb-5
      .col-md-7.mb-5.mb-md-0.order-2.order-md-1
        div.bgr_4.p-2.mb-3
          h4.m-0.text-white Ventajas
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Disminución de gastos: ")
            .col-md-12.mb-0.mb-md-0
              p.m-0.text-small Requieren menos recursos del sistema comparado con sistema de virtualización tradicionales.
          .row(numero="2" titulo="Mayor portabilidad")
            .col-md-12.mb-0.mb-md-0
              p.m-0.text-small Se pueden implementar fácilmente en diferentes plataformas y sistemas operativos.
          .row(numero="3" titulo="Funcionamiento coherente")
            .col-md-12.mb-0.mb-md-0
              p.m-0.text-small Siempre se ejecutan de la misma manera independientemente del lugar donde se implementen.
          .row(numero="4" titulo="Mayor eficiencia")
            .col-md-12.mb-0.mb-md-0
              p.m-0.text-small Permiten la implementación de modificaciones y/o escalamiento de funcionalidades con mayor rapidez.
          .row(numero="5" titulo="Mejor desarrollo de aplicaciones")
            .col-md-12.mb-0.mb-md-0
              p.m-0.text-small Este modelo de virtualización se alinea perfectamente con las metodologías ágiles y enfoques de DevOps de la industria actual para acelerar el proceso de construcción de <em>software.</em>
      
      .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/tema3/t3-3.png', alt='3-3')
    
    .bg_grad-10
      div.bgr_14.p-2.mb-3
        h4.m-0.text-white Mayor uso
      .row(data-aos="zoom-in-up")
        .col-12.col-md-4
          figure
            img(src='@/assets/curso/tema3/t3-4.svg', alt='3-4')
        .col-12.col-md-4
          figure
            img(src='@/assets/curso/tema3/t3-5.svg', alt='3-5')
        .col-12.col-md-4
          figure
            img(src='@/assets/curso/tema3/t3-6.svg', alt='3-6')
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 3.2  Hipervisor vs contenedores
    
    .bg_grad-02
      .row.mb-3
        .col-12.col-md-5.col-lg-5(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/tema3/t3-7.png', alt='3-7')
        .col-12-col-md-7.col-lg-7.mtop
          div.p-2.p-md-3.bgr_1
            p.m-0 Hay similitudes y diferencias entre la forma en cómo estas dos tecnologías facilitan el proceso de virtualización de aplicaciones, razón por la cual es más conveniente una u otra dependiendo del contexto particular y las necesidades establecidas por la organización. 
          .row.mt-3
            .col-2.col-md-1.col-lg-1.align-items-center
               figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/template/puntos1.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/template/puntos2.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold En ambos casos se requiere de una máquina host que contendrá la infraestructura física con todos los dispositivos y recursos necesarios, sobre los cuales se monta un sistema operativo que puede ser de cualquier tipo y luego sobre este sistema operativo se monta un software que en el caso del esquema de máquinas virtuales tradicionales será un hipervisor y en el esquema de contenedores será un gestor de contenedores.
      
      .bgr_5.p-4.mb-4(data-aos="zoom-in-up")
        p.m-0 En las máquinas virtuales para poder ejecutar una aplicación específica se requiere de librerías y códigos binarios de los cuales depende y adicionalmente requiere el montaje de un sistema operativo invitado. Así, por ejemplo, si la aplicación a ejecutar en la máquina virtual fue construida con <em>Visual Studio .Net</em> es necesario también montar en la máquina virtual el sistema operativo <em>Windows,</em> si la aplicación a ejecutar en la máquina virtual fue construida en Swift requiere entonces la instalación del sistema operativo <em>MacOS</em> y así sucesivamente en todas las máquinas virtuales se debe correr el sistema operativo completo de acuerdo con las App a utilizar. 
    
    .bloque-texto-a.bgr_15.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between 
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.m-0.text-bold En el caso de las tecnologías de contenedores, estos se construyen exclusivamente con las aplicaciones, librerías y archivos binarios a ser utilizados, y compartirán recursos con el sistema operativo anfitrión o máquina <em>host.</em>
    
    #t_3_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 3.3  <em>Docker</em>
    
    .bg_grad-04.mb-3
      .row
        .col-12-col-md-7.col-lg-7.order-2.order-md-1.mtop
          div.p-2
            p.m-0 <em>Docker</em> es una de las plataformas de software más ampliamente utilizada en el mundo para la gestión de contenedores.
          .tarjeta.bgr_11.p-3.mb-5
            .row.align-items-center
              .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                img.img70(src="@/assets/curso/tema5/t5-2.svg")
              .col-12.col-md-10.col-lg-10
                .row.align-items-center.position-relative
                  .col-12.col-md-8.col-lg-8.mb-3.mb-sm-0.text-white
                    p.text-smallPara Para Realizar el proceso de instalación de <em>Docker</em> en el sistema operativo <em>Windows</em> debemos dirigirnos directamente a la página oficial de <em>Docker</em> disponible en:   
                  .col-12.col-md-4.col-lg-4.justify-center
                    a.boton.color-acento-botones.text-black(href="https://docs.docker.com/docker-for-windows/install/" target="_blank")
                      span Abrir enlace
                      i.fas.fa-link
                  figure.posit-12
                    img.img90(src='@/assets/template/puntos3.svg', alt='puntos3')
          .bgr_5.p-4.mb-4(data-aos="zoom-in-up")
            p.m-0 En el enlace anterior podrá encontrar el enlace acceso directo al proceso de descarga y también encontrará una descripción de los requerimientos específicos del sistema respecto a versiones de sistema operativo, memoria RAM mínima, procesadores compatibles entre otros requerimientos.  
        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema3/t3-8.png', alt='3-8')

    div.bgr_16.p-2.mb-4
      h4.m-0.text-white Al desplegar el siguiente recurso, podrá observar las características del Docker, veamos:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row
      .col-12.col-md-6
        .tarjeta.bgr_11.p-3.mb-5
          .row.align-items-center
            .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
              img.img70(src="@/assets/curso/tema5/t5-2.svg")
            .col-12.col-md-10.col-lg-10
              .row.align-items-center.position-relative
                .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                  p.m-0.text-smallPara Para más información detallada diríjase a la documentación de referencia de Docker sobre archivos <em>Dockerfile</em> disponible en:   
                .col-12.col-md-3.col-lg-3.justify-center
                  a.boton.color-acento-botones.text-black(href="https://docs.docker.com/engine/reference/builder/" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      .col-12.col-md-6
        .tarjeta.bgr_11.p-3.mb-5
          .row.align-items-center
            .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
              img.img70(src="@/assets/curso/tema5/t5-2.svg")
            .col-12.col-md-10.col-lg-10
              .row.align-items-center.position-relative
                .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                  p.text-smallPara O la documentación de <em>Dockerfile</em> para Windows disponible en:   
                .col-12.col-md-3.col-lg-3.justify-center
                  a.boton.color-acento-botones.text-black(href="https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/manage-windows-dockerfile" target="_blank")
                    span Abrir enlace
                    i.fas.fa-link
      


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
