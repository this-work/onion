<template>
  <Section>
    <Module :start="3" padding-top="l" padding-bottom="l" vertical-alignment="center">
      <Slot :width="6">
        <C-Label icon="filter-vintage-outline" :background="true" text="KeyVisual/Text Example #1" />
        <C-Headline headline="Die <mark>Bedeutung</mark> von null Reibung" headline-type="h4" headline-tag="h2" />
        <C-Text
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />

        <C-Input type="text" name="prename">
          <template #label>
            Name
          </template>
        </C-Input>

        <C-Input type="text" name="lastname" label="Lastname" value="Mustermann" />

        <C-Input type="number" name="phone">
          <template #label>
            Phone number
          </template>
          <template #prefix>
            +49
          </template>
        </C-Input>

        <C-Switch label="I agree to the terms and conditions" name="terms" />

        <C-Select label="When we should call back?" placeholder="Choose a time slot" :options="[
          { label: '18:00 Uhr', value: '18:00' },
          { label: '19:30 Uhr', value: '19:30' },
          { label: '21:15 Uhr', value: '21:15' },
        ]" />

        <C-Textarea label="Your Message" />

        <C-Button appearance="primary" text="Request callback" />

        <div style="margin-top: var(--spacing-l); display: flex; gap: var(--spacing-s);">
          <C-Button appearance="secondary" text="Small Modal" @click="smallModal?.open()" />
          <C-Button appearance="secondary" text="Large Modal" @click="largeModal?.open()" />
        </div>

        <C-Headline headline="Loading Spinner Test" headline-type="h5" headline-tag="h3"
          style="margin-top: var(--spacing-xl);" />
        <C-Text text="Testing the loading spinner in different button states:" />

        <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-s); margin-top: var(--spacing-m);">
          <C-Button appearance="primary" text="Primary Loading" :loading="true" />
          <C-Button appearance="secondary" text="Secondary Loading" :loading="true" />
          <C-Button appearance="system" text="System Loading" :loading="true" />
          <C-Button appearance="primary" text="Toggle Loading" :loading="isLoading" @click="toggleLoading" />
          <C-Button appearance="secondary" background="outline" text="Outline Loading" :loading="true" />
        </div>

        <C-Headline headline="Prop Reactivity Test (C-Input)" headline-type="h5" headline-tag="h3"
          style="margin-top: var(--spacing-xl);" />
        <C-Text text="Testing C-Input value prop reactivity - the input should update when prop changes:" />

        <C-Input type="number" name="test-input" label="Controlled Input (external value)" :value="inputValue"
          @change="(val) => inputValue = val" style="margin-top: var(--spacing-m);" />

        <div style="display: flex; gap: var(--spacing-s); margin-top: var(--spacing-s);">
          <C-Button appearance="secondary" text="Set to 10" @click="inputValue = '10'" />
          <C-Button appearance="secondary" text="Set to 25" @click="inputValue = '25'" />
          <C-Button appearance="secondary" text="Set to 100" @click="inputValue = '100'" />
          <C-Button appearance="secondary" text="Increment" @click="inputValue = String(Number(inputValue || 0) + 1)" />
        </div>

        <C-Text :text="`Current value: ${inputValue || '(empty)'}`" style="margin-top: var(--spacing-s);" />

        <C-Headline headline="Prop Reactivity Test (C-Switch)" headline-type="h5" headline-tag="h3"
          style="margin-top: var(--spacing-l);" />
        <C-Text text="Testing C-Switch checked prop reactivity - the switch should update when prop changes:" />

        <C-Switch label="Controlled Switch (external state)" name="test-switch" :checked="switchValue"
          @change="(val) => switchValue = val" style="margin-top: var(--spacing-m);" />

        <div style="display: flex; gap: var(--spacing-s); margin-top: var(--spacing-s);">
          <C-Button appearance="secondary" text="Set to ON" @click="switchValue = true" />
          <C-Button appearance="secondary" text="Set to OFF" @click="switchValue = false" />
          <C-Button appearance="secondary" text="Toggle" @click="switchValue = !switchValue" />
        </div>

        <C-Text :text="`Current state: ${switchValue ? 'ON' : 'OFF'}`" style="margin-top: var(--spacing-s);" />
      </Slot>
      <Slot :width="6">
        <C-Headline headline="Image Examples" headline-type="h5" headline-tag="h3"
          style="margin-bottom: var(--spacing-m);" />

        <!-- Original C-Image -->
        <C-Text text="Original C-Image implementation:" style="margin-bottom: var(--spacing-s);" />
        <C-Image src="/test-image.png" border-radius="m" alt="Original image implementation"
          description="Traditional picture element with manual source sets" style="margin-bottom: var(--spacing-l);" />

        <!-- Nuxt Picture Integration -->
        <C-Text text="Nuxt Picture integration (optimized):" style="margin-bottom: var(--spacing-s);" />
        <C-Image :use-nuxt-picture="true" src="/test-image.png" format="webp,avif" :quality="90"
          sizes="sm:100vw md:50vw lg:600px" border-radius="m" alt="Nuxt Picture optimized image"
          description="Optimized with Nuxt Picture - WebP/AVIF formats"
          :img-attrs="{ 'data-testid': 'nuxt-picture-example' }" />
      </Slot>
    </Module>
  </Section>

  <C-Modal ref="smallModal">
    <div style="padding: var(--spacing-m); max-width: 500px;">
      <C-Headline headline="Small Modal with Select" headline-type="h5" style="margin-bottom: var(--spacing-m);" />
      <C-Text text="This modal contains a select with many items to test z-index layering."
        style="margin-bottom: var(--spacing-m);" />

      <C-Select label="Choose a country" placeholder="Select a country" :options="[
        { label: 'Afghanistan', value: 'AF' },
        { label: 'Albania', value: 'AL' },
        { label: 'Algeria', value: 'DZ' },
        { label: 'Andorra', value: 'AD' },
        { label: 'Angola', value: 'AO' },
        { label: 'Argentina', value: 'AR' },
        { label: 'Armenia', value: 'AM' },
        { label: 'Australia', value: 'AU' },
        { label: 'Austria', value: 'AT' },
        { label: 'Azerbaijan', value: 'AZ' },
        { label: 'Bahamas', value: 'BS' },
        { label: 'Bahrain', value: 'BH' },
        { label: 'Bangladesh', value: 'BD' },
        { label: 'Barbados', value: 'BB' },
        { label: 'Belarus', value: 'BY' },
        { label: 'Belgium', value: 'BE' },
        { label: 'Belize', value: 'BZ' },
        { label: 'Benin', value: 'BJ' },
        { label: 'Bhutan', value: 'BT' },
        { label: 'Bolivia', value: 'BO' },
      ]" style="margin-bottom: var(--spacing-m);" />

      <C-Text text="Additional content below the select to test if the dropdown overlays correctly." />
    </div>
  </C-Modal>

  <C-Modal ref="largeModal" :fullwidth="true">
    <div style="padding: var(--spacing-m);">
      <C-Headline headline="Large Modal with Overflow" headline-type="h5" style="margin-bottom: var(--spacing-m);" />
      <C-Text
        text="This modal has a lot of content that will overflow. You should be able to scroll with equal spacing at the top and bottom."
        style="margin-bottom: var(--spacing-m);" />

      <div v-for="i in 20" :key="i" style="margin-bottom: var(--spacing-s);">
        <C-Text
          :text="`Section ${i}: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`" />
      </div>
    </div>
  </C-Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const smallModal = ref<any>(null)
const largeModal = ref<any>(null)
const isLoading = ref(false)

// Prop reactivity tests
const inputValue = ref('0')
const switchValue = ref(false)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>
