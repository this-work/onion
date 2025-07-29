export const spacingArgumentType: object = {
  options: ['none', 'xxxxl', 'xxxl', 'xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs', 'xxxs', 'xxxxs', 'xxxxxs'],
  control: 'select',
}

export const borderRadiusArgumentType: object = {
  options: ['none', 'round', 'xl', 'l', 'm', 's', 'xs', 'xxs'],
  control: 'select',
  description: 'Ecken Abrundung',
  table: {
    defaultValue: { summary: 'none' },
  },
}

export const colorArgumentType: object = {
  options: ['primary', 'secondary', 'light', 'medium', 'dark', 'success', 'warning', 'danger', 'white', 'black', 'transparent'],
  control: 'select',
}

export const colorModeArgumentType: object = {
  options: ['light', 'medium', 'dark'],
  control: 'select',
}
