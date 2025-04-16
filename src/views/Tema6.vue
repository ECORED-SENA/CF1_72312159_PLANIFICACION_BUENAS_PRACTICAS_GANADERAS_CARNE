<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Reglamentación enfocada en la seguridad del personal ganadero
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .row
          .col-lg.bg-c34
            .p-3
              p.mb-0 La certificación en BPG no solo cubre la producción y el bienestar animal, sino que también establece normativas para la seguridad y salud en el trabajo (SST), asegurando condiciones laborales óptimas para los trabajadores del sector ganadero.
          .col-lg-auto.ps-lg-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema6/img1.png', alt='', style='width: 230px').m-auto
    p.mb-4(data-aos="fade-right") Las exigencias de la norma en Seguridad y Salud en el Trabajo (SST) son:
    .row.align-items-center.mb-4
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img2.png', alt='', style='width: 360px').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Identificación y prevención de riesgos laborales")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Evaluación de peligros asociados a la actividad ganadera: manipulación de animales, uso de maquinaria, exposición a químicos y condiciones extremas.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Implementación de medidas de control para reducir accidentes y enfermedades laborales.
          .row(titulo="Capacitación y formación del personal")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Entrenamiento en el uso seguro de equipos, manejo de animales, prevención de zoonosis y respuesta ante emergencias.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Sensibilización sobre higiene y uso adecuado de #[b elementos de protección personal (EPP)].
          .row(titulo="Uso obligatorio de elementos de protección personal (EPP)")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Dotación de equipos de protección: guantes, botas, gafas, tapabocas y ropa adecuada.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Supervisión del cumplimiento de normas de bioseguridad en el manejo de insumos y contacto con animales.
          .row(titulo="Condiciones de infraestructura y bienestar laboral")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Áreas de trabajo seguras y adecuadas para la manipulación del ganado y almacenamiento de insumos veterinarios.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Espacios de descanso, acceso a agua potable y condiciones higiénicas en los lugares de trabajo.
          .row(titulo="Gestión de emergencias y primeros auxilios")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Planes de contingencia y protocolos de atención ante accidentes.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Botiquines de primeros auxilios en áreas estratégicas de la finca.
    .row.bg-c35.mb-4
      .col-12
        .px-5
          p.mb-4(data-aos="fade-right") La normativa sobre seguridad y salud en el trabajo en la ganadería de carne es:
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            p.mb-0 #[b Tabla 2.] Normativa en SST para ganadería de carne
          .tabla-a.color-acento-contenido(data-aos="fade-left")
            table
              thead
                tr
                  th(width="25%") Regulación
                  th Descripción
              tbody
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Resolución 000550 de 2006]
                  td
                    p.txt-c1 Control de la brucelosis en Colombia.
                tr.bg-white
                  td
                    p.txt-c1.mb-0 #[b Resolución 072 de 2007]
                  td
                    p.txt-c1 Manual de buenas prácticas de manejo para la producción y obtención de piel de ganado bovino y bufalino.
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Resolución 2905 de 2007]
                  td
                    p.txt-c1 Reglamento técnico sobre requisitos sanitarios e inocuidad de la carne y productos cárnicos comestibles.
                tr.bg-white
                  td
                    p.txt-c1.mb-0 #[b Decreto 1500 de 2007]
                  td
                    p.txt-c1 Creación del Sistema Oficial de Inspección, Vigilancia y Control de carne y productos cárnicos para el consumo humano.
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Resolución 18119 de 2007]
                  td
                    p.txt-c1 Requisitos del Plan Gradual de Cumplimiento para plantas de beneficio y desposte de bovinos y bufalinos.
                tr.bg-white
                  td
                    p.txt-c1.mb-0 #[b Decreto 2278 de 1982]
                  td
                    p.txt-c1 Reglamentación parcial del título V de la Ley 09 de 1979 sobre sacrificio de animales y comercialización de carne.
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Decreto 0616 de 2006]
                  td
                    p.txt-c1 Reglamento técnico de requisitos sanitarios para la leche de consumo humano.
                tr.bg-white
                  td
                    p.txt-c1.mb-0 #[b Decreto 02838 de 2006]
                  td
                    p.txt-c1 Modificación parcial del Decreto 616 de 2006.
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Decreto 2964 de 2008]
                  td
                    p.txt-c1 Modificación parcial del Decreto 2838 de 2006.
                tr.bg-white
                  td
                    p.txt-c1.mb-0 #[b Resolución 0312 de 2019]
                  td
                    p.txt-c1 Establece estándares mínimos en SST para el sector agropecuario.
                tr.bg-c36
                  td
                    p.txt-c1.mb-0 #[b Decreto 1072 de 2015]
                  td
                    p.txt-c1 Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .p-4.bg-c31
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema6/img1.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 FEDEGAN, en conjunto con el ICA, apoya las acciones sanitarias que deben cumplir las plantas de beneficio y los carniceros, asegurando el cumplimiento de normativas nacionales e internacionales.
    .row.bg-c37
      .col-12
        .px-5
          .row.mb-2.ms-0
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Elementos de protección personal (EPP) en ganadería de carne
          p.mb-4(data-aos="fade-right") El uso de EPP es obligatorio en el manejo de productos cárnicos, siguiendo las normativas de Seguridad y Salud en el Trabajo (SST) y Manejo Integrado de Plagas (MIP).
          SlyderF.mb-4(columnas="col-md-6 col-lg-4")(data-aos="fade-left")
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img2.svg' alt='AvatarTop')
              h2.text-center #[b Botas de caucho]
              p.text-center.mb-0 Protección ante humedad, suciedad y contacto con residuos biológicos.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img3.svg' alt='AvatarTop')
              h2.text-center #[b Overol]
              p.text-center.mb-0 Cubre y protege la ropa del trabajador.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img4.svg' alt='AvatarTop')
              h2.text-center #[b Guantes]
              p.text-center.mb-0 Evita contacto con productos químicos y agentes biológicos.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img5.svg' alt='AvatarTop')
              h2.text-center #[b Gorra]
              p.text-center.mb-0 Previene contaminación en productos cárnicos.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img6.svg' alt='AvatarTop')
              h2.text-center #[b Tapabocas]
              p.text-center.mb-0 Reduce el riesgo de inhalación de partículas y microorganismos.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img7.svg' alt='AvatarTop')
              h2.text-center #[b Gafas]
              p.text-center.mb-0 Protege los ojos de salpicaduras y partículas.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img8.svg' alt='AvatarTop')
              h2.text-center #[b Peto o delantal plástico]
              p.text-center.mb-0 Protege el cuerpo de sustancias líquidas y contaminantes.
            .tarjeta.bg-c1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema6/img9.svg' alt='AvatarTop')
              h2.text-center #[b Dotación (jean y camibuso)]
              p.text-center.mb-0 Vestimenta resistente y adecuada para el trabajo en el campo.
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-10
              .p-4.bg-c31
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema6/img10.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p.mb-0 Estos implementos deben complementarse con productos desinfectantes y utensilios de limpieza industrial, garantizando condiciones óptimas de higiene y seguridad en la producción ganadera.
    

</template>

<script>
export default {
  name: 'Tema6',
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
