import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      './src/**/*.{html,js,ts,jsx,tsx,vue}',
    ]
  },
  presets: [
    presetUno(),
    presetAttributify()
  ],
  rules: [
    [':focus-visible-none', { outline: 'none' }]
  ]
})
