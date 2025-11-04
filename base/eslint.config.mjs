import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      stylistic: {
        indent: 2, // 4, or 'tab'
        quotes: 'single', // or 'double'
      },
      ignores: [
        'nuxt.config.{js,ts}',
        'graphql/*.ts',
        'graphql.*.json',
        'graphql.*',
        'deployment/**/*',
        '*.yml',
      ],
    },

    {
      rules: {
        'no-console': ["error", { allow: ["warn", "error", "debug"] }],
        'node/prefer-global/process': 'off',
        'unused-imports/no-unused-vars': 'warn',
        'vue/no-multiple-template-roots': 'off',
        // Enforce <template> before <script> (and keep <style> last) in Vue SFCs
        'vue/block-order': ['warn', {
          order: ['template', 'script', 'style'],
        }],
        'vue/order-in-components': ['warn', {
          order: [
            'el',
            'name',
            'key',
            'parent',
            'functional',
            ['delimiters', 'comments'],
            ['components', 'directives', 'filters'],
            'extends',
            'mixins',
            ['provide', 'inject'],
            'ROUTER_GUARDS',
            'layout',
            'middleware',
            'validate',
            'scrollToTop',
            'transition',
            'loading',
            'inheritAttrs',
            'model',
            ['props', 'propsData'],
            'emits',
            'slots',
            'expose',
            'setup',
            'asyncData',
            'data',
            'fetch',
            'head',
            'computed',
            'watch',
            'watchQuery',
            'LIFECYCLE_HOOKS',
            'methods',
            ['template', 'render'],
            'renderError',
          ],
        }],
      },
    },
  ),
)
