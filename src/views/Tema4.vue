<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diagnóstico de aplicación BPG en el predio y bienestar animal
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Buenas Prácticas Ganaderas (BPG) son un conjunto de procedimientos y acciones que una empresa ganadera debe implementar a lo largo del ciclo de vida del animal para garantizar la inocuidad de la carne y minimizar los riesgos biológicos, físicos y químicos en la producción. Estas prácticas incluyen el manejo sanitario, la alimentación, el bienestar animal, la trazabilidad y la sostenibilidad ambiental, asegurando que el estado del predio impacte de manera positiva tanto en la salud del ganado como en la seguridad del consumidor final.
    p.mb-4(data-aos="fade-right") Además de seguir los protocolos establecidos para la certificación del Instituto Colombiano Agropecuario (ICA), los ganaderos deben registrar sus predios ante esta entidad. Este registro es un requisito fundamental para garantizar la legalidad de la actividad ganadera y acceder a beneficios como:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-3.bg-c19
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema4/img1.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 #[b Asistencia técnica especializada]
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-3.bg-c19
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema4/img2.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 #[b Certificaciones de calidad]
      .col-10.col-md-6.col-lg-4(data-aos="fade-left")
        .p-3.bg-c19
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema4/img3.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 #[b Acceso a mercados nacionales e internacionales]
    p.mb-5(data-aos="fade-right") La certificación en BPG no solo mejora la competitividad del sector, sino que también contribuye a la producción de carne segura, sostenible y de alta calidad.
    .row.mb-2.ms-0
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Medidas técnicas para la aplicación de BPG
    p.mb-4(data-aos="fade-right") Para la correcta implementación de las BPG, se deben aplicar las siguientes medidas técnicas:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row
          .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/img2.png", alt="", style="width: 480px").m-auto
          .col-lg.bg-c3
            .row.h-100.align-items-center
              .col-12
                .p-3
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Sanidad animal, instalaciones y áreas.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Identificación del ganado.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Bioseguridad.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Manejo de insumos pecuarios y medicamentos veterinarios.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Buenas prácticas para la alimentación animal.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Saneamiento.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Bienestar animal.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Registro y trazabilidad.
                    li.d-flex
                      i.fas.fa-arrow-circle-right
                      |
                      p.mb-0 Capacitación del personal.
    .row.bg-c32
      .col-12
        .px-5
          .row.mb-2.ms-0
            .col-auto.bg-c4(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0  Diagnóstico de aplicación de BPG
          p.mb-4(data-aos="fade-right") El diagnóstico de la aplicación de las BPG en un predio es fundamental para evaluar su cumplimiento y acercarse a la certificación. Para ello, es necesario revisar los documentos establecidos en la Resolución ICA 068167 de 2020, los cuales incluyen:
          .row.justify-content-center.mb-4(data-aos="fade-right")
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c26.shadow.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema4/img4.svg', alt='', style='width: 80px').m-auto
                p.text-center #[b Anexo I]
                p.text-center.mb-0 Lista de chequeo para la certificación de BPG.
            .col-md-6.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c26.shadow.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema4/img4.svg', alt='', style='width: 80px').m-auto
                p.text-center #[b Anexo II]
                p.text-center.mb-0 Criterios de cumplimiento para la certificación de predios en BPG.
            .col-md-6.col-lg-3
              .p-4.bg-c26.shadow.h-100
                figure.mb-3
                  img(src='@/assets/curso/tema4/img4.svg', alt='', style='width: 80px').m-auto
                p.text-center #[b Anexo III]
                p.text-center.mb-0 Resolución 068167 de 2020.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-left")
              .p-4
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema4/img5.svg', alt='', style='width: 80px').m-auto
                  .col-md
                    p Se recomienda consultar la #[b Resolución 068167 de 2020] para ampliar el conocimiento sobre los criterios de cumplimiento y listas de chequeo en la aplicación de buenas prácticas ganaderas.
                    .row
                      .col-auto
                        a.anexo.mb-4.mb-lg-0.shadow(href="https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8-a7ce15ce1ead/2020R68167.aspx" target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p #[b Enlace web.] Resolución 068167 de 2020

</template>

<script>
export default {
  name: 'Tema4',
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
