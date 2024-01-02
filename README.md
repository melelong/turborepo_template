# 自用`Monorepo`模板

这是基于官方的 `Turborepo` 模板改的自用`Monorepo`框架模板

## 使用方法

### 操作全部项目

> 需要在根项目的目录下执行命令

#### 提交git

```sh
pnpm dev
```

#### 升级版本
```sh
pnpm release
```

#### 全部子项目启动

```sh
pnpm dev
```

#### 全部子项目打包命令

```sh
pnpm build
```

#### 启动整个项目docker-compose

```sh
pnpm docker:start
```

#### 停止整个项目docker-compose

```sh
pnpm docker:stop
```

### 操作单个子项目

> 需要在单个子项的目录下执行命令

#### 单个子项目启动

```sh
pnpm dev
```

#### 单个子项目打包命令

```sh
pnpm build
```

### 应用程序(Apps)和包(Packages)

- `docs`: 基于 [vite](https://vitejs.dev) 的 TypeScript 应用程序
- `web`: 另一个基于 [vite](https://vitejs.dev) 的 TypeScript 应用程序
- `nuxt3`：基于 [nuxt3](https://nuxt.com/) 的 TypeScript 应用程序
- `service`：基于 [nest](https://nestjs.com/) 的  TypeScript 服务端接口程序
- `ui`: 由 `web` 和 `docs` 应用程序共享的组件和实用工具库
- `eslint-config-custom`: 共享的 `ESLint` 配置
- `tsconfig`: 整个 Monorepo 中使用的 `tsconfig.json` 文件

### 工具

该 Turborepo 已经为您集成了一些额外的工具：

- [TypeScript](https://www.typescriptlang.org/) 进行静态类型检查
- [ESLint](https://eslint.org/) 进行代码 linting
- [Prettier](https://prettier.io)进行代码格式化
- [Husky](https://typicode.github.io/husky)操作git hooks
- [Commitizen](https://commitizen.github.io/cz-cli)提供git commit模板
- [Commitlint](https://commitlint.js.org/#/)检测git commit规范
- [lint-staged](https://github.com/lint-staged/lint-staged)对git commit 后暂存区
  的代码进行操作
