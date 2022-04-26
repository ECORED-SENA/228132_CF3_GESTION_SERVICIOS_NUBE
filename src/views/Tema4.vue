<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Almacenamiento
    
    .bg_grad-14
      .row.mb-3
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema4/t4-1.png', alt='4-1')
        .col-12.col-md-8.col-lg-8 
          .row.mtop_4
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img40(src='@/assets/template/puntos1.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/template/puntos2.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold Un asunto indispensable para la construcción de una solución de virtualización es el almacenamiento. Es una de las decisiones más importantes de tener en cuenta, los entornos no son iguales por su tipo de requerimiento y finalidad, por ese motivo hay una solución que puede acoplarse al tipo de soluciones que se tiene que brindar.
            .bgr_5.p-4.mb-4.mt-3(data-aos="zoom-in-up")
              p.m-0 Por mucho tiempo esta solución ha sido la más utilizada <em>Fibre Channel (FC)</em> y en los últimos años han sobresalido tecnologías como NAS o iSCSI convirtiéndose en alternativas tentadoras para entornos de virtualización, ofreciendo una diferencia en rendimiento y precio.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 4.1  Generalidades
    
    .bg_grad-15
      .row
        .col-12.col-md-8.col-lg-8.order-2.order-md-1
          p Hay que tener ciertos criterios a la hora de elegir una solución como es: presupuesto disponible, rendimiento y capacidad. Además hay fabricantes que ya cuentan con una propuesta en virtualización que podemos adoptar en el proyecto que se esté proponiendo como una alternativa para trabajar con la misma línea. 
          .row
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img40(src='@/assets/curso/puntos9.svg', alt='puntos1')
                img.d-flex.d-lg-none(src='@/assets/curso/puntos1.svg', alt='puntos2')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold Normalmente en el campo de la virtualización encontramos tecnologías como FC que es de las más reconocidas, no debemos pasar por alto iSCSI o NAS como alternativas. Estas últimas tienen un abanico de dispositivos iSCSI o NAS en el mercado, observamos características como capacidades y escalabilidad y ver que nuestro requerimiento sea compensado. Por eso se precisa que en este momento del proyecto el almacenamiento es una parte crítica para ello.
        .col-12.col-md-4.col-lg-4.order-1.order-md-2.mb-3(data-aos="zoom-in-up")
          figure.justify-center
            img.img250(src='@/assets/curso/tema4/t4-2.svg', alt='4-2')
    
      separador
      
      #t_4_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
        h2 4.2 Tipos de almacenamiento
      
    p Existen diferencias en los tipos de almacenamiento de datos, a continuación, podrá consultar aquello de carácter principal de acuerdo a las especificaciones técnicas para la arquitectura tecnológica en nube, veamos el siguiente recurso didáctico:
    
    .row-mb-5.justify-center.mt-3
      .col-12.col-md-10.col-lg-10
        LineaTiempoD.color-acento-contenido
          .row.p-3(numero="1" titulo="DAS Direct Attached Storage")
            p Son dispositivos de almacenamiento directamente conectados a la máquina, como es el caso de discos duros internos, cabinas de disco o unidades de cinta para <em>“backup”.</em>
            .row.ps-3.ps-md-5.ps-lg-5
              .col-2.col-md-1.col-lg-1.align-items-center
                figure.justify-center
                  img.d-none.d-lg-flex.img30(src='@/assets/curso/puntos2.svg', alt='puntos1')
              .col-12.col-md-11.col-lg-11
                p.m-0.color.text-bold Suelen basarse en tecnologías 
                  span.color_1 SCSI- <em>Small Computers System Interface</em> y FC- <em>Fiber Channel. </em> 
                  span.color Esta arquitectura de almacenamiento se relacionaba principalmente con la época de los <em>“Mainframe”</em> de IBM. Sin embargo, hoy en día, los PC’s de sobremesa utilizan arquitectura de almacenamiento DAS, mientras que, en los servidores de las empresas, empieza a caer en desuso, utilizándose únicamente para el almacenamiento del sistema operativo.
              .bgr_5.p-4.mb-4.mt-3
                p.m-0 La arquitectura de almacenamiento DAS, presenta muchos inconvenientes, como la dispersión del almacenamiento, que implica una dificultad en la gestión de los backups, así como una baja tolerancia a fallos (sólo posible a través de soluciones RAID), y un alto TCO- <em>Total Cost of Ownership,</em> debido a las dificultades de mantenimiento.
              figure.justify-center
                img.img450(src='@/assets/curso/tema4/t4-3.svg', alt='4-3')

          .row.p-3(numero="2" titulo="NAS Network Attached Storage")
            p Con la introducción de las redes locales (LAN), se empezaron a utilizar servidores de almacenamiento conectados a la red, a los cuales se podía acceder directamente a través de la propia infraestructura mediante protocolos específicos como NFS -<em>Network File System,</em> en entornos UNIX y CIFS -<em>Common Internet File System,</em> en entornos <em>Microsoft</em> (antes conocido como SMB, protocolo original de IBM que fue mejorado por <em>Microsoft</em> en CIFS) o incluso mediante FTP, HTTP, etc.
            .row.ps-3.ps-md-5.ps-lg-5
              .col-12.col-md-5.col-lg-5.mb-3
                figure
                  img(src='@/assets/curso/tema4/t4-4.svg', alt='4-4')
              .col-12.col-md-7.col-lg-7
                .row
                  .col-2.align-items-center
                    figure.justify-center
                      img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos2.svg', alt='puntos1')
                      
                  .col-12.col-md-10.col-lg-10
                    p.m-0.color.text-bold Los principales beneficios de las Arquitecturas de Almacenamiento NAS son que proporcionan un mejor TCO -<em>Total Cost of Ownship,</em> resultando fácilmente escalable y capaces de ofrecer una alta disponibilidad.

                .bgr_5.p-4.mb-4.mt-3
                  p.m-0 Actualmente las soluciones NAS se basan en TCP/IP, con protocolos NFS o CIFS por encima. En consecuencia, un dispositivo NAS será una máquina dedicada con una o varias direcciones IP y además estará dotado de una conexión de alta velocidad a la red LAN. De esta forma, los equipos clientes en una arquitectura de almacenamiento NAS, delegan la gestión del sistema de ficheros al propio dispositivo NAS, que se limita a montar las unidades de red exportadas o compartidas, es así que los usuarios y aplicaciones utilizan estos sistemas de ficheros como si fueran locales, aunque para el sistema operativo se trate claramente de sistemas de ficheros remotos.

          .row.p-3(numero="3" titulo="SAN Storage Area Network")
            p Esta arquitectura implica disponer de una infraestructura de red de alta velocidad dedicada sólo para almacenamiento y backup, optimizada para mover grandes cantidades de datos y consistente en múltiples recursos de almacenamiento geográficamente distribuidos o no, además de otros elementos (cables, switches de fibra FC, routers, adaptadores HBA, etc.).
            .row.ps-3.ps-md-5.ps-lg-5
              .col-2.col-md-1.col-lg-1.align-items-center
                figure.justify-center
                  img.d-none.d-lg-flex.img40(src='@/assets/curso/puntos5.svg', alt='puntos1')
                  
              .col-12.col-md-11.col-lg-11
                p.m-0.color.text-bold Las redes de almacenamiento SAN han facilitado enormemente la creación de Centros de Procesos de Datos (CDP) distribuidos, Clusters Geográficos, creación de centros de respaldo (BDC), etc.
              figure.justify-center.mt-3
                img.img450(src='@/assets/curso/tema4/t4-5.svg', alt='4-5')

    separador
      
    #t_4_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 4.3 Tecnologías de almacenamiento
    #anclas
    .bg_grad-18
      .row.mb-3
        .col-12.col-md-5.col-lg-5(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/tema4/t4-6.png', alt='4-6')
        .col-12-col-md-7.col-lg-7.mtop
          div.p-2.p-md-3.bgr_1.mb-3
            p.m-0 Las principales tecnologías de almacenamiento, se relacionan con los protocolos de uso, componentes, y costos, a continuación, se describen las principales.
          .row.justify-content-center.gx-lg-2.mb-5
            .col-12.col-md-4.col-lg-4.mb-2
              .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('1')" @mouseover="mostrarIndicador = false")
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/t4-7.svg', alt='2-7', style='width: 85px').m-auto 
                p.mb-0.text-center iSCSI - <em>Internet Small Computer System Interface</em>


            .col-12.col-md-4.col-lg-4.mb-2
              .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('2')" @mouseover="mostrarIndicador = false")
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/t4-8.svg', alt='2-8', style='width: 85px').m-auto          
                p.mb-0.text-center FC - <em>Fiber channel</em>
    
            .col-12.col-md-4.col-lg-4.mb-2
              .tarjeta--boton.color-amarillo.p-4.mb-4.mb-lg-0.h-100.posit-23(@click="goToElement('3')" @mouseover="mostrarIndicador = false")
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/t4-9.svg', alt='2-9', style='width: 85px').m-auto        
                p.mb-0.text-center NAS - <em>Network Attached Storage</em>
     
    hr.mt-5.mb-5
    #1
    br
    .row.justify-content-between.mb-5
      .col-auto(data-aos="fade-right")
        .px-4.py-2(style='background-color: #2EC49F')
          h4.text-white.mb-0 iSCSI - Internet Small Computer System Interface
      .col-auto
        figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/up.svg', alt='icon', style='width: 33px').m-auto
            
    p Sistema de almacenamiento basado en bloques como FC - <em>Fiber Channel</em>, pero a diferencia, utiliza componentes de una red Ethernet tradicional para realizar la conexión entre los <em>hosts</em> y el sistema de almacenamiento. Al utilizar componentes Ethernet, iSCSI es más barato de implementar.                    
    .row.mt-2 
      .col-12.col-md-8.col-lg-8.order-2.order-md-1
        ul.lista-ul.p-3
          li 
            i.fas.fa-caret-right.fa-lg.bgr_23
            span.mtop_6 iSCSI utiliza los llamados iniciadores 
              | #[em (initiator)] para enviar comando iSCSI a los dispositivos de almacenamiento. Estos iniciadores pueden ser basados en 
              | #[em software o hardware.] En la mayoría de las situaciones, los iniciadores 
              | #[em software] pueden ser suficientes, una solución 
              | #[em hardware] ofrece un mejor rendimiento en E/S utilizando menos recursos del 
              | #[em host.] Hay que tener en cuenta que una solución 
              | #[em software] introduce un 
              | #[em overhead] de CPU en el 
              | #[em host] que se conecta a la red de almacenamiento.
          li 
            i.fas.fa-caret-right.fa-lg.bgr_23
            span.mtop_6 iSCSI da un buen rendimiento en redes de 1Gbps (más si utilizamos 
              | #[em multipathing]), pero actualmente se pueden construir redes iSCSI de 10 Gbps que ofrecen un rendimiento parecido e incluso mejor que FC. El problema de las redes de 10 Gbps es que son tan caras de implementar como una red FC.
          li 
            i.fas.fa-caret-right.fa-lg.bgr_23
            span.mtop_6 En cuanto a seguridad, a diferencia de FC, iSCSI implementa sistemas de autenticación (CHAP) y encriptación.

      .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up").order-1.order-md-2.mb-2
        figure.justify-center
            img(src='@/assets/curso/tema4/t4-10.svg', alt='4-10')

    hr.mt-5.mb-5
    #2
    br
    .row.justify-content-between.mb-5
      .col-auto(data-aos="fade-right")
        .px-4.py-2(style='background-color: #2EC49F')
          h4.text-white.mb-0 FC - <em>Fiber channel</em>
      .col-auto
        figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador =false")
          img(src='@/assets/curso/up.svg', alt='icon', style='width: 33px').m-auto
            
    p FC presenta un grado alto de rendimiento y fiabilidad, pero implican realizar una inversión económica mayor e introducen complejidad en la configuración del centro de datos. FC es la solución más utilizada para entornos de virtualización de gran dimensión o máquinas virtuales con IOPS (número de E/S de acceso a disco) alto gracias a los anchos de banda que se alcanzan (8 Gpbs e incluso 16 Gbps).

    .row.mt-2
      .col-12.col-md-4.col-lg-4.mb-3
        figure.justify-center
            img(src='@/assets/curso/tema4/t4-11.svg', alt='4-11')
      .col-12.col-md-8.col-lg-8
        .row
          .col-12
            .tarjeta-avatar-b.mb-5(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img.img120(src='@/assets/curso/tema4/t4-12.svg' alt='4-12')
              .tarjeta3.tarjeta--azul
                .p-4
                  h2 Seguridad
                  p Las redes de almacenamiento basadas en FC en principio son más seguras que las basadas en Ethernet ya que el tráfico está aislado del tráfico normal. Pero por otro lado es más complicado implementar sistemas de autenticación y encriptación.
          .col-12
            .tarjeta-avatar-b.mb-5(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img.img120(src='@/assets/curso/tema4/t4-13.svg' alt='4-13')
              .tarjeta3.tarjeta--azul
                .p-4
                  h2 Costos
                  p La necesidad de disponer de hardware propio para la tecnología (HBAs y switches FC), hacen la solución más cara y compleja de administrar e implementar. Puede darse el caso de que la empresa no disponga de personal con conocimientos en entornos FC, por lo tanto, se puede incurrir en costes adicionales de formación o consultoría externa.

    hr.mt-5.mb-5
    #3
    br
    .row.justify-content-between.mb-5
      .col-auto(data-aos="fade-right")
        .px-4.py-2(style='background-color: #2EC49F')
          h4.text-white.mb-0 NAS - <em>Network Attached Storage</em>
      .col-auto
        figure(@click="goToElement('anclas')" @mouseover="mostrarIndicador = false")
          img(src='@/assets/curso/up.svg', alt='icon', style='width: 33px').m-auto

    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Protocolo de uso" :icono="require('@/assets/curso/tema4/t4-14.svg')")
        .row.align-items-center
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar
            h4 Protocolo de uso
            p.mb-3 La principal diferencia entre iSCSI y NAS es el tipo de protocolo utilizado. Mientras que iSCSI está basado en bloques de discos, NAS es un sistema de compartición de archivos.
            .row.justify-end
              .col-2.align-items-center
                figure.justify-end
                  img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos7.svg', alt='puntos')
                  img.d-flex.d-lg-none.img50(src='@/assets/curso/puntos2.svg', alt='puntos')
              .col-9
                p.m-0.color.text-bold De este modo, se descarga al dispositivo de almacenamiento de la responsabilidad de escribir datos a disco. NAS utiliza un software cliente que se comunica al servidor NFS mediante red Ethernet.
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema4/t4-17.svg', alt='4-17')      

      .py-4.py-md-5(titulo="Costo y rendimiento" :icono="require('@/assets/curso/tema4/t4-15.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar
            h4 Costo y rendimiento
            p.mb-3 La mayor parte de las plataformas de virtualización soporta NAS. Debido a que NAS es un protocolo muy utilizado, existen diferentes opciones para utilizar un almacenamiento NAS con tus máquinas virtuales: desde un servidor físico convertido en servidor NAS o un dispositivo de almacenamiento dedicado basado en NAS. 
            .row.justify-end
              .col-2.align-items-center
                figure.justify-end
                  img.d-none.d-lg-flex.img50(src='@/assets/curso/puntos7.svg', alt='puntos')
                  img.d-flex.d-lg-none.img50(src='@/assets/curso/puntos2.svg', alt='puntos')
              .col-9
                p.m-0.color.text-bold El coste y rendimiento de cada solución puede variar grandemente siendo los dispositivos dedicados los que ofrecen mayor rendimiento, pero a un coste más alto.
              p.mt-4 En la mayoría de los casos, NAS no ofrece el mismo rendimiento que una red SAN FC pero una arquitectura de red bien configurada puede ofrecer un rendimiento adaptado a tus necesidades. De manera similar a iSCSI, NAS utiliza tarjetas de red para comunicarse con los dispositivos de almacenamiento, por lo tanto tenemos un límite de 1 Gpbs. A diferencia de iSCSI no permite multipathing ofreciendo un rendimiento inferior.
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema4/t4-18.svg', alt='4-17')      

      .py-4.py-md-5(titulo="Desventajas" :icono="require('@/assets/curso/tema4/t4-16.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.order-2.order-md-1.pstar.align-items-center
            div
              h4 Desventajas
              p.mb-3 Entre las desventajas de NAS, no es posible arrancar un servidor directamente desde un dispositivo NAS. Adicionalmente, ciertos fabricantes no recomiendan NAS para ciertas aplicaciones sensibles a latencias. 
          .col-md-4.order-1.order-md-2.mb-3
            figure
              img(src='@/assets/curso/tema4/t4-19.svg', alt='4-17')                
      
    separador

    #t_4_4.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 4.4 Arreglos Raid

    .bg_grad-16.mb-3
      .row
        .col-12-col-md-7.col-lg-7.order-2.order-md-1.mtop
          div.p-2.mb-3
            span.m-0.color_1.mb-3.text-bold RAID es la sigla para #[em “Redundant Array of Independent Disks”. ] 
            span.color_4 Su definición en español sería "Matriz Redundante de Discos Independientes". Se trata de una tecnología que combina varios discos rígidos (HD) para formar una única unidad lógica, donde los mismos datos son almacenados en todos los discos (redundancia). En otras palabras, es un conjunto de discos rígidos que funcionan como si fueran uno solo.
            .row.mt-3
              .col-2.align-items-center
                figure.justify-end
                  img.d-none.d-lg-flex.img40(src='@/assets/curso/puntos9.svg', alt='puntos')
                  img.d-flex.d-lg-none.img50(src='@/assets/curso/puntos1.svg', alt='puntos')
              .col-10
                p.m-0.color.text-bold Este tipo de implementación permite tener una tolerancia alta contra fallas, pues si un disco tiene problemas, los demás continúan funcionando, teniendo el usuario los datos a su disposición como si nada pasara. La tecnología RAID está consolidada hace décadas, ya que surgió de la Universidad de Berkeley, en California (EUA) a finales de la década de 1980.
         
          .bgr_26.p-4.mb-4
            p.m-0 Para conformar el RAID, es preciso utilizar por lo menos 2 discos rígidos. El sistema operativo, en este caso, mezclará los discos como una única unidad lógica. Cuando se graban datos, los mismos se reparten entre los discos del RAID, siempre dependiendo del nivel de RAID adoptado.  
        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="fade-left")
          figure.justify-center
            img(src='@/assets/curso/tema4/t4-20.png', alt='4-20') 

    p Mediante la implementación de RAID, además de garantizar la disponibilidad de los datos en caso de fallo de un disco, es posible también equilibrar el acceso a la información, de forma que no haya “cuellos de botella”.
   

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
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
