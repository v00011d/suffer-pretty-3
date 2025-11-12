# Shopify Theme Development Documentation

A well-organized reference repository for building Shopify themes, containing comprehensive documentation for APIs, Liquid templating, UI components, CLI tools, and theme development best practices.

## 📚 Repository Structure

```
shopify-docs/
├── docs/              # All documentation files organized by category
│   ├── api-references/       # Shopify API documentation
│   ├── apps/                 # App development guides
│   ├── cli-tools/            # Shopify CLI command references
│   ├── general/              # General guides and tools
│   ├── liquid/               # Liquid templating documentation
│   ├── polaris-components/   # Polaris web components
│   ├── themes/               # Theme development guides
│   └── ui-components/        # UI extension components
├── reference/         # Quick-reference guides (see below)
├── INDEX.md          # Categorized documentation index with links
└── README.md         # This file
```

## 🚀 Quick Start

### For Theme Development
1. Start with [`docs/themes/Theme_architecture`](docs/themes/Theme_architecture) to understand Shopify theme structure
2. Review [`docs/themes/Best_practices_for_building_Shopify_themes`](docs/themes/Best_practices_for_building_Shopify_themes)
3. Reference [`docs/liquid/Liquid_reference`](docs/liquid/Liquid_reference) for templating syntax
4. Check [`reference/liquid-cheatsheet.md`](reference/liquid-cheatsheet.md) for quick Liquid syntax lookup

### For Building Forms & UI
1. Browse [`docs/ui-components/`](docs/ui-components/) for available components
2. See [`docs/ui-components/Form`](docs/ui-components/Form) for form handling
3. Check [`reference/forms-quick-reference.md`](reference/forms-quick-reference.md) for common patterns

### For CLI Workflow
1. See [`docs/cli-tools/cli_-_theme_dev`](docs/cli-tools/cli_-_theme_dev) for local development
2. Use [`docs/cli-tools/cli_-_theme_push`](docs/cli-tools/cli_-_theme_push) for deployment
3. Reference [`reference/cli-commands.md`](reference/cli-commands.md) for quick command lookup

## 📖 Documentation Categories

### 🔌 API References (6 files)
GraphQL Admin API, Partner API, Payments API, Function APIs, Webhooks, and API libraries.
- [`docs/api-references/`](docs/api-references/)

### 🎨 Themes (6 files)
Theme architecture, best practices, customization, performance optimization, and development tools.
- [`docs/themes/`](docs/themes/)

### 💧 Liquid (3 files)
Liquid templating language reference, product objects, variant objects, and template syntax.
- [`docs/liquid/`](docs/liquid/)

### 🧩 UI Components (35 files)
Form fields, buttons, layout components, and interactive elements for UI extensions.
- [`docs/ui-components/`](docs/ui-components/)

### 🎭 Polaris Components (48 files)
Complete Polaris design system web components for building admin interfaces.
- [`docs/polaris-components/`](docs/polaris-components/)

### 🛠️ CLI Tools (19 files)
Shopify CLI command documentation for theme development workflow.
- [`docs/cli-tools/`](docs/cli-tools/)

### 📱 Apps (15 files)
App development guides including checkout extensions, POS apps, Functions, and admin extensions.
- [`docs/apps/`](docs/apps/)

### 📘 General (8 files)
Hydrogen, React components, storefront web components, and general development guides.
- [`docs/general/`](docs/general/)

## 🔍 Finding What You Need

### Use INDEX.md
The [`INDEX.md`](INDEX.md) file provides a comprehensive categorized listing of all documentation with direct links and descriptions.

### Quick Reference Guides
The [`reference/`](reference/) folder contains curated quick-reference guides:
- **Liquid Cheatsheet**: Common Liquid filters, tags, and objects
- **Forms Quick Reference**: Form component patterns and validation
- **CLI Commands**: Most-used Shopify CLI commands
- **API Quick Reference**: Common GraphQL queries and mutations
- **Component Gallery**: Visual guide to available UI components

### Search Tips
- **By feature**: Check INDEX.md categories
- **By component name**: Look in `docs/ui-components/` or `docs/polaris-components/`
- **By CLI command**: Browse `docs/cli-tools/`
- **By API**: Check `docs/api-references/`
- **Use grep**: `grep -r "search term" docs/`

## 🎯 Common Use Cases

### Building a Custom Booking Form
1. [`docs/ui-components/Form`](docs/ui-components/Form) - Form structure
2. [`docs/ui-components/DateField`](docs/ui-components/DateField) - Date picker
3. [`docs/ui-components/TextField`](docs/ui-components/TextField) - Text input
4. [`docs/ui-components/Button`](docs/ui-components/Button) - Submit button
5. [`reference/forms-quick-reference.md`](reference/forms-quick-reference.md) - Complete form patterns

### Customizing Product Pages
1. [`docs/themes/Theme_architecture`](docs/themes/Theme_architecture) - Template structure
2. [`docs/liquid/Liquid_objects__product`](docs/liquid/Liquid_objects__product) - Product data
3. [`docs/liquid/Liquid_objects__variant`](docs/liquid/Liquid_objects__variant) - Variant handling
4. [`reference/liquid-cheatsheet.md`](reference/liquid-cheatsheet.md) - Quick syntax

### Working with APIs
1. [`docs/api-references/GraphQL_Admin_API_reference`](docs/api-references/GraphQL_Admin_API_reference)
2. [`docs/api-references/Function_APIs`](docs/api-references/Function_APIs)
3. [`reference/api-quick-reference.md`](reference/api-quick-reference.md)

### Theme Development Workflow
1. [`docs/cli-tools/cli_-_theme_dev`](docs/cli-tools/cli_-_theme_dev) - Start local server
2. [`docs/cli-tools/cli_-_theme_check`](docs/cli-tools/cli_-_theme_check) - Validate theme
3. [`docs/cli-tools/cli_-_theme_push`](docs/cli-tools/cli_-_theme_push) - Deploy changes
4. [`reference/cli-commands.md`](reference/cli-commands.md) - Command reference

## 🔧 Technologies Covered

- **Liquid** - Shopify's templating language
- **React** - For app UI components
- **GraphQL** - For API queries and mutations
- **Polaris** - Shopify's design system
- **Shopify CLI** - Command-line development tools
- **Hydrogen** - React-based framework for custom storefronts
- **Web Components** - For building extensions

## 💡 Tips for Efficient Reference

1. **Bookmark frequently used files** in your editor or browser
2. **Use the INDEX.md** for quick navigation to topics
3. **Check reference/ folder first** for quick answers
4. **Keep this repo local** for offline access during development
5. **Use grep or editor search** to find specific terms across all docs
6. **Read Theme_architecture first** if you're new to Shopify themes

## 📋 File Count

- **Total Documentation Files**: 155+
- **API References**: 6
- **Theme Guides**: 6
- **Liquid Docs**: 3
- **UI Components**: 35
- **Polaris Components**: 48
- **CLI Commands**: 19
- **App Development**: 15
- **General Guides**: 8
- **Quick References**: 5

## 🤝 Contributing

This is a curated reference repository. To add notes or examples:
1. Create a new branch
2. Add your notes in the appropriate `docs/` subfolder
3. Update INDEX.md if adding new files
4. Commit with clear descriptions

## 📝 Updates

All documentation is sourced from official Shopify developer resources and organized for optimal developer workflow.

**Last Updated**: November 2025

---

**Happy Theme Building! 🎨✨**

For detailed documentation index, see [INDEX.md](INDEX.md)
