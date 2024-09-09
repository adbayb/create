import _import from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import sonarjs from "eslint-plugin-sonarjs";
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";
import { fixupPluginRules, fixupConfigRules } from "@eslint/compat";
import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import deprecation from "eslint-plugin-deprecation";
import tsParser from "@typescript-eslint/parser";
import jestFormatting from "eslint-plugin-jest-formatting";
import vitest from "eslint-plugin-vitest";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:astro/recommended",
), {
    plugins: {
        import: fixupPluginRules(_import),
        jsdoc,
        react,
        "react-hooks": fixupPluginRules(reactHooks),
        sonarjs,
        "sort-keys-custom-order": sortKeysCustomOrder,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.node,
            ...globals.worker,
        },

        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-examples": "off",
        "jsdoc/check-indentation": "error",
        "jsdoc/check-line-alignment": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        "jsdoc/multiline-blocks": "error",
        "jsdoc/no-bad-blocks": "error",
        "jsdoc/no-blank-block-descriptions": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-multi-asterisks": "error",
        "jsdoc/no-types": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "error",
        "jsdoc/require-example": "error",
        "jsdoc/require-hyphen-before-param-description": "error",

        "jsdoc/require-jsdoc": ["off", {
            contexts: [
                "TSTypeAliasDeclaration",
                "TSInterfaceDeclaration",
                "TSMethodSignature",
                "TSPropertySignature",
            ],

            publicOnly: true,

            require: {
                ArrowFunctionExpression: true,
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: true,
                FunctionExpression: true,
                MethodDefinition: true,
            },
        }],

        "jsdoc/require-param": "error",
        "jsdoc/require-param-description": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-returns": "error",
        "jsdoc/require-returns-check": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/require-throws": "error",
        "jsdoc/require-yields": "error",
        "jsdoc/require-yields-check": "error",
        "jsdoc/sort-tags": "error",
        "jsdoc/tag-lines": "error",
        "jsdoc/valid-types": "error",
        "import/export": "error",
        "import/default": "error",
        "import/first": "error",
        "import/named": "error",
        "import/namespace": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-amd": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-commonjs": "error",
        "import/no-cycle": "error",
        "import/no-default-export": "error",
        "import/no-deprecated": "error",
        "import/no-duplicates": "error",
        "import/no-empty-named-blocks": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-import-module-exports": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-namespace": "error",
        "import/no-relative-packages": "error",
        "import/no-self-import": "error",
        "import/no-unassigned-import": "error",

        "import/no-unresolved": ["error", {
            commonjs: true,
        }],

        "import/no-unused-modules": "error",

        "import/no-useless-path-segments": ["error", {
            noUselessIndex: true,
            commonjs: true,
        }],

        "import/no-webpack-loader-syntax": "error",

        "import/order": ["error", {
            alphabetize: {
                order: "asc",
                orderImportKind: "desc",
                caseInsensitive: false,
            },

            "newlines-between": "always",

            groups: [
                ["builtin", "external"],
                "internal",
                "unknown",
                "parent",
                ["sibling", "index"],
            ],
        }],

        "react/display-name": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-fragments": "error",
        "react/jsx-key": "error",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-is-mounted": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/prefer-stateless-function": "error",
        "react/self-closing-comp": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "sonarjs/cognitive-complexity": "error",
        "sonarjs/elseif-without-else": "error",
        "sonarjs/max-switch-cases": "error",
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/no-collapsible-if": "error",
        "sonarjs/no-collection-size-mischeck": "error",

        "sonarjs/no-duplicate-string": ["error", {
            threshold: 5,
        }],

        "sonarjs/no-duplicated-branches": "error",
        "sonarjs/no-element-overwrite": "error",
        "sonarjs/no-extra-arguments": "error",
        "sonarjs/no-gratuitous-expressions": "error",
        "sonarjs/no-identical-conditions": "error",
        "sonarjs/no-identical-functions": "error",
        "sonarjs/no-identical-expressions": "error",
        "sonarjs/no-inverted-boolean-check": "error",
        "sonarjs/no-one-iteration-loop": "error",
        "sonarjs/no-redundant-boolean": "error",
        "sonarjs/no-redundant-jump": "error",
        "sonarjs/no-same-line-conditional": "error",
        "sonarjs/no-small-switch": "error",
        "sonarjs/no-unused-collection": "error",
        "sonarjs/no-use-of-empty-return-value": "error",
        "sonarjs/no-useless-catch": "error",
        "sonarjs/non-existent-operator": "error",
        "sonarjs/prefer-immediate-return": "error",
        "sonarjs/prefer-object-literal": "error",
        "sonarjs/prefer-single-boolean-return": "error",
        "sonarjs/prefer-while": "error",
        "no-alert": "error",
        "no-return-await": "error",
        "no-var": "error",
        "object-shorthand": ["error", "always"],

        "padding-line-between-statements": ["error", {
            blankLine: "always",
            prev: "*",
            next: "*",
        }, {
            blankLine: "never",
            prev: ["const", "let", "var"],
            next: ["const", "let", "var"],
        }, {
            blankLine: "never",
            prev: ["case", "default"],
            next: ["case", "default"],
        }, {
            blankLine: "always",
            prev: ["multiline-const", "multiline-let", "multiline-var"],
            next: ["const", "let", "var"],
        }, {
            blankLine: "always",
            prev: ["const", "let", "var"],
            next: ["multiline-const", "multiline-let", "multiline-var"],
        }, {
            blankLine: "any",
            prev: ["expression"],
            next: ["expression"],
        }, {
            blankLine: "any",
            prev: ["cjs-import"],
            next: ["const", "let", "var"],
        }, {
            blankLine: "any",
            prev: ["cjs-import", "import"],
            next: ["cjs-import", "import"],
        }, {
            blankLine: "any",
            prev: ["cjs-export", "export"],
            next: ["cjs-export", "export"],
        }],

        "prefer-arrow-callback": ["error", {
            allowNamedFunctions: true,
        }],

        "prefer-const": "error",
        "prefer-template": "error",

        "sort-imports": ["error", {
            ignoreDeclarationSort: true,
        }],

        "sort-keys-custom-order/object-keys": ["error", {
            orderedKeys: ["id", "key", "name", "title", "label", "description"],
        }],

        "sort-keys-custom-order/type-keys": ["error", {
            orderedKeys: ["id", "key", "name", "title", "label", "description"],
        }],

        "sort-vars": "error",
    },
}, ...fixupConfigRules(
    compat.extends("plugin:@typescript-eslint/eslint-recommended", "plugin:import/typescript"),
).map(config => ({
    ...config,
    files: ["**/*.ts?(x)"],
})), {
    files: ["**/*.ts?(x)"],

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        deprecation,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            tsconfigRootDir: "/Users/ayoubadib/Developer/stack/applications/stack/config/eslint",
            project: ["./tsconfig.json"],
        },
    },

    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",

        "@typescript-eslint/array-type": ["error", {
            default: "array",
            readonly: "array",
        }],

        "@typescript-eslint/await-thenable": "error",

        "@typescript-eslint/ban-ts-comment": ["error", {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": "allow-with-description",
            "ts-nocheck": "allow-with-description",
            "ts-check": false,
            minimumDescriptionLength: 3,
        }],

        "@typescript-eslint/class-literal-property-style": ["error", "fields"],
        "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],

        "@typescript-eslint/consistent-type-assertions": ["error", {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter",
        }],

        "@typescript-eslint/consistent-type-definitions": ["error", "type"],

        "@typescript-eslint/consistent-type-imports": ["error", {
            disallowTypeAnnotations: true,
            fixStyle: "separate-type-imports",
            prefer: "type-imports",
        }],

        "@typescript-eslint/consistent-type-exports": ["error", {
            fixMixedExportsWithInlineTypeSpecifier: false,
        }],

        "@typescript-eslint/explicit-member-accessibility": ["error", {
            accessibility: "explicit",
        }],

        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "error",

        "@typescript-eslint/no-explicit-any": ["error", {
            fixToUnknown: true,
            ignoreRestArgs: false,
        }],

        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "error",
        "@typescript-eslint/no-unsafe-function-type": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/no-wrapper-object-types": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "class-methods-use-this": "off",
        "@typescript-eslint/class-methods-use-this": "error",
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-object-type": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-throw-literal": "off",
        "@typescript-eslint/only-throw-error": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            ignoreRestSiblings: true,
        }],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "deprecation/deprecation": "error",
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
}, {
    files: ["**/*.test.?(c|m)[jt]s?(x)"],

    plugins: {
        "jest-formatting": jestFormatting,
        vitest,
    },

    rules: {
        "jest-formatting/padding-around-all": "error",

        "vitest/consistent-test-it": ["error", {
            fn: "test",
            withinDescribe: "test",
        }],

        "vitest/expect-expect": "error",

        "vitest/max-nested-describe": ["error", {
            max: 1,
        }],

        "vitest/no-alias-methods": "error",
        "vitest/no-commented-out-tests": "error",
        "vitest/no-conditional-expect": "error",
        "vitest/no-conditional-in-test": "error",
        "vitest/no-conditional-tests": "error",
        "vitest/no-disabled-tests": "error",
        "vitest/no-done-callback": "error",
        "vitest/no-duplicate-hooks": "error",
        "vitest/no-focused-tests": "error",
        "vitest/no-identical-title": "error",
        "vitest/no-import-node-test": "error",
        "vitest/no-mocks-import": "error",
        "vitest/no-standalone-expect": "error",
        "vitest/no-test-return-statement": "error",
        "vitest/prefer-called-with": "error",
        "vitest/prefer-comparison-matcher": "error",
        "vitest/prefer-each": "error",
        "vitest/prefer-equality-matcher": "error",
        "vitest/prefer-hooks-in-order": "error",
        "vitest/prefer-hooks-on-top": "error",
        "vitest/prefer-lowercase-title": "error",
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-strict-equal": "error",
        "vitest/prefer-to-be": "error",
        "vitest/prefer-to-be-object": "error",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        "vitest/prefer-todo": "error",
        "vitest/require-hook": "error",
        "vitest/require-local-test-context-for-concurrent-snapshots": "error",
        "vitest/require-to-throw-message": "error",
        "vitest/require-top-level-describe": "error",
        "vitest/valid-describe-callback": "error",
        "vitest/valid-expect": "error",

        "vitest/valid-title": ["error", {
            mustMatch: {
                test: ["^should "],
            },
        }],
    },
}, {
    files: [
        "examples/**",
        "website/**",
        "**/*.config.ts",
        "**/?(*.)stories.ts?(x)",
        "**/test.ts?(x)",
        "scripts/**",
    ],

    rules: {
        "import/no-default-export": "off",
        "sonarjs/no-duplicate-string": "off",
    },
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },
}, {
    files: ["**/*.c[j|t]s"],

    rules: {
        "import/no-commonjs": "off",
    },
}, ...compat.extends("plugin:mdx/recommended").map(config => ({
    ...config,
    files: ["**/*.md?(x)"],
})), {
    files: ["**/*.md?(x)"],

    settings: {
        "mdx/code-blocks": "off",
    },
}];