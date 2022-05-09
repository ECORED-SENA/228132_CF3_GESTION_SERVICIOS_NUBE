<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Software</em> de virtualización
    
    .bg_grad-02
      .row.mb-5
        .col-12.col-md-5.col-lg-5(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-1.png', alt='2-1')
        .col-12-col-md-7.col-lg-7.mtop
          div.p-2.p-md-3.bgr_1
            p.m-0 La virtualización es un tema base, sobre el que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube.
          .row.mt-3.mb-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/curso/puntos9.svg', alt='9')
                img.d-flex.d-lg-none.img30(src='@/assets/curso/puntos1.svg', alt='9')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold Es necesario conocer sobre las generalidades de la virtualización, los diferentes tipos que hay y que son más comunes en el uso de acuerdo con sus características, un listado de algunas herramientas para realizar un proceso de virtualización de servidores y un ejemplo detallado para la realización de una virtualización de un sistema operativo Linux corriendo en una máquina <em>Windows</em>.   
          figure.justify-center.mb-3(data-aos="zoom-in-up")
              img.img450(src='@/assets/curso/tema2/t2-2.svg', alt='1-8')  
          .bgr_5.p-4.mb-4(data-aos="zoom-in-up")
            p.m-0 La virtualización es el proceso mediante el cual es posible crear una representación de elementos físicos como servidores, sistemas de almacenamiento, redes e incluso aplicaciones mediante <em>software</em> de modo que se puedan reducir los costos asociados a infraestructura de TI, al tiempo que se mejora la eficiencia en el uso de estos recursos (VMware, 2011).
    
    div.justify-center
      div
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Esquema de virtualización
        figure.mt-3(data-aos="zoom-in-up")
          img.img700(src='@/assets/curso/tema2/t2-3.svg', alt='2-3')
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 2.1  Generalidades de la virtualización
    
    .bg_grad-02
      .row.mb-2
        .col-12.col-md-8.col-lg-8.mtop_1.order-2.order-md-1
          p.m-0 Normalmente un conjunto de recursos infraestructura como discos, memorias, procesadores, etc. que están presentes en un equipo o grupo de servidores son ocupados únicamente por el sistema operativo y las aplicaciones que se ejecutan sobre este, y no siempre se usa todo su potencial al 100% provocando desperdicios en el uso de recursos, con la virtualización podemos hacer que estos recursos ejecuten una o varias máquinas virtuales al mismo tiempo y cada una de estas máquinas podrá ejecutar su propio conjunto de aplicaciones con sistemas operativos totalmente independientes como se representa en la figura 1.
          .row.mb-3.mt-3.justify-end
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex(src='@/assets/curso/puntos2.svg', alt='puntos')
                img.d-flex.d-lg-none(src='@/assets/curso/puntos1.svg', alt='puntos')
            .col-10.col-md-10.col-lg-10
              p.m-0.color.text-bold Una máquina virtual (MV) es un <em>software</em> especial que funciona como un contenedor de <em>software</em> donde se incluye un sistema operativo y aplicaciones que funcionan totalmente independientes. De esta forma un equipo puede tener instaladas varias máquinas virtuales cada una de las cuales se ejecutan independientemente en un mismo equipo que sirve como <em>host.</em>
          div.bgr_16.p-1.mb-4.mt-3
            h3.m-0.p-1.text-white Ventajas al implementar esquemas de virtualización 
        .col-12.col-md-4.col-lg-4.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-4.png', alt='2-4')
    .bg_grad-11
      .row.mb-5
        .col-12.col-md-6.col-lg-6.mb-2.mb-md-0.mb-lg-0
          div.bgr_17
            .row.justify-center.p-3.ptop
              .col-auto.mb-2.mb-md-0-mb-lg-0
                figure
                  img.img90(src='@/assets/curso/tema2/t2-5.svg', alt='2-5')
              .col-auto.align-items-end
                h3.m-0.text-white Aumento de rendimiento
            div.p-3.p-mg-4.p-lg-4
              p.text-white Se puede asignar más o menos recursos dinámicamente a una máquina dependiendo de la utilidad real requerida.
              figure.justify-end
                img.img90(src='@/assets/curso/puntos4.svg', alt='puntos3')
        .col-12.col-md-6.col-lg-6
          div.bgr_17
            .row.justify-center.p-3.ptop
              .col-auto.mb-2.mb-md-0-mb-lg-0
                figure
                  img.img90(src='@/assets/curso/tema2/t2-6.svg', alt='2-6')
              .col-auto.align-items-end
                h3.m-0.text-white Automatización de operaciones
            div.p-3.p-mg-4.p-lg-4
              p.text-white Reducción en la inversión de capital y gastos operativos asociados a la infraestructura de TI. Reducción de tiempos de inactividad de los recursos.
              figure.justify-end
                img.img90(src='@/assets/curso/puntos4.svg', alt='puntos3')
    
    
      div.bgr_4.p-2.mb-4
        h4.m-0.text-white Tipos de virtualización
      p Existen varias formas de virtualizar, pero el común denominador de la virtualización es el aprovechamiento de los recursos de <em>Hardware</em> y <em>Software,</em> para que estos recursos puedan ser aprovechados de forma flexible por parte de los usuarios o clientes.
      p.mb-5 Despliegue el recurso que se muestra a continuación en donde se describen los tipos de virtualización. 
      
    #anclas.row.justify-content-center.gx-lg-2.mb-5
      .col-12.col-md-3.mb-4.mb-lg-0
        .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('1')" @mouseover="mostrarIndicador = false")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/t2-7.svg', alt='2-7', style='width: 85px').m-auto
                      
          p.mb-0.text-center.text-bold Virtualización de servidores

                    
      .col-12.col-md-3.mb-4.mb-lg-0
        .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('2')" @mouseover="mostrarIndicador = false")
          .row.justify-content-center.mb-3
            .col-8
              figure
                img(src='@/assets/curso/tema2/t2-8.svg', alt='2-8', style='width: 85px').m-auto
                      
          p.mb-0.text-center.text-bold Virtualización a nivel de sistema operativo o basada en contenedores

                    
      .col-12.col-md-3.mb-4.mb-lg-0
        .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('3')" @mouseover="mostrarIndicador = false")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/t2-9.svg', alt='2-9', style='width: 85px').m-auto
                      
          p.mb-0.text-center.text-bold Virtualización de red

                    
      .col-12.col-md-3.mb-4.mb-lg-0
        .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('4')" @mouseover="mostrarIndicador = false")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/t2-10.svg', alt='2-10', style='width: 85px').m-auto
                      
          p.mb-0.text-center.text-bold Virtualización de escritorios

      hr.mt-5.mb-5

      #1.row.justify-content-between.mb-5
        .col-auto(data-aos="fade-right")
          .px-4.py-2(style='background-color: #2EC49F')
            h4.text-white.mb-0 Virtualización de servidores
        .col-auto
          figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
            img(src='@/assets/curso/tema2/up.svg', alt='icon', style='width: 33px').m-auto
              
      .row
        .col-12.col-md-5.col-lg-5(data-aos="zoom-in-up")
         figure.justify-center
            img(src='@/assets/curso/tema2/t2-12.png', alt='2-12') 
        .col-12.col-md-7.col-lg-7
          P Este tipo de virtualización tiene ventajas clave:
            ul.lista-ul.p-3
              li 
                i.fas.fa-caret-right.fa-lg.bgr_18
                span.mtop_6 Mayor disponibilidad de los servidores
              li 
                i.fas.fa-caret-right.fa-lg.bgr_18
                span.mtop_6 Reducción en costes operativos
              li 
                i.fas.fa-caret-right.fa-lg.bgr_18
                span.mtop_6 Eliminación de la complejidad de los servidores
              li 
                i.fas.fa-caret-right.fa-lg.bgr_18
                span.mtop_6 Mejora en el rendimiento de las aplicaciones
              li 
                i.fas.fa-caret-right.fa-lg.bgr_18
                span.mtop_6 Distribución más rápida de las cargas de trabajo
          .bgr_25.p-4.mb-4(data-aos="zoom-in-up")
            p.m-0 La virtualización de servidores es una implementación en la que un servidor físico <em>(host)</em> se divide mediante <em>software</em> en varios servidores virtuales únicos y aislados, los cuales se visualizan al cliente como servidores independientes.
        
        div.bgr_4.p-2.mb-4
          h4.m-0.text-white Se clasifica en dos tipos, estos son:

        .row.mb-5
          .col-12.col-md-7.mb-5.mb-md-0.order-2.order-md-1 
            LineaTiempoD.color-acento-contenido
              .row(numero="1" titulo="Virtualización completa")
                .col-md-12.mb-4.mb-md-0
                  p.text-small En este tipo de virtualización se usa el hipervisor, el cual es un <em>software</em> que se encarga de la supervisión y gestión de los recursos físicos y de adicionalmente se encarga de independizar cada servidor virtual. Sin embargo, el hipervisor requiere recursos para hacer el procesamiento correspondiente lo que puede afectar el rendimiento general del servidor.
                  figure
                    img(src='@/assets/curso/tema2/t2-13.svg', alt='2-13')
              .row(numero="2" titulo="Paravirtualización")
                .col-md-12.mb-4.mb-md-0
                  p.text-small En este esquema cada sistema operativo de los servidores virtuales tiene conocimiento de la existencia de los otros por lo cual el hipervisor se libera un poco de la carga para gestionar los sistemas operativos, adicionalmente se tiene ventajas como la posibilidad de crear copias de seguridad más fácilmente, migraciones más rápidas, mejor utilización del sistema y ahorro de energía. No todos los sistemas operativos soportan paravirtualización y en algunos casos se pueden presentar problemas de compatibilidad de <em>hardware.</em>
                  figure
                    img(src='@/assets/curso/tema2/t2-14.svg', alt='2-14')
            
        
          .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up") 
            figure.justify-center
                img(src='@/assets/curso/tema2/t2-15.png', alt='2-15')

      hr.mb-5

      #2.row.justify-content-between.mb-5
        .col-auto
          .px-4.py-2(style='background-color: #2EC49F')
            h4.text-white.mb-0 Virtualización a nivel de sistema operativo o basada en contenedores
        .col-auto
          figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
            img(src='@/assets/curso/tema2/up.svg', alt='icon', style='width: 33px').m-auto
            
      figure.position-relative.mb-5(data-aos="zoom-in-up")
        img(src='@/assets/curso/tema2/t2-16.png', alt='2-16')
        .row.justify-center
          .col-11
            .bgr_10
              p.m-0.p-4 Es este esquema de virtualización no se usa Hipervisor, sino que es el sistema operativo del servidor físico quien se encarga de las actividades de virtualización, sin embargo, en este esquema los servidores virtuales deben ejecutar el mismo sistema operativo del <em>host.</em> 

      hr.posit-14

      #3.row.justify-content-between.mb-5
        .col-auto(data-aos="fade-right")
          .px-4.py-2(style='background-color: #2EC49F')
            h4.text-white.mb-0 Virtualización de red
        .col-auto
          figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
            img(src='@/assets/curso/tema2/up.svg', alt='icon', style='width: 33px').m-auto
              
      .row.mb-5
        .col-12.col-md-5.col-lg-5(data-aos="zoom-in-up")
         figure.justify-center
            img(src='@/assets/curso/tema2/t2-17.png', alt='2-17') 
        .col-12.col-md-7.col-lg-7
          .row.mleft
            .col-2
              figure.justify-end.posit-16
                img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos5.svg', alt='puntos')
                img.d-flex.d-lg-none(src='@/assets/curso/puntos2.svg', alt='1-8') 
            .col-10
              P.color.m-0.text-bold Consisten en crear redes virtuales independientes y separadas mediante el uso de <em>software</em> sobre redes físicas. Este tipo de virtualización se puede presentar de dos maneras: 
              .tarjeta-avatar-b.mb-2.mt-3
                .tarjeta-avatar-b__img2
                  img.posit-15(src='@/assets/curso/tema2/t2-18.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Virtualización externa
                    p.m-0 La cual consiste en la combinación de varias redes completas o partes en una unidad virtual.
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img3
                  img.posit-15(src='@/assets/curso/tema2/t2-19.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Virtualización interna
                    p.m-0 La cual hace uso de contenedores de <em>software</em> para proveer la funcionalidad de una unidad de red física.  Algunos ejemplos de aplicaciones y enfoque de virtualización de red con: VPN, VLAN, SDN.

      hr.mb-5

      #4.row.justify-content-between
        .col-auto(data-aos="fade-right")
          .px-4.py-2(style='background-color: #2EC49F')
            h4.text-white.mb-0 Virtualización de escritorios

        .col-auto
          figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
            img(src='@/assets/curso/tema2/up.svg', alt='icon', style='width: 33px').m-auto
        p.mt-4 Estas máquinas de escritorio virtuales se entregan a los usuarios de forma remota a través de una red pública o privada, los usuarios no necesitan descargar la máquina virtual.

        .row
          .col-md-5.order-2.order-md-1(data-aos="fade-right")
            SlyderF(columnas="col-12")
              .tarjeta.bgr_24.p-4
                .row.justify-content-center.mb-3
                  .col-8.justify-center
                    img.img120(src='@/assets/curso/tema2/t2-20.svg' alt='1-4')
                p.text-center Empleada por muchas empresas en la actualidad y también se conoce como VDI por sus siglas en inglés (infraestructura de escritorios virtuales), en este esquema se dispone de un conjunto de servidores o <em>data centers</em> los cuales publican varias páginas virtuales cada una con su propio sistema operativo, aplicaciones y servicios con su propio entorno de escritorio. 

              .tarjeta.bgr_24.p-4
                .row.justify-content-center.mb-3
                  .col-8.justify-center
                    img.img120(src='@/assets/curso/tema2/t2-21.svg' alt='1-5')
                p.text-center La máquina virtual se ejecuta en los servidores y no en el equipo del usuario. Es decir, la carga de procesamiento, almacenamiento y demás capacidades de gestión desde el servidor remoto.

              .tarjeta.bgr_24.p-4
                .row.justify-content-center.mb-3
                  .col-8.justify-center
                    img.img120(src='@/assets/curso/tema2/t2-22.svg' alt='1-5')
                p.text-center Reciben la imagen de sus escritorios desde los servidores de forma remota. 

          .col-md-7.order-1.order-md-2.mb-3(data-aos="zoom-in-up")
            figure.justify-center
              img(src='@/assets/curso/tema2/t2-23.svg', alt='1-2')

    .bg_grad-19
      .row.mb-5
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-38.png', alt='1-19')
        .col-12.col-md-8.col-lg-8.align-items-center
          div
            div.bgr_4.p-2.mb-3
              h4.m-0.text-white Herramientas de virtualización de servidores
            .row.mb-3
              .col-2.col-md-1.col-lg-1.align-items-center
                figure.justify-center
                  img.d-flex(src='@/assets/curso/puntos6.svg', alt='puntos')
              .col-10.col-md-11.col-lg-11.position-relative
                p.m-0 En el mercado existen muchas herramientas de <em>software</em> creadas para facilitar el proceso de virtualización de servidores, en la Tabla 1 se listan algunas de estas herramientas para entornos domésticos y pequeñas empresas junto con cada una de sus características principales.
                figure.posit-22
                  img.img90(src='@/assets/curso/puntos3.svg', alt='puntos')
    .bg_grad-12
      .row.justify-content-between
        .col-auto(data-aos="fade-right")
          .px-4.py-2(style='background-color: #2EC49F').mb-4
            h4.text-white.mb-0 Listado de herramientas para virtualización de servidores      
      .row.mb-5.justify-center
        .col-12.col-md-10.col-lg-10
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="VMware")
              .col-md-12
                ul.lista-ul.p-3
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Gran cantidad de paquetes de <em>software</em> disponibles para virtualización.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Tiene soluciones libres y de pago.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Compatibilidad con la tecnología Intel VT-x, la cual le permite ejecutar máquinas virtuales en forma nativa de la CPU <em>host</em> cuando esta tiene procesadores Intel.
                .tarjeta.bgr_11.p-3.posit-17
                  .row.align-items-center
                    .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                      img.img70(src="@/assets/curso/img-1.svg")
                    .col-12.col-md-10.col-lg-10
                      .row.align-items-center.position-relative
                        .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                          h3 <em>VMware Workstation Pro</em> 
                          p.text-small.m-0  Es el hipervisor de escritorio estándar de la industria para ejecutar máquinas virtuales en PC con Linux o <em>Windows</em>. Comience hoy su prueba gratuita y completamente funcional de 30 días.   
                        .col-12.col-md-3.col-lg-3.justify-center
                          a.boton.color-acento-botones.text-black(href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link  

            .row(numero="2" titulo="<em>Oracle VM VirtualBox</em>")
              .col-md-12
                ul.lista-ul.p-3
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 <em>Software</em> gratuito descargable desde su sitio web oficial.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Posibilidad de instalar máquinas Linux, <em>MacOS</em> y <em>Windows</em> en la gran mayoría de versiones de forma gratuita.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Soporta virtualización en tecnologías <em>Intel</em> y AMD.
                .tarjeta.bgr_11.p-3.posit-17
                  .row.align-items-center
                    .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                      img.img70(src="@/assets/curso/img-1.svg")
                    .col-12.col-md-10.col-lg-10
                      .row.align-items-center.position-relative
                        .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                          h3 <em>Oracle VM VirtualBox</em> 
                          p.text-small.m-0  Aquí encontrará enlaces a los binarios de <em>VirtualBox</em> y su código fuente.   
                        .col-12.col-md-3.col-lg-3.justify-center
                          a.boton.color-acento-botones.text-black(href="https://www.virtualbox.org/wiki/Downloads" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link
            .row(numero="3" titulo="<em>Microsoft Hyper-V</em>")
              .col-md-12
                ul.lista-ul.p-3
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Disponible en forma nativa en S.O <em>Windows</em> en versión pro y <em>server.</em> Es decir, si se tiene este tipo de versiones estará disponible de forma gratuita y no requiere de instalación de <em>software</em> externo al sistema.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Sirve para virtualizar sistemas <em>Windows</em> y otros como Linux y FreeBSD.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Soporta virtualización en tecnologías <em>Intel</em> y AMD.
                .tarjeta.bgr_11.p-3.posit-17
                  .row.align-items-center
                    .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                      img.img70(src="@/assets/curso/img-1.svg")
                    .col-12.col-md-10.col-lg-10
                      .row.align-items-center.position-relative
                        .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                          h3 <em>Microsoft Hyper-V</em> 
                          p.text-small.m-0  <em>Hyper-V</em> se puede habilitar de muchas maneras, incluido el uso del panel de control de <em>Windows</em> 10, <em>PowerShell</em> o la herramienta de administración y mantenimiento de imágenes de implementación (DISM). Este documento recorre cada opción.   
                        .col-12.col-md-3.col-lg-3.justify-center
                          a.boton.color-acento-botones.text-black(href="https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link        
            .row(numero="4" titulo="Qemu")
              .col-md-12
                ul.lista-ul.p-3
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Es <em>software</em> libre y está disponible para diferentes tipos de sistemas operativos.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 No dispone de GUI pero se puede instalar mediante una extensión para en <em>Mac</em> y en <em>Windows</em>.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Soporta virtualización en tecnologías Intel y AMD.
                .tarjeta.bgr_11.p-3.posit-17
                  .row.align-items-center
                    .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                      img.img70(src="@/assets/curso/img-1.svg")
                    .col-12.col-md-10.col-lg-10
                      .row.align-items-center.position-relative
                        .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                          h3 Qemu 
                          p.text-small.m-0  Obtenga el código fuente de los últimos lanzamientos y compílelo usted mismo! Las instrucciones detalladas de compilación se pueden encontrar en la wiki para Linux , Win32 y macOS.   
                        .col-12.col-md-3.col-lg-3.justify-center
                          a.boton.color-acento-botones.text-black(href="https://www.qemu.org/download/" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link
            .row(numero="5" titulo="<em>Parallels</em>")
              .col-md-12
                ul.lista-ul.p-3
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 <em>Hypervisor</em> para sistemas operativos <em>MacOS.</em>
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Permite ejecutar máquinas virtuales de otros sistemas sobre la plataforma de Apple.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Compatibilidad con la tecnología Intel VT-x.
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Permite traspaso de archivos, carpetas compartidas y comunicación de todo tipo de dispositivos de E/S entre la máquina <em>host</em> y las virtuales
                  li 
                    i.fas.fa-caret-right.fa-lg.bgr_19
                    span.mtop_6 Se debe pagar licencia para su uso.
                .tarjeta.bgr_11.p-3.posit-17
                  .row.align-items-center
                    .col-12.col-md-auto.col-lg-auto.justify-center.mb-2
                      img.img70(src="@/assets/curso/img-1.svg")
                    .col-12.col-md-10.col-lg-10
                      .row.align-items-center.position-relative
                        .col-12.col-md-9.col-lg-9.mb-3.mb-sm-0.text-white
                          h3 <em>Parallels</em> 
                          p.text-small.m-0  Una aplicación rápida, sencilla y potente para ejecutar <em>Windows</em> en su <em>Mac</em> Intel o Apple M1, todo sin reiniciar. Incluye más de 30 herramientas de un solo toque para simplificar las tareas diarias en Mac y <em>Windows</em>.   
                        .col-12.col-md-3.col-lg-3.justify-center
                          a.boton.color-acento-botones.text-black(href="https://www.parallels.com" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link
    
    .bg_grad-06
      .row
        .col-12.col-md-7.col-lg-7.mt-4.order-2.order-md-1
          div.bgr_4.p-2.mb-3
            h3.m-0.text-white Ejemplo de virtualización
          p En el siguiente recurso, podrá consultar un ejemplo paso a paso de cómo realizar un proceso de virtualización de una máquina con sistema operativo Linux, en una máquina con sistema operativo <em>Windows</em>. Para este ejemplo se utilizará una máquina <em>host</em> con sistema operativo <em>Windows</em> 10 Home de 64 bits y se virtualiza y ejecutará una máquina virtual con sistema operativo Ubuntu desktop 20.04 por medio de la herramienta Oracle <em>Virtual Box.</em>
          .row.justify-center
            .col-10.tarjeta.bgr_20.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-md-2.col-lg-2
                  img(src="@/assets/curso/tema2/t2-24.svg")
                .col-9 
                  .row.justify-content-between.align-items-center.position-relative
                    .col.mb-3.mb-sm-0.text-white
                      h3 Video tutorial 
                      p.text-small.m-0  Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.   
                    .col-sm-auto
                      a.boton.color-acento-botones.text-black(href="https://www.youtube.com/embed/tqOc8Z9shVM" target="_blank")
                        span Abrir enlace
                        i.fas.fa-link
        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-25.png', alt='2-25')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 2.2  Máquinas virtuales
    .bg_grad-13
      .row.mb-3
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-26.png', alt='2-26')
        .col-12.col-md-8.col-lg-8.mtop_1.position-relative
          p.color #[strong Las máquinas virtuales son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión ] 
            span.color_4 (Alarcón, 2018), de igual manera debe existir un componente de infraestructura de tipo <em>hardware</em> que soporte todo lo anterior que en últimas es el servidor o equipo donde se haga el desarrollo y creación de la máquina virtual o si se trata del despliegue y puesta en producción final de la aplicación puede referirse a un proveedor que suministra el <em>hardware</em> necesario que soportará la máquina virtual como <em>Azure, Google Cloud, AWS, Digital Ocean</em> entre otras, como nos lo muestra la siguiente imagen.

          figure.posit-18
            img.img90(src='@/assets/curso/puntos3.svg', alt='puntos3')
          .row.justify-center.mt-4
            .col-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Funcionamiento de una Máquina virtual
              
              figure
                img(src='@/assets/curso/tema2/t2-27.svg', alt='2-27')

    separador

    #t_2_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 2.3  Características de la virtualización
    
    p Existen ventajas que son características del proceso de virtualización, permitiendo de esta forma obtener mejores y mayores recursos, sistemas de soporte, la migración de datos e información, así como una alta disponibilidad de los recursos, a continuación, encontrará una breve descripción de estas:
  
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Almacenamiento" :icono="require('@/assets/curso/tema2/t2-28.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar
            h4 Almacenamiento
            p.mb-3 Es la agrupación de todos los recursos de almacenamiento lógico y físico, de tal forma que la gestión de dispositivos de almacenamiento en red se simplifica al reunirlos en un único almacén que es administrado desde un lugar central. Las necesidades de almacenamiento pueden variar mucho de una empresa a otra, ya que algunas requieren perdurabilidad de los sistemas, otras precisan lidiar con distintos dispositivos, potencia en la nube, etc.
            .row.justify-end
              .col-2.align-items-center
                figure.justify-end
                  img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos7.svg', alt='puntos')
                  img.d-flex.d-lg-none.img50(src='@/assets/curso/puntos2.svg', alt='puntos')
              .col-9
                p.m-0.color.text-bold Gestionar distintos dispositivos de almacenamiento puede resultar una tarea muy compleja, pero la virtualización del almacenamiento ha llegado para poner solución a este problema.
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema2/t2-32.png', alt='2-32')

      .py-4.py-md-5(titulo="Redundancia" :icono="require('@/assets/curso/tema2/t2-29.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar
            h4 Redundancia
            .row.justify-end.mb-3
              .col-2.align-items-center
                figure.justify-end
                  img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos7.svg', alt='puntos')
                  img.d-flex.d-lg-none.img50(src='@/assets/curso/puntos2.svg', alt='puntos')
              .col-9
                p.m-0.color.text-bold Vamos a imaginar que queremos crear un sistema disponible el 99,99...% del tiempo, bien porque es un servicio vital para la empresa, bien porque cualquier pérdida o corte, puede provocar pérdidas económicas o de cualquier otro tipo. ¿Qué hacemos entonces?
            p.mb-3 Se suele configurar lo que se denomina un «sistema redundante», es decir dos o más sistemas configurados de forma que uno de ellos sea el que está en funcionamiento, y en el caso en que deje de funcionar por cualquier motivo, se active otro de los sistemas que hasta ese momento estaba «en espera» o «inactivo» tan rápidamente como sea posible. Mediante este sistema, incluso en el peor de los casos (la rotura de un disco duro, un desbordamiento de memoria que mate un proceso vital, o incluso que alguien le pegue una patada al cable) puede seguir funcionando gracias al siguiente equipo hasta entonces «dormido».
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema2/t2-33.png', alt='2-33')

      .py-4.py-md-5(titulo="Migración" :icono="require('@/assets/curso/tema2/t2-30.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar
            h4 Migración
            p.mb-3 Describe el proceso de mover una máquina virtual de un <em>host</em> a otro. Esto es posible porque los invitados están corriendo en un entorno virtualizado en lugar de directamente sobre el <em>hardware.</em> Hay dos maneras de migrar una máquina virtual: en vivo y fuera de línea.
              ul.lista-ul.p-3
                li 
                  i.fas.fa-caret-right.fa-lg.bgr_19
                  span.color.mtop_6 Migración fuera de línea: 
                    span.color_4 Una migración fuera de línea suspende al invitado, y después mueve una imagen de la memoria del invitado al <em>host</em> destino. El invitado es posteriormente puesto en marcha sobre el <em>host</em> destino y la memoria usada por el invitado en la <em>host</em> fuente liberada.
                li 
                  i.fas.fa-caret-right.fa-lg.bgr_19
                  span.color.mtop_6 Migración en vivo: 
                    span.color_4 La migración en vivo es el proceso de migrar un invitado activo de un <em>host</em> físico a otro.
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema2/t2-34.png', alt='2-34')                

      .py-4.py-md-5(titulo="Alta disponibilidad" :icono="require('@/assets/curso/tema2/t2-31.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar.align-items-center
            div
              h4 Alta disponibilidad
              p.mb-3 Hasta hace poco, las redes y los sistemas de la tecnología de la información (IT) y la tecnología de operaciones (OT) funcionaban de manera completamente independiente entre sí. Sin embargo, desde hace unos años, a medida que la fabricación industrial ha aumentado su nivel de conexión, también han ido convergiendo en la planta los mundos de la IT y la OT de nuevas y trascendentales maneras.
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema2/t2-35.png', alt='2-34')
    
    .bg_grad-17
      .row.mb-4
        .col-12.col-md-5.col-lg-5(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/tema2/t2-36.png', alt='2-36')
        .col-12-col-md-7.col-lg-7.posit-20
          p.m-0.color #[strong La digitalización de la fabricación implica enviar y recibir una gran cantidad de datos desde numerosos orígenes y puntos de datos diferentes. ] 
            span.color_4 Las aplicaciones y paquetes de <em>software</em> encargados de conectar estos puntos de datos requieren más capacidad de computación de la que jamás habían necesitado. Las empresas industriales están comenzando a cambiar de soluciones físicas de <em>hardware</em> a ambientes virtuales donde pueden residir varias aplicaciones y sistemas operativos.
          figure.justify-end.mt-3.mb-3
            img.img90(src='@/assets/curso/puntos3.svg', alt='puntos')
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img4
              img.img90(src='@/assets/curso/tema2/t2-37.svg' alt='2-37')
            .tarjeta2.bgr_22
              .p-4
                h2 Virtualización, ¿para qué sirve?
                p.m-0 La virtualización esencialmente elimina la dependencia entre el sistema operativo y el <em>hardware físico.</em> Ha sido una implementación más habitual en plantas y líneas de nuevo diseño, en las que es posible comenzar desde cero con un ambiente virtual.
      
      .bgr_25.p-4.mb-4
        p.m-0 Las plantas de mayor tamaño también han comenzado a cambiar a servidores virtuales, gracias a los grandes centros de datos. Sea cual sea el tamaño de su planta, la planta conectada es el futuro de la fabricación y la virtualización desempeñará un papel cada vez más importante en el espacio de la OT. La tendencia de migración a servidores permite ahora trasladar servidores virtuales de una máquina física a otra, y se encuentra aún en sus primeras fases.
    
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
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
