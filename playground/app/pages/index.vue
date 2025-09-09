<template>
  <Section>
    <Module
      :start="3"
      padding-top="l"
      padding-bottom="l"
    >
      <Slot
        :width="4"
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " />
        <C-Button
          appearance="primary"
          text="Primary button"
        />
      </Slot>
      <Slot
        :width="4"
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " />
        <C-Button
          appearance="secondary"
          text="Secondary button"
        />
      </Slot>
      <Slot
        :width="4"
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " />
      </Slot>
    </Module>
    <Module
      :start="3"
      padding-top="l"
      padding-bottom="l"
      vertical-alignment="center"
    >
      <Slot
        :width="6"
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
      </Slot>
      <Slot
        :width="6"
      >
        <C-Icon name="filter-vintage-outline" size="xl" />
        <C-Label
          icon="filter-vintage-outline"
          :background="true"
          text="KeyVisual/Text Example #1"
        />
        <C-Headline
          headline="Die <mark>Bedeutung</mark> von null Reibung"
          headline-type="h2"
          headline-tag="h2"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " />
        <C-Button
          appearance="primary"
          text="Primary button"
        />
      </Slot>
    </Module>
    <Module
      padding-top="l"
      padding-bottom="l"
    >
      <Slot
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " />
        <C-Button
          appearance="primary"
          text="Primary button"
        />
      </Slot>
    </Module>
  </Section>
  <Section :full-viewport-height="true" :full-viewport-width="true">
    <Module :start="0" vertical-alignment="center">
      <Slot :width="18" :row="1" :column="0">
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
        />
      </Slot>
      <Slot :width="14" :row="1" :column="2">
        <C-Label :background="false" text="122131" />
        <C-Headline headline="324433" headlineType="h4" />
      </Slot>
    </Module>
  </Section>
</template>

<script setup lang="ts">
</script>
