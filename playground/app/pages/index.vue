<template>
  <Section>
    <Module
      :start="3"
      padding-top="l"
      padding-bottom="l"
      vertical-alignment="center"
    >
      <Slot
        :width="6"
      >
        <C-Label
          icon="filter-vintage-outline"
          :background="true"
          text="KeyVisual/Text Example #1"
        />
        <C-Headline
          headline="Die <mark>Bedeutung</mark> von null Reibung"
          headline-type="h4"
          headline-tag="h2"
        />
        <C-Text text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />

        <C-Input
          type="text"
          name="prename"
        >
          <template #label>
            Name
          </template>
        </C-Input>

        <C-Input
          type="text"
          name="lastname"
          label="Lastname"
          value="Mustermann"
         />

        <C-Input
          type="number"
          name="phone"
        >
          <template #label>
            Phone number
          </template>
          <template #prefix>
            +49
          </template>
        </C-Input>

        <C-Switch
          label="I agree to the terms and conditions"
          name="terms"
        />

        <C-Select
          label="When we should call back?"
          placeholder="Choose a time slot"
          :options="[
            { label: '18:00 Uhr', value: '18:00' },
            { label: '19:30 Uhr', value: '19:30' },
            { label: '21:15 Uhr', value: '21:15' },
          ]"
        />

        <C-Textarea
          label="Your Message"
        />

        <C-Button
          appearance="primary"
          text="Request callback"
        />
      </Slot>
      <Slot
        :width="6"
      >
        <C-Image
          src="https://placehold.co/600x600/BDBDBD/fff"
          border-radius="m"
        />
      </Slot>
    </Module>
  </Section>
</template>

<script setup lang="ts">
</script>
