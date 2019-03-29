// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        "ecmaFeatures": {
            "jsx": true
        }
    },
    env: {
        browser: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended'
    ],
    plugins: [
        'react'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.js'
            }
        }
    },
    // 过滤全局属性校验
    globals: {
        config: true,
        wyplayer: true
    },
    plugins: ["react"],
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            css: 'never',
            less: 'never'
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ]
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
}
