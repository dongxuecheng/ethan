# ethan

## 项目简介

这是一个使用 Next.js、Tailwind CSS 和 Shadcn UI 组件构建的博客项目。

## 安装和运行

### 克隆仓库

```bash
git clone https://github.com/dongxuecheng/ethan.git
cd ethan
```

### 安装依赖

```bash
npm install
```

### 运行项目

```bash
npm run dev
```

项目将会在 `http://localhost:3000` 上运行。

## 实现的功能

### 页面

- **首页**: 显示欢迎信息。
- **关于页面**: 包含个人简介和技术栈。
- **博客页面**: 显示博客文章列表。

### 组件

- **AboutMeCarousel**: 显示个人技术栈的轮播组件。
- **MyAvatar**: 显示个人头像的组件。
- **BlogPosts**: 显示博客文章列表的组件。

## 使用的技术

- **Next.js**: 用于构建 React 应用的框架。
- **Tailwind CSS**: 用于快速构建样式的 CSS 框架。
- **Radix UI**: 提供一组无样式的、可访问的 UI 组件。

## 项目结构

```
ethan/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── posts/
│   │   │   ├── page.mdx
│   │   │   ├── page1.mdx
│   │   │   └── page2.mdx
│   │   ├── page.tsx
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutMeCarousel.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ModeToggle.tsx
│   ├── MyAvatar.tsx
│   ├── posts.tsx
│   ├── Themeprovider.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── dropdown-menu.tsx
│       ├── hover-card.tsx
│       ├── navigation-menu.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts
├── public/
├── .eslintrc.json
├── .gitignore
├── components.json
├── mdx-components.tsx
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 文件说明

- **app/**: 包含应用的主要页面和全局样式。
  - **about/**: 关于页面。
    - **page.tsx**: 关于页面的主要组件。
  - **blog/**: 博客页面和相关文件。
    - **[slug]/**: 动态路由，用于显示单个博客文章。
      - **page.tsx**: 博客文章页面的主要组件。
    - **posts/**: 博客文章的 Markdown 文件。
      - **page.mdx**: 示例博客文章。
      - **page1.mdx**: 示例博客文章。
      - **page2.mdx**: 示例博客文章。
    - **page.tsx**: 博客页面的主要组件。
    - **utils.ts**: 博客页面的实用工具函数。
  - **globals.css**: 全局样式文件。
  - **layout.tsx**: 应用的布局组件。
  - **page.tsx**: 首页的主要组件。
- **components/**: 可重用的组件。
  - **AboutMeCarousel.tsx**: 显示个人技术栈的轮播组件。
  - **Footer.tsx**: 页脚组件。
  - **Header.tsx**: 页头组件。
  - **ModeToggle.tsx**: 主题切换组件。
  - **MyAvatar.tsx**: 显示个人头像的组件。
  - **posts.tsx**: 显示博客文章列表的组件。
  - **Themeprovider.tsx**: 主题提供者组件。
  - **ui/**: UI 组件。
    - **avatar.tsx**: 头像组件。
    - **badge.tsx**: 徽章组件。
    - **button.tsx**: 按钮组件。
    - **card.tsx**: 卡片组件。
    - **carousel.tsx**: 轮播组件。
    - **dropdown-menu.tsx**: 下拉菜单组件。
    - **hover-card.tsx**: 悬停卡片组件。
    - **navigation-menu.tsx**: 导航菜单组件。
    - **separator.tsx**: 分隔线组件。
- **lib/**: 实用工具函数。
  - **utils.ts**: 实用工具函数。
- **public/**: 静态资源文件夹。
- **.eslintrc.json**: ESLint 配置文件。
- **.gitignore**: Git 忽略文件。
- **components.json**: 组件配置文件。
- **mdx-components.tsx**: MDX 组件配置文件。
- **next.config.mjs**: Next.js 配置文件。
- **package.json**: 项目依赖和脚本。
- **postcss.config.mjs**: PostCSS 配置文件。
- **tailwind.config.ts**: Tailwind CSS 配置文件。
- **tsconfig.json**: TypeScript 配置文件。
- **README.md**: 项目简介和说明文件。
