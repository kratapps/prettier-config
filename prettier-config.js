module.exports = {
    trailingComma: "none",
    overrides: [
        {
            files: "**/*.ts",
            options: {
                printWidth: 140,
                tabWidth: 4,
                singleQuote: true
            }
        },
        {
            files: "**/*.{js,json}",
            options: {
                printWidth: 140,
                tabWidth: 4,
                singleQuote: true
            }
        },
        {
            files: "**/lwc/**/*.html",
            options: {
                parser: "lwc",
                printWidth: 140,
                tabWidth: 4
            }
        },
        {
            files: "**/*.{cls,trigger,apex}",
            options: {
                apexInsertFinalNewline: false,
                printWidth: 140,
                tabWidth: 4
            }
        },
        {
            files: "*.{cmp,page,component}",
            options: {
                parser: "html",
                printWidth: 140,
                tabWidth: 4
            }
        },
        {
            "files": "**/*.xml",
            "options": {
                "xmlSelfClosingSpace": false
            }
        }
    ]
}
