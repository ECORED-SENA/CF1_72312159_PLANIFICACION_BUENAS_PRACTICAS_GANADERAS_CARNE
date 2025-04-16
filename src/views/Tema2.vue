<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas ganaderas en la producción de bovinos de carne (BPG) y bienestar animal
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La economía colombiana sigue dependiendo del desarrollo de los sectores primario, secundario y terciario, con la agricultura y la agroindustria como pilares fundamentales. La producción y exportación de bienes de consumo, especialmente alimentos de origen animal, desempeñan un papel clave en la seguridad alimentaria y el crecimiento económico del país.
    .row.align-items-center.mb-5
      .col-md-auto.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 80px').m-auto
      .col-md(data-aos="fade-left")
        p.mb-0 Las #[b Buenas Prácticas Ganaderas (BPG)] comprenden un conjunto de acciones en el eslabón primario de la ganadería bovina, orientadas a garantizar la inocuidad de los productos cárnicos y lácteos, la protección ambiental y el bienestar de los trabajadores del sector. En 2025, la normativa de bienestar animal ha cobrado mayor relevancia, alineándose con estándares internacionales y regulaciones nacionales como:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-4.mb-4.mb-md-0
        .p-2.h-100.px-0.pt-0.bg-c23
          .row.px-0
            .col-12
              .p-3.bg-c21
                p.text-center.mb-0 #[b 2016]
            .col-12
              .p-4
                p.mb-0 #[b Ley 1774 de 2016]
                p.mb-0 Reconoce a los animales como seres sintientes.
      .col-md-6.col-lg-4
        .p-2.h-100.px-0.pt-0.bg-c24
          .row.px-0
            .col-12
              .p-3.bg-c22
                p.text-center.mb-0 #[b 2020]
            .col-12
              .p-4
                p.mb-0 #[b Resolución 136 de 2020 (ICA)]
                p.mb-0 Establece directrices específicas para la protección de los animales en explotaciones ganaderas.
    p.mb-5(data-aos="fade-right") El cumplimiento de estas normativas no solo mejora la calidad y competitividad de la producción, sino que también fortalece la sostenibilidad del sector, promoviendo sistemas ganaderos más eficientes, responsables y alineados con las exigencias del mercado global. Los aspectos clave de las Buenas Prácticas Ganaderas (BPG) son:
    .row.bg-c25
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='', style='width: 350px').m-auto
            .col-lg-8(data-aos="fade-left")
              SlyderF.mb-3(columnas="col-md-6")
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img2.svg' alt='AvatarTop')
                  h2.text-center #[b Competitividad y globalización]
                  p.text-center.mb-0 La demanda de consumo y exportación ha impulsado la necesidad de transformar la ganadería en un sistema altamente competitivo con visión empresarial a largo plazo.
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img3.svg' alt='AvatarTop')
                  h2.text-center #[b Entidad reguladora]
                  p.text-center.mb-0 El Instituto Colombiano Agropecuario (ICA) es el organismo encargado de promover las BPG en Colombia.
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop')
                  h2.text-center #[b Legislación oficial]
                  p.text-center.mb-0 Desde 2007, existe una normativa que exige el cumplimiento de requisitos mínimos para garantizar la calidad e inocuidad de los alimentos, beneficiando la calidad de vida en el sector rural.
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img5.svg' alt='AvatarTop')
                  h2.text-center #[b Cobertura nacional]
                  p.text-center.mb-0 De los 32 departamentos de Colombia, 27 tienen procesos ganaderos importantes, reflejando la relevancia del sector en el territorio.
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
                  h2.text-center #[b Impacto en la salud pública]
                  p.text-center.mb-0 Las BPG favorecen la producción segura de productos agrícolas sin riesgos para la salud de los consumidores.
                .tarjeta.bg-c26.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
                  h2.text-center #[b Normativas vigentes]
                  p.text-center.mb-0 Resolución 3585 de 2008: Aplicable a empresas productoras de leche.
                  p.text-center.mb-0 Resolución 2341 de 2007: Aplicable a empresas de carne.
          Separador
          #t_2_1
          .titulo-segundo.color-acento-contenido
            h2 2.1 Bienestar animal
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .row.h-100.align-items-center.bg-c19
          .col-12
            .p-4
              p.mb-0 El bienestar animal se define como el estado físico y mental de un animal en relación con las condiciones en las que vive y muere (OMSA, 2018). Un animal está en buenas condiciones de bienestar si se encuentra sano, cómodo, bien alimentado, seguro y puede expresar formas innatas de comportamiento.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/img4.png', alt='', style='width: 390px').m-auto
      .col-lg-4(data-aos="fade-left")
        p Las cinco libertades del bienestar animal son:
        ul.lista-ul.mb-4
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Libre de hambre, sed y desnutrición.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Libre de temor y angustia.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Libre de molestias físicas y térmicas.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Libre de dolor, lesión y enfermedad.
          li.d-flex
            i.fas.fa-arrow-circle-right
            |
            p.mb-0 Libre de impedimentos para manifestar un comportamiento natural.
    p.mb-0(data-aos="fade-right") El cumplimiento de estos principios garantiza una producción ganadera responsable y alineada con los estándares de calidad y sostenibilidad exigidos a nivel nacional e internacional.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Componentes BPG
    p.mb-4(data-aos="fade-right") Para la implementación de las #[b Buenas Prácticas Ganaderas (BPG)] es fundamental llevar un #[b registro detallado] de cada una de las actividades relacionadas con el sector ganadero. Además, se debe contar con una planilla de verificación, que permita documentar y controlar cada proceso realizado. A continuación, se presentan los principales componentes a considerar en la aplicación de las BPG:
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QCcIP7JTo-0?si=ZSfVgiT45NDTrxJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .p-4.bg-c27
          .row.align-items-center
            .col-md-auto.mb-3.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img8.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 Es indispensable, en la aplicación de buenas prácticas ganaderas, cumplir con la certificación de acuerdo con el Plan de Ordenamiento Territorial (POT) y locativos.
    .row.bg-c28
      .col-12
        .px-5
          Separador
          #t_2_3
          .titulo-segundo.color-acento-contenido
            h2 2.3 Criterios de cumplimiento y listas de chequeo
          p.mb-4(data-aos="fade-right") Cada empresa ganadera debe contar con un plan y registro de actividades acorde con el cumplimiento de las normas y resoluciones vigentes, garantizando la capacitación y competitividad del personal.
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              .row
                .col-lg-auto.pe-lg-0.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/img6.png", alt="", style="width: 360px").m-auto
                .col-lg.bg-c3
                  .row.h-100.align-items-center
                    .col-12
                      .p-3
                        p Entre los criterios de cumplimiento y listas de chequeo más relevantes se encuentran:
                        p #[b Solicitud y requisitos para la certificación en Buenas Prácticas Ganaderas (BPG)]
                        ul.lista-ul
                          li.d-flex
                            i.fas.fa-arrow-circle-right
                            |
                            p.mb-0 Realizar la solicitud escrita mediante el Formulario Forma-3-138-V-4 dirigido a la gerencia seccional correspondiente al predio.
                          li.d-flex
                            i.fas.fa-arrow-circle-right
                            |
                            p.mb-0 Presentar los documentos exigidos a través de la Ventanilla Única de Trámites del ICA.
          Separador
          #t_2_4
          .titulo-segundo.color-acento-contenido
            h2 2.4 Aplicación de las Buenas Prácticas Ganaderas (BPG)
          p.mb-4(data-aos="fade-right") La aplicación de las BPG tiene como objetivo mejorar los procesos productivos de la empresa ganadera. Para ello, se deben considerar los siguientes lineamientos:
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img9.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Reducción de costos de producción]
          p.text-center.mb-0 La tecnificación incrementa la producción, optimiza el manejo y minimiza enfermedades, asegurando la inocuidad de los alimentos.
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img10.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Mejor rentabilidad]
          p.text-center.mb-0 Mantener a los animales en condiciones higiénicas y de salud evita gastos adicionales y mejora la eficiencia productiva.
      .col-10.col-md-6.col-lg-4.mb-4
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img11.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Mayor valor agregado]
          p.text-center.mb-0 Cumplir con parámetros técnicos mejora la calidad del producto, aumentando su competitividad y atractivo en el mercado.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img12.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Capacitación del personal]
          p.text-center.mb-0 Es fundamental la formación en manejo, ordeño, aislamiento y crianza de animales para optimizar la producción.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img13.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Oportunidades de mercadeo]
          p.text-center.mb-0 Cumplir con estándares internacionales favorece la admisibilidad de productos como carne y leche, fortaleciendo la posición de Colombia como exportado.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c29
          figure.mb-3
            img(src='@/assets/curso/tema2/img14.svg', alt='', style='width: 80px').m-auto
          .row.justify-content-center.mb-3
            .col-auto
              .py-2.px-3.bg-c30
                p.mb-0 #[b Impacto ambiental]
          p.text-center.mb-0 La implementación de BPG minimiza el impacto ambiental, asegurando el cumplimiento de normativas sin afectar los ecosistemas.
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c31
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema2/img15.svg', alt='', style='width: 80px').m-auto
            .col-md
              p.mb-0 La adopción de estos criterios permite a las empresas ganaderas mejorar su productividad, reducir costos y garantizar un producto de alta calidad con acceso a mercados más exigentes.

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
}
</script>

<style lang="sass"></style>
