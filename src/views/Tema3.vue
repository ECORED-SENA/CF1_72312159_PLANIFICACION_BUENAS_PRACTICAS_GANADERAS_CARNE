<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Recursos para la implementación de BPG
    p.mb-4(data-aos="fade-right") La implementación de las BPG requiere la aplicación de recursos clave que favorecen la prevención y control de enfermedades, garantizando el bienestar de los animales y el personal. Estos recursos incluyen #[b registro y control de animales, aislamiento de animales enfermos, asepsia de instalaciones y medidas de bienestar animal]. A continuación, se presenta la clasificación de los recursos necesarios para la aplicación de las #[b BPG]:
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8
          p.text-center.mb-0 #[b Instalaciones y manejo animal]
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c12
          p.text-center.mb-0 #[b Bienestar y sanidad animal]
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
        .p-4.bg-c8
          p.text-center.mb-0 #[b Alimentación]
      .col-10.col-md-6.col-lg-3
        .p-4.bg-c12
          p.text-center.mb-0 #[b Saneamiento básico]
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c8.h-100
          p.text-center.mb-0 #[b Manejo integrado de plagas (MIP)]
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c12
          p.text-center.mb-0 #[b Medicamentos y almacenamiento de insumos]
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
        .p-4.bg-c8.h-100
          p.text-center.mb-0 #[b Trazabilidad]
    p.mb-4(data-aos="fade-right") Los tipos de recursos y su uso en la implementación de las #[b BPG].
    .row.align-items-center.mb-4
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 360px').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Sanidad")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Reduce la incidencia de enfermedades mediante protocolos de bioseguridad, vacunación y control sanitario.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Disminuye el uso indiscriminado de antibióticos, contribuyendo a la seguridad alimentaria y a la reducción del riesgo de resistencia antimicrobiana.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Garantiza la trazabilidad del producto, permitiendo un mejor control en caso de brotes sanitarios.
          .row(titulo="Ambiental")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Promueve el uso sostenible de recursos como el agua y el suelo, reduciendo la huella ecológica de la producción.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Contribuye a la mitigación del cambio climático mediante prácticas como el manejo adecuado de residuos y la rotación de pasturas.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Fomenta la conservación de la biodiversidad y el mantenimiento de ecosistemas saludables.
          .row(titulo="Socioeconómico")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Mejora la competitividad y facilita el acceso a mercados nacionales e internacionales que exigen certificaciones de calidad.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Genera confianza en los consumidores al garantizar productos con altos estándares de inocuidad y bienestar animal.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Fortalece el desarrollo rural mediante la generación de empleo y mejores condiciones laborales.
                li.d-flex
                  i.fas.fa-arrow-circle-right
                  |
                  p.mb-0 Facilita el acceso a incentivos y financiamiento por parte de entidades gubernamentales y organismos internacionales.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c11
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img1.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 La adecuada gestión de estos recursos permite a las empresas ganaderas mejorar la eficiencia productiva, garantizar el cumplimiento normativo y contribuir a la sostenibilidad del sector.

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
