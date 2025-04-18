import antfu from '@antfu/eslint-config'

const eslintObj = antfu(
  {
    unocss: {
      strict: true,
      attributify: true,
      sortOrder: [
        'container',
        'position',
        'display',
        'flex',
        'grid',
        'spacing',
        'sizing',
        'typography',
        'backgrounds',
        'borders',
        'effects',
        'filters',
        'transitions',
        'transforms',
        'interactivity',
        'svg',
        'accessibility',
      ],
      attributifyOrder: {
        position: 1,
        display: 2,
        flex: 3,
        grid: 4,
        m: 5,
        p: 5,
        w: 6,
        h: 6,
        font: 7,
        bg: 8,
        border: 9,
        shadow: 10,
        opacity: 11,
        transition: 12,
        transform: 13,
        cursor: 14,
      },
    },
    ignores: [
      'src/vite-env.d.ts',
      'commitlint.config.ts',
      'commitlint.config.js',
    ],
  },
  {
    rules: {
      'vue/html-indent': ['error', 2],
      'indent': ['error', 2],
      'style/indent': ['error', 2],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/html-self-closing': 'off',
      /* demo 项目所以添加一下允许为空的rule */
      'unused-imports/no-unused-vars': 'off',
      'no-empty': 'off',
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)
export default eslintObj
