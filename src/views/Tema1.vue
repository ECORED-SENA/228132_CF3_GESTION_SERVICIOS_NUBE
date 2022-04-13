<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de directorio

    .bg_grad-01
      .row.mb-5
        .col-12.col-lg-5.align-items-center(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema1/t1-1.png', alt='1-1')
        .col-12.col-lg-7(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-3.svg', alt='1-1')
          hr.mt-0.mb-2
          p <em>Active Directory</em> o conocido como Directorio Activo (AD), consiste en una herramienta propiedad de Microsoft (Gigante tecnológico del <em>software</em> proveedores de los sistemas operativos Windows, <em>software</em> ofimático MS Office, entre otros servicios en la nube) que brinda servicios de directorio comúnmente en una red LAN.
          .bgr_5.p-4.mb-4(data-aos="fade-left")
            p.m-0 En el siguiente recurso, encontrará información en detalle del <em>Active Directory</em>, le invitamos a consultarlo:
      
      .row.mb-5.justify-center
        .col-md-5.order-2.order-md-1(data-aos="fade-right")
          SlyderF(columnas="col-12")
            .tarjeta.bgr_24.p-4
              .row.justify-content-center.mb-3
                .col-8.justify-center
                  img.img120(src='@/assets/curso/tema1/t1-4.svg' alt='1-4')
              p.text-center El directorio activo tiene la capacidad de proporcionar un servicio ubicado en uno o varios servidores con capacidad de crear y orquestar objetos como usuarios, equipos o grupos, de tal manera que se pueda gestionar credenciales de inicio de sesión de los equipos conectados en una red

            .tarjeta.bgr_24.p-4
              .row.justify-content-center.mb-3
                .col-8.justify-center
                  img.img120(src='@/assets/curso/tema1/t1-6.svg' alt='1-5')
              p.text-center El directorio activo permite administrar diversas políticas o reglas para los grupos de trabajo y equipos, en toda la red corporativa para la cual se haya determinado el control de dominio al servidor de directorio.

            .tarjeta.bgr_24.p-4
              .row.justify-content-center.mb-3
                .col-8.justify-center
                  img.img120(src='@/assets/curso/tema1/t1-5.svg' alt='1-5')
              p.text-center Está orientada al uso profesional, en entornos de trabajo con importantes recursos informáticos en donde se necesario administrar gran cantidad de equipos en cuanto a actualizaciones o instalación de programas o la creación de archivos centralizados para poder acceder a los recursos de forma remota desde las estaciones de trabajo.
        .col-md-6.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-2.svg', alt='1-2')
    
    p.mb-5 Como puede ver, es la forma ideal de centralizar muchos de los componentes típicos de una red LAN sin necesidad de ir equipo por equipo y evitando que los usuarios puedan hacer lo que quieran en una red.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Conceptos de dominio
    
    .bg_grad-02
      .row.mb-3
        .col-12.col-md-5.col-lg-5(data-aos="fade-right")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-7.png', alt='1-7')
        .col-12-col-md-7.col-lg-7.mtop
          div.p-2.p-md-3.bgr_1
            p.m-0 strong Un controlador de dominio, también conocido como directorio activo (<em>Active Directory</em> por sus siglas en inglés) cumple la función principal de agrupar varios ordenadores en una misma red a lo que se conoce como dominio, el controlador de dominio es capaz de orquestar reglas o políticas para cada dominio que se tenga.
          .row.mt-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/curso/tema1/t1-8.svg', alt='1-8')
                img.d-flex.d-lg-none(src='@/assets/curso/tema1/t1-10.svg', alt='1-8')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold El dominio dentro de #[em.color_1 Active Directory] son varios ordenadores conectados a una red, los cuales cuentan con un equipo servidor para administrar las cuentas de usuario y credenciales de la red. Hasta aquí es todo igual, lo que ocurre es que en una red no solamente podremos tener un dominio, sino varios de ellos. Estos dominios no necesariamente tienen que estar en contacto unos con otros, es más si por ejemplo un dominio (A) tienen acceso a otros dos dominios (B y C), esto no implica que C tenga acceso a B.
      
      .bgr_5.p-4.mb-4(data-aos="zoom-in-up")
        p.m-0 Entonces, cuando se hace referencia a <em>Active Directory</em> también se debe entender como controlador de dominio, en donde se pueden crear distintos dominios y gestionar permisos e interacción en cada uno de ellos. A esta relación entre dominios se le denomina relación de confianza o trust.
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Estructura física y lógica
    
    .bg_grad-03
      .bloque-texto-a.bgr_2.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between 
          .col-lg-8.order-2.order-md-1
            .bloque-texto-a__texto.p-4
              p Los servicios de directorio se pueden presentar en una red la cual puede estar compuesta por una estructura física y lógica. Físicamente los servicios se sirven sobre una topología de red que interconecta los hosts u ordenadores. La estructura lógica es la parte fundamental en los servicios de directorio, desde allí se organizan diversas reglas para los dominios, para facilitar la gestión de dichas reglas se tienen un esquema en el Active Directory compuesto en árboles y bosques.
              p.m-0 Y que se distribuye como se explica en el siguiente recurso didáctico:
          .col-lg-4.mb-4.mb-lg-0.order-1.order-md-2(data-aos="zoom-in-up")
            figure.justify-center
              img(src='@/assets/curso/tema1/t1-11.svg', alt='1-11')
      
      div.bgr_3.p-3.mb-3
        h4.m-0.text-white Bosque en <em>Active Directory</em>

      figure.justify-center.mb-5(data-aos="zoom-in-up")
        img(src='@/assets/curso/tema1/t1-12.svg', alt='1-12')
      
      .row.mb-3.mb-md-5.mb-lg-5
        .col-12.col-md-5.col-lg-5(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-13.png', alt='1-13')
        .col-md-6.mb-5.mb-md-0
          LineaTiempoD.color-acento-contenido
            p.m-0.text-small(numero="1" titulo="Unidad Organizativa") Una Unidad Organizacional (OU) es un objeto contenedor que se usa para organizar objetos (como cuentas de usuario, grupos, equipos, impresoras y otras OU´s.) dentro de un dominio. Las OU proveen un mecanismo sencillo para agrupar usuarios y es la unidad más pequeña a la que se le pueden asignar configuraciones de Políticas de grupo. SANS Institute (2003).
            
            p.m-0.text-small(numero="2" titulo="Árbol") Consiste en uno o varios dominios, organizados jerárquicamente y que dependen de una raíz común, a esto se le conoce como DNS común. De esta manera se pueden diferenciar o identificar un dominio de otro. Por ejemplo, un dominio midominio.local puede tener un subdominio que compone dicho árbol, entonces podría tener otro subdominio así works.midominio.local, y si se tiene otro dominio de nombre otro dominio.local, es fácil identificar que son arboles diferentes con respecto al anterior.
            
            p.m-0.text-small(numero="3" titulo="Bosque") Un bosque se compone de todos los dominios existentes, dentro del servidor de dominio. Se crean relaciones de confianza transitivas o intransitivas que están construidas automáticamente por el directorio activo para cada dominio, las cuales pueden ser modificadas posteriormente.
          .row.mt-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img(src='@/assets/curso/tema1/t1-8.svg', alt='1-14')
            .col-10.col-md-11.col-lg-11
              p.m-0.color En cuanto al árbol, es necesario tener en cuenta que, a través de éste, el directorio activo puede ser dividido o segmentado en partes para optimizar la gestión de recursos, así entonces, un usuario perteneciente a un dominio también puede ser reconocido por los subdominios que pertenezcan al dominio principal.
      
    .tarjeta-avatar-b.mb-5(data-aos="zoom-in-up")
      .tarjeta-avatar-b__img
        img.img120(src='@/assets/curso/tema1/t1-15.svg' alt='1-15')
      .tarjeta.tarjeta--azul
        .p-4
          h2 Unidad organizativa, árbol y bosque
          p Un bosque contiene varios árboles de dominio con nombres diferentes. También, un bosque cuenta por lo menos con un dominio raíz, de tal manera que cuando se instala o configura el primer dominio se crea automáticamente la raíz de un árbol y por encima la raíz de un bosque.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 1.3  Cuentas

    .bg_grad-04.mb-5
      .row.mb-3
        .col-12-col-md-7.col-lg-7.order-2.order-md-1.mtop
          div.p-2
            p.m-0 Dentro de los servicios de directorio, las cuentas hacen referencia a los usuarios digitales a los cuales se les brindara o no el acceso a servicios, sistemas, aplicaciones y funcionalidades dentro de un dominio, y son almacenadas localmente en el servidor de dominio. A las cuentas se les pueden asignar derechos y permisos en un servidor determinado, pero solo en ese servidor.
          .row.mt-3.mb-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-none.d-lg-flex.img30(src='@/assets/curso/tema1/t1-14.svg', alt='1-14')
                img.d-flex.d-lg-none(src='@/assets/curso/tema1/t1-8.svg', alt='1-8')
            .col-10.col-md-11.col-lg-11
              p.m-0.color.text-bold Las cuentas de usuario también sirven para tener mayor control en los servicios y aplicaciones, pues se pueden considerar como entidades de seguridad que se utilizan para proteger y administrar el acceso a los recursos en un servidor independiente o miembro para servicios o usuarios.
          p Las cuentas de usuario se pueden agrupar de la siguiente manera:

        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-17.png', alt='1-17')

    .bg_grad-05.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 1. 
        span Cuentas de usuario
      figure.justify-center(data-aos="zoom-in-up")
        img(src='@/assets/curso/tema1/t1-18.svg', alt='1-18')

    .bg_grad-02
      .row.mb-5
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-19.png', alt='1-19')
        .col-12.col-md-8.col-lg-8.mtop_1
          div.bgr_4.p-2.mb-3
            h4.m-0.text-white Administración de cuentas
          .row.mb-3
            .col-2.col-md-1.col-lg-1.align-items-center
              figure.justify-center
                img.d-flex(src='@/assets/curso/tema1/t1-8.svg', alt='1-8')
            .col-10.col-md-11.col-lg-11.mb-3.position-relative
              p.m-0.color Cuando se instala el servidor de dominio y se configura el dominio, se instalan las cuentas locales predeterminadas, estas cuentas se guardan en el contenedor Usuarios en Usuarios y Equipos de <em>Active Directory.</em> Las cuentas locales predeterminadas se pueden crear, deshabilitar, restablecer y eliminar con la Consola de administración de Microsoft (MMC) de Usuarios y equipos de <em>Active Directory</em> y con herramientas de línea de comandos.
              figure.posit-1
                img.img90(src='@/assets/curso/tema1/t1-20.svg', alt='1-20')
          div.bgr_6.p-4.mb-4
            p.m-0 Visite el recurso que le presentamos a continuación y conozca más sobre la administración de cuentas. Una vez más le insistimos en tomar nota de los aspectos más relevantes. 

    TabsC.color-primario
      .py-3.py-md-4(titulo="Asignación de permisos")
        .row
          .col-md-7.mb-4.mb-md-0.align-items-center.order-2.order-md-1
            div.p-3.p-md-5.p-lg-5
              h2 Asignación de permisos
              p.m-0 Para asignar derechos y permisos a un controlador de dominio local determinado se puede utilizar las funciones disponibles en usuarios y equipos de active directory.
          .col-md-5.order-1.order-md-2
            figure
              img(src='@/assets/curso/tema1/t1-21.svg', alt='1-21')
      .py-3.py-md-4(titulo="Derecho")
        .row
          .col-md-7.mb-4.mb-md-0.align-items-center.order-2.order-md-1
            div.p-3.p-md-5.p-lg-5
              h2 Derecho
              p.m-0 Un derecho autoriza a un usuario a realizar determinadas acciones en un equipo, como hacer una copia de seguridad de archivos y carpetas o apagar un equipo. 
          .col-md-5.order-1.order-md-2
            figure
              img(src='@/assets/curso/tema1/t1-22.svg', alt='1-22')
      .py-3.py-md-4(titulo="Permiso")
        .row
          .col-md-7.mb-4.mb-md-0.order-2.order-md-1
            div.p-3.p-md-5.p-lg-5
              h2 Permiso
              p.m-0 Un permiso de acceso es una regla asociada a un objeto, normalmente un archivo, una carpeta o una impresora, que regula qué usuarios pueden tener acceso al objeto y de qué manera. 
            .bgr_9.p-4
              p.m-0 La administración de cuentas de usuario a través del servidor de dominio es importante ya que desde allí se pueden brindar los derechos y permisos de acceso a los recursos como parte de la gestión de accesos. 
          .col-md-5.position-relative.order-1.order-md-2
            figure
              img(src='@/assets/curso/tema1/t1-23.svg', alt='1-23')
            .row
              .col-auto.posit-3
                a.boton.bgr_4.indicador__container(@click="modal1 = true")
                  span.text-white Ver imagen
                  i.fas.fa-images.color_2
                  .indicador--click(v-if="mostrarIndicador")
            
            ModalA(:abrir-modal.sync="modal1")
              div.justify-center
                figure
                  img.img900(src='@/assets/curso/tema1/t1-26.svg', alt='1-26')
            

    
    .bg_grad-06
      .row.mb-5
        .col-12.col-md-7.col-lg-7.mtop_1.order-2.order-md-1
          div.bgr_4.p-2.mb-3
            h4.m-0.text-white Seguridad en las cuentas y los accesos
          .row.mb-3
            .col-10.col-md-11.col-lg-11.mb-3.position-relative
              p.m-0 Es importante que se protejan las cuentas de dominio, para lo cual se debe restringir y limitar estrictamente la pertenencia a los grupos administradores, administradores de dominio y <em>Enterprise Admins</em>, así como controlar de manera rigurosa dónde y cómo se usan las cuentas de dominio.
            .row
              .col-2.col-md-1.col-lg-1.align-items-center
                figure.justify-center
                  img.d-flex(src='@/assets/curso/tema1/t1-14.svg', alt='1-14')
              .col-10.col-md-11.col-lg-11.mb-3.position-relative
                p.m-0.color En el siguiente recurso didáctico, encuentra algunas de las medidas de seguridad para las cuentas y accesos, veamos.
            figure.posit-2
              img.img90(src='@/assets/curso/tema1/t1-20.svg', alt='1-20')
        .col-12.col-md-5.col-lg-5.order-1.order-md-2(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-24.png', alt='1-24')

    .bg_grad-07
      div.bgr_3.p-3.mb-3
        h4.m-0.text-white Seguridad en las cuentas y los accesos

      ImagenInfografica.color-primario.mb-5
        template(v-slot:imagen)
          figure.justify-center
            img.img900(src='@/assets/curso/tema1/t1-25.svg', alt='1-25')

        .tarjeta.bgr_7.p-3(x="13%" y="44%" numero="01")
          figure.justify-end
            img.img70(src='@/assets/curso/tema1/01.svg', alt='01')
          p.text-white Separar las cuentas de administrador de las de usuarios
        .tarjeta.bgr_7.p-3(x="29.2%" y="11%" numero="02")
          figure.justify-end
            img.img70(src='@/assets/curso/tema1/02.svg', alt='02')
          p.text-white Para los administradores crear hosts de estación de trabajo dedicados.
        .tarjeta.bgr_7.p-3(x="60.8%" y="12%" numero="03")
          figure.justify-end
            img.img70(src='@/assets/curso/tema1/03.svg', alt='03')
          p.text-white Restringir el inicio de sesión de administrador a servidores y estaciones de trabajo bajo control para quienes tienen derecho de uso, por medio de contraseñas seguras y cuando sea aplicable con doble factor de autenticación.
        .tarjeta.bgr_7.p-3(x="75.3%" y="45%" numero="04")
          figure.justify-end
            img.img70(src='@/assets/curso/tema1/04.svg', alt='04')
          p.text-white Para cuentas de administrador deshabilitar el derecho de delegación de cuenta

    separador

    #t_1_4.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 1.4  Directorios y objetos en general

    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema1/t1-27.png', alt='1-27')
      .row.justify-center
        .col-11
          .bgr_10
            p.m-0.p-4 Dentro del controlador de dominio o #[strong.color Active Directory] un objeto es la representación general que se utiliza para referirse a cualquier elemento del directorio sobre el cual se aplican reglas y atributos. Los objetos se pueden agrupar en los siguientes grupos, veamos: 

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.justify-center
                img.img120(src='@/assets/curso/tema1/t1-28.svg', alt='1-28')
          h3.text-center Usuario
          p.text-center Consiste en las credencias de acceso a estaciones de trabajo, aplicaciones o servicios. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.justify-center
                img.img120(src='@/assets/curso/tema1/t1-29.svg', alt='1-29')
          h3.text-center Recursos
          p.text-center Son los elementos a los que los usuarios pueden acceder según los derechos de acceso asignados, estos elementos pueden ser carpetas en red, impresoras, entre otros relacionados.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.justify-center
                img.img120(src='@/assets/curso/tema1/t1-30.svg', alt='1-30')
          h3.text-center Servicios
          p.text-center Consiste en las funcionalidades en red a las que el usuario puede acceder de acuerdo con los derechos de acceso otorgados, entre los cuales pueden ser correo, aplicaciones, sistemas de información, entre otros.
    
    separador

    #t_1_5.titulo-segundo.color-acento-contenido.mb-3(data-aos="fade-right")
      h2 1.5  Políticas de dominio
    
    .bg_grad-02
      .row.mb-5
        .col-12.col-md-4.col-lg-4(data-aos="zoom-in-up")
          figure.justify-center
            img(src='@/assets/curso/tema1/t1-31.png', alt='1-31')
        .col-12.col-md-8.col-lg-8.mtop_1.position-relative
          span.m-0.color.text-bold Las políticas de dominio,  
          | también llamadas de políticas de grupo o reglas del <em>active directory,</em> consisten en las reglas para el control de acceso a recursos y servicios para los usuarios. De toda la gama de políticas de grupo existen algunas que denotan mayor relevancia por su importancia en la seguridad digital, y que se deben seguir como buenas prácticas en la implementación de dominio ya sea local o en la nube, a continuación, se describen algunas de ellas en el siguiente recurso.
          figure.posit-4
            img.img90(src='@/assets/curso/tema1/t1-20.svg', alt='1-20')
    .bg_grad-08
      .tarjeta.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.order-2.order-md-1.mt-4.align-items-center
              div
                h3 Configuraciones de servicios y seguridad por defecto 
                p <em>Active directory</em> es muy popular, esto hace que muchos delincuentes informáticos conozcan las configuraciones de los servicios y seguridad por defecto, aumentando la facilidad de acceso a los sistemas de las organizaciones. Por esto es importante que se revisen todas las funcionalidades y configuraciones del controlador de dominio que vienen por defecto, con el fin de desactivar los servicios y aplicar reglas de seguridad que sean mejores.
            figure.posit-5
              img.img200(src='@/assets/curso/tema1/01-1.svg', alt='1-32')
            .col-md-5.order-1.order-md-2.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-32.svg', alt='01-1')
              
          .row
            .col-md-5.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-33.svg', alt='1-32')
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.mt-4.align-items-center
              div
                h3 Cuentas de acceso privilegiado 
                p La gestión de cuentas, utiliza cuentas con acceso privilegiado para que se puedan administrar las funcionalidades del directorio activo, pero considerando el factor humano como uno de los vectores de ataque más vulnerables, se debe evitar dar acceso privilegiado a demasiadas cuentas, ya que aumenta el riesgo de que los hackers utilicen ataques de ingeniería social y roben alguna de estas cuentas con accesos privilegiados. Así entonces, se debe elegir con rigurosidad las cuentas que en verdad necesiten acceso privilegiado.
            figure.posit-6
              img.img200(src='@/assets/curso/tema1/02-2.svg', alt='02-2')

          .row
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.order-2.order-md-1.mt-4.align-items-center
              div
                h3 Contraseñas seguras 
                p El uso de contraseñas es uno de los principales factores de seguridad de los usuarios para el acceso seguro a los recursos en la red (Aplicaciones, servicios, etc.), por eso se deben aplicar políticas en el directorio activo para obligar a los usuarios a utilizar contraseñas robustas.
            figure.posit-7
              img.img200(src='@/assets/curso/tema1/03-3.svg', alt='03-3')
            .col-md-5.order-1.order-md-2.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-34.svg', alt='1-34')      

          .row
            .col-md-5.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-35.svg', alt='1-35')
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.mt-4.align-items-center
              div
                h3 Acceso remoto 
                p Se deben crear las políticas para asegurar el acceso remoto seguro de usuarios a los servidores y hosts que requieran permitirse este tipo de conexiones.
            figure.posit-8
              img.img200(src='@/assets/curso/tema1/04-4.svg', alt='04-4')

          .row
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.order-2.order-md-1.mt-4.align-items-center
              div
                h3 Caducidad de contraseñas 
                p Se deben configurar las políticas para que las contraseñas sean cambiadas periódicamente, por lo general se da un tiempo de caducidad de 90 días.
            figure.posit-9
              img.img200(src='@/assets/curso/tema1/05-5.svg', alt='05-5')
            .col-md-5.order-1.order-md-2.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-36.svg', alt='1-36')  
          
          .row
            .col-md-5.align-items-center
              figure
                img(src='@/assets/curso/tema1/t1-37.svg', alt='1-37')
            .col-md-7.mb-md-0.cajon-b.color-primario.p-3.mb-5.mt-4.align-items-center
              div
                h3 Registro de eventos
                p Es importante activar el registro de eventos para aquellos componentes que sean vital de revisar en caso de que se presenten sucesos adversos.
            figure.posit-8
              img.img200(src='@/assets/curso/tema1/06-6.svg', alt='06-6')

    .bg_grad-05
      .tarjeta.bgr_11.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/t1-38.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0.text-white
                h3.mb-1 Introducción a AD DS
                p.text-small Se recomienda seguir la guía rápida de Microsoft que encuentra en el material complementario y que puede consultar a través del siguiente enlace para conocer más sobre el directorio activo, los servicios de dominio y sus políticas.   
              .col-sm-auto
                a.boton.color-acento-botones.text-black(href="https://docs.microsoft.com/en-us/learn/modules/introduction-to-ad-ds/" target="_blank")
                  span Abrir enlace
                  i.fas.fa-link
    
      .row
        .col-12.col-md-5.col-lg-5(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema1/t1-39.png', alt='1-39')
        .col-md-7.mb-5.mb-md-0
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Relaciones de confianza")
              .col-md-12.mb-4.mb-md-0
                p.text-small Existen entre dos dominios / bosques de <em>Active Directory</em> la relación de confianza, que consiste en un vínculo de confianza el cual permite a los usuarios autenticados acceder a los recursos de otro dominio.
                p.text-small Las relaciones de confianza pueden ser:
                figure
                  img(src='@/assets/curso/tema1/t1-40.svg', alt='1-40')
            .row(numero="2" titulo="Replicación de objetos")
              .col-md-12.mb-4.mb-md-0
                span.text-bold.text-small.color #[em Active directory ] 
                span.color_4.text-small puede ser replicado por medio del método de transferir y actualizar objetos del controlador de dominio a otro controlador de dominio, por ejemplo, se podría replicar un controlador de dominio local a uno en la nube.
                .bgr_5.p-4
                  p.m-0.text-small Algo fundamental para la correcta replicación de objetos son las conexiones entre los controladores de dominios, ya que se apropian con base en la ubicación de los dominios dentro de un bosque. Los dominios deben estar conectados por medio de una o más subredes, de esta manera estarán en segmentos de red por medio de intervalo de direcciones IP asociadas al dominio. Cuando se asigna el direccionamiento IP de un controlador de dominio a una subred, 
                    span.color.text-bold <em>Active Directory</em> reconoce los controladores de dominio que se encuentran en asociados a los dominios. 
                    span Las conexiones de los dominio o sitios son configuradas de manera que se interconecten para garantizar la replicación de los objetos de #[em.color.text-bold Active Directory] de los dominios.
            
            .row(numero="3" titulo="Redundancia")
              .col-md-12.mb-4.mb-md-0
                p.text-small La redundancia en servicios de directorio o en #[em.color.text-bold Active Directory] consiste en una estrategia para garantizar la disponibilidad del controlador de dominio, por medio de la agregación de controladores de dominio adicionales alternos a un dominio, mejorando las solicitudes de autenticación y búsquedas en el servidor del catálogo global. 
                p.text-small.color.mb-4.mb-md-5.mb-lg-5.text-bold También ayuda a que los servicios de dominio de <em>Active Directory</em> resuelvan problemas o errores de <em>hardware, software</em> o del administrador (SysAdmin).
                .bloque-texto-e.bgr_12.p-4
                  .bloque-texto-e__texto.position-relative.pt-5
                    img.posit-10(src='@/assets/curso/tema1/t1-41.svg', alt='1-41')
                    p.text-small.text-white Una de las opciones para la redundancia es realizar #[strong “Configuración de redundancia geográfica con Replicación de SQL Server”] como lo sugiere Microsoft en su portal, la compañía asegura lo siguiente, #[strong “Si usa SQL Server como base de datos de configuración de AD FS] #[em (Active Directory Federation Services)], #[strong puede configurar la redundancia geográfica para la granja de servidores AD FS mediante SQL Server replicación. La redundancia geográfica replica los datos entre dos sitios geográficamente lejanos para que las aplicaciones puedan cambiar de un sitio a otro. De este modo, en caso de error de un sitio, todavía puede tener todos los datos de configuración disponibles en el segundo sitio.”] 
                    div.pt-5.justify-end
                      p.text-white.text.small Microsoft (2021)
                      i.color_3.fas.fa-square-full
                .bgr_5.p-4.mt-3
                  p.m-0.text-small Otras formas de replicación involucran la instalación y configuración de servidores de controladores de dominio en sitios o nubes alternas.
            

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
