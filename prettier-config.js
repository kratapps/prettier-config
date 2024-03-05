module.exports = {
    "plugins": ['@trivago/prettier-plugin-sort-imports'],
    "trailingComma": "none",
    "importOrder": [
        "^lwc$",
        "^@salesforce(.*)$",
        "^lightning/(.*)$",
        "^@(.*)/(.*)$",
        "^c/(.*)",
        "^[./]"
    ],
    "importOrderParserPlugins": ["decorators"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "overrides": [
        {
            "files": "**/*.css",
            "options": {
                "tabWidth": 4
            }
        },
        {
            "files": "**/*.ts",
            "options": {
                "parser": "babel-ts",
                "printWidth": 140,
                "tabWidth": 4,
                "singleQuote": true
            }
        },
        {
            "files": "**/*.tsx",
            "options": {
                "parser": "babel-ts",
                "printWidth": 140,
                "tabWidth": 4,
                "singleQuote": true
            }
        },
        {
            "files": "**/*.js",
            "options": {
                "printWidth": 140,
                "tabWidth": 4,
                "singleQuote": true
            }
        },
        {
            "files": "**/*.json",
            "options": {
                "printWidth": 140,
                "tabWidth": 2,
                "singleQuote": true
            }
        },
        {
            "files": "**/lwc/**/*.html",
            "options": {
                "parser": "lwc",
                "printWidth": 140,
                "tabWidth": 4
            }
        },
        {
            "files": "**/*.{cls,trigger,apex}",
            "options": {
                "apexInsertFinalNewline": false,
                "printWidth": 140,
                "tabWidth": 4
            }
        },
        {
            "files": "*.{cmp,page,component}",
            "options": {
                "parser": "html",
                "printWidth": 140,
                "tabWidth": 4
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

