module.exports = {
    printWidth: 120,
    trailingComma: 'all',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.yaml', '*.yml', '*.json', '.babelrc'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
