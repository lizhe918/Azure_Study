module.exports = {
    './src/**/*.{js,jsx}': [
        'prettier --config ./.prettierrc.json --check',
        'eslint --no-error-on-unmatched-pattern'
    ],
    './src/**/*.{css,scss}': [
        'stylelint --fix'
    ]
};