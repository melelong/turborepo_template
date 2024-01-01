// module.exports = {
//   env: {
//     node: true,
//   },
//   parser: "@typescript-eslint/parser",
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//   ],
//   plugins: ["@typescript-eslint"],
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//   },
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//   },
// };
module.exports = {
  // 该配置项主要用于指示此.eslintrc文件是Eslint在项目内使用的根级别文件，并且 ESLint 不应在该目录之外搜索配置文件
  root: true,
  // 设置开发环境
  env: {
    browser: true, // 设置浏览器环境，如果您的代码是在浏览器中运行的
    node: true, // 设置Node环境，如果您的代码是在Node.js中运行的
    // 其他可能的环境设置...
  },
  // 默认情况下，Eslint使用其内置的 Espree 解析器，该解析器与标准 JavaScript 运行时和版本兼容，而我们需要将ts代码解析为eslint兼容的AST，所以此处我们使用 @typescript-eslint/parser
  parser: '@typescript-eslint/parser',

  // 该配置项告诉eslint我们拓展了哪些指定的配置集，其中
  // eslint:recommended ：该配置集是 ESLint 内置的“推荐”，它打开一组小的、合理的规则，用于检查众所周知的最佳实践
  // @typescript-eslint/recommended：该配置集是typescript-eslint的推荐，它与eslint:recommended相似，但它启用了特定于ts的规则
  // @typescript-eslint/eslint-recommended ：该配置集禁用 eslint:recommended 配置集中已经由 typeScript 处理的规则，防止eslint和typescript之间的冲突
  // prettier（即eslint-config-prettier）关闭所有可能干扰 Prettier 规则的 ESLint 规则，确保将其放在最后，这样它有机会覆盖其他配置集
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    // 'prettier',
  ],
  // 该配置项指示要加载的插件，这里
  // @typescript-eslint 插件使得我们能够在我们的存储库中使用typescript-eslint包定义的规则集。
  // prettier插件（即eslint-plugin-prettier）将 Prettier 规则转换为 ESLint 规则
  plugins: ['@typescript-eslint', 'prettier'],
  // 规则配置
  rules: {
    'prettier/prettier': 'error', // 打开prettier插件提供的规则，该插件从 ESLint 内运行 Prettier

    // 关闭这两个 ESLint 核心规则，这两个规则和prettier插件一起使用会出现问题，具体可参阅
    // https://github.com/prettier/eslint-plugin-prettier/blob/master/README.md#arrow-body-style-and-prefer-arrow-callback-issue
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // 禁止使用 TypeScript 中的 any 类型。any 类型基本上是一个“逃逸口”——它允许你绕过类型检查，这与 TypeScript 强类型的理念相违背，默认是禁止使用any
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': ['error', 'unix'],
  },
};
