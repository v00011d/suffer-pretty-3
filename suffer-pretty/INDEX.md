# Documentation Index

Complete categorized index of all Shopify development documentation in this repository.

## Table of Contents

- [Theme Development](#-theme-development)
- [Liquid Templating](#-liquid-templating)
- [Forms & UI Components](#-forms--ui-components)
- [Polaris Web Components](#-polaris-web-components)
- [API References](#-api-references)
- [CLI Tools](#-cli-tools)
- [App Development](#-app-development)
- [General Guides](#-general-guides)
- [Quick References](#-quick-references)

---

## 🎨 Theme Development

Essential guides for building and customizing Shopify themes.

| Document | Description |
|----------|-------------|
| [Theme Architecture](docs/themes/Theme_architecture) | Complete guide to Shopify theme structure, files, and organization |
| [Best Practices for Building Shopify Themes](docs/themes/Best_practices_for_building_Shopify_themes) | Recommended patterns and practices for theme development |
| [Customize a Merchant Theme](docs/themes/Customize_a_merchant_theme) | Guide to customizing existing Shopify themes |
| [Storefront Performance](docs/themes/Storefront_performance) | Optimization techniques for fast-loading storefronts |
| [Tools for Building Shopify Themes](docs/themes/Tools_for_building_Shopify_themes) | Overview of development tools and utilities |
| [Shopify Liquid VS Code Extension](docs/themes/Shopify_Liquid_VS_Code_extension) | VS Code extension for Liquid development |

**Quick Start**: Begin with Theme Architecture → Best Practices → Storefront Performance

---

## 💧 Liquid Templating

Liquid template language reference and object documentation.

| Document | Description |
|----------|-------------|
| [Liquid Reference](docs/liquid/Liquid_reference) | Complete Liquid syntax, filters, tags, and operators reference |
| [Liquid Objects: Product](docs/liquid/Liquid_objects__product) | Product object properties and methods |
| [Liquid Objects: Variant](docs/liquid/Liquid_objects__variant) | Product variant object properties and methods |

**Quick Reference**: [Liquid Cheatsheet](reference/liquid-cheatsheet.md) for common syntax

---

## 🧩 Forms & UI Components

UI extension components for building forms, layouts, and interactive elements.

### Form Components

| Component | Description |
|-----------|-------------|
| [Form](docs/ui-components/Form) | Form container and validation |
| [TextField](docs/ui-components/TextField) | Single-line text input |
| [TextArea](docs/ui-components/TextArea) | Multi-line text input |
| [EmailField](docs/ui-components/EmailField) | Email input with validation |
| [PasswordField](docs/ui-components/PasswordField) | Password input field |
| [URLField](docs/ui-components/URLField) | URL input with validation |
| [NumberField](docs/ui-components/NumberField) | Numeric input field |
| [MoneyField](docs/ui-components/MoneyField) | Currency input field |
| [DateField](docs/ui-components/DateField) | Date input field |
| [DatePicker](docs/ui-components/DatePicker) | Interactive date picker |
| [Checkbox](docs/ui-components/Checkbox) | Checkbox input |
| [ChoiceList](docs/ui-components/ChoiceList) | Radio buttons or checkboxes group |
| [ColorPicker](docs/ui-components/ColorPicker) | Color selection input |
| [Select](docs/ui-components/Select) | Dropdown select menu |

### Action Components

| Component | Description |
|-----------|-------------|
| [Button](docs/ui-components/Button) | Action button with variants |
| [Link](docs/ui-components/Link) | Hyperlink component |
| [Pressable](docs/ui-components/Pressable) | Clickable container |

### Layout Components

| Component | Description |
|-----------|-------------|
| [BlockStack](docs/ui-components/BlockStack) | Vertical stack layout |
| [InlineStack](docs/ui-components/InlineStack) | Horizontal stack layout |
| [Box](docs/ui-components/Box) | Container with spacing and styling |
| [Section](docs/ui-components/Section) | Content section with header |
| [Divider](docs/ui-components/Divider) | Visual separator |

### Display Components

| Component | Description |
|-----------|-------------|
| [Badge](docs/ui-components/Badge) | Status or label badge |
| [Banner](docs/ui-components/Banner) | Alert or notification banner |
| [Icon](docs/ui-components/Icon) | Icon display |
| [Image](docs/ui-components/Image) | Image with optimization |
| [Text](docs/ui-components/Text) | Text with typography styles |
| [Heading](docs/ui-components/Heading) | Heading text |
| [HeadingGroup](docs/ui-components/HeadingGroup) | Grouped headings |
| [Paragraph](docs/ui-components/Paragraph) | Paragraph text |
| [ProgressIndicator](docs/ui-components/ProgressIndicator) | Loading indicator |

### Admin Components

| Component | Description |
|-----------|-------------|
| [AdminAction](docs/ui-components/AdminAction) | Admin action extension point |
| [AdminBlock](docs/ui-components/AdminBlock) | Admin block extension |
| [AdminPrintAction](docs/ui-components/AdminPrintAction) | Print action for admin |
| [FunctionSettings](docs/ui-components/FunctionSettings) | Shopify Functions settings UI |

**Quick Reference**: [Forms Quick Reference](reference/forms-quick-reference.md)

---

## 🎭 Polaris Web Components

Complete Polaris design system components as web components for admin interfaces.

### Form Controls

| Component | Description |
|-----------|-------------|
| [Polaris: TextField](docs/polaris-components/Polaris_web_components_-_TextField) | Polaris text input |
| [Polaris: TextArea](docs/polaris-components/Polaris_web_components_-_TextArea) | Polaris multi-line text |
| [Polaris: EmailField](docs/polaris-components/Polaris_web_components_-_EmailField) | Polaris email input |
| [Polaris: PasswordField](docs/polaris-components/Polaris_web_components_-_PasswordField) | Polaris password input |
| [Polaris: URLField](docs/polaris-components/Polaris_web_components_-_URLField) | Polaris URL input |
| [Polaris: NumberField](docs/polaris-components/Polaris_web_components_-_NumberField) | Polaris number input |
| [Polaris: MoneyField](docs/polaris-components/Polaris_web_components_-_MoneyField) | Polaris money input |
| [Polaris: SearchField](docs/polaris-components/Polaris_web_components_-_SearchField) | Polaris search input |
| [Polaris: ColorField](docs/polaris-components/Polaris_web_components_-_ColorField) | Polaris color input |
| [Polaris: ColorPicker](docs/polaris-components/Polaris_web_components_-_ColorPicker) | Polaris color picker |
| [Polaris: DateField](docs/polaris-components/Polaris_web_components_-_DateField) | Polaris date input |
| [Polaris: DatePicker](docs/polaris-components/Polaris_web_components_-_DatePicker) | Polaris date picker |
| [Polaris: Checkbox](docs/polaris-components/Polaris_web_components_-_Checkbox) | Polaris checkbox |
| [Polaris: Switch](docs/polaris-components/Polaris_web_components_-_Switch) | Polaris toggle switch |
| [Polaris: ChoiceList](docs/polaris-components/Polaris_web_components_-_ChoiceList) | Polaris choice list |
| [Polaris: Select](docs/polaris-components/Polaris_web_components_-_Select) | Polaris select dropdown |
| [Polaris: Form](docs/polaris-components/Polaris_web_components_-_Form) | Polaris form container |

### Action Components

| Component | Description |
|-----------|-------------|
| [Polaris: Button](docs/polaris-components/Polaris_web_components_-_Button) | Polaris button |
| [Polaris: ButtonGroup](docs/polaris-components/Polaris_web_components_-_ButtonGroup) | Polaris button group |
| [Polaris: Link](docs/polaris-components/Polaris_web_components_-_Link) | Polaris link |
| [Polaris: Clickable](docs/polaris-components/Polaris_web_components_-_Clickable) | Polaris clickable wrapper |
| [Polaris: ClickableChip](docs/polaris-components/Polaris_web_components_-_ClickableChip) | Polaris clickable chip |
| [Polaris: Chip](docs/polaris-components/Polaris_web_components_-_Chip) | Polaris chip element |
| [Polaris: Menu](docs/polaris-components/Polaris_web_components_-_Menu) | Polaris menu |

### Layout Components

| Component | Description |
|-----------|-------------|
| [Polaris: Box](docs/polaris-components/Polaris_web_components_-_Box) | Polaris box container |
| [Polaris: Stack](docs/polaris-components/Polaris_web_components_-_Stack) | Polaris stack layout |
| [Polaris: Grid](docs/polaris-components/Polaris_web_components_-_Grid) | Polaris grid layout |
| [Polaris: Section](docs/polaris-components/Polaris_web_components_-_Section) | Polaris section |
| [Polaris: Divider](docs/polaris-components/Polaris_web_components_-_Divider) | Polaris divider |

### Display Components

| Component | Description |
|-----------|-------------|
| [Polaris: Badge](docs/polaris-components/Polaris_web_components_-_Badge) | Polaris badge |
| [Polaris: Banner](docs/polaris-components/Polaris_web_components_-_Banner) | Polaris banner |
| [Polaris: Avatar](docs/polaris-components/Polaris_web_components_-_Avatar) | Polaris avatar image |
| [Polaris: Icon](docs/polaris-components/Polaris_web_components_-_Icon) | Polaris icon |
| [Polaris: Image](docs/polaris-components/Polaris_web_components_-_Image) | Polaris image |
| [Polaris: Thumbnail](docs/polaris-components/Polaris_web_components_-_Thumbnail) | Polaris thumbnail |
| [Polaris: Spinner](docs/polaris-components/Polaris_web_components_-_Spinner) | Polaris loading spinner |
| [Polaris: Tooltip](docs/polaris-components/Polaris_web_components_-_Tooltip) | Polaris tooltip |

### Typography Components

| Component | Description |
|-----------|-------------|
| [Polaris: Text](docs/polaris-components/Polaris_web_components_-_Text) | Polaris text element |
| [Polaris: Heading](docs/polaris-components/Polaris_web_components_-_Heading) | Polaris heading |
| [Polaris: Paragraph](docs/polaris-components/Polaris_web_components_-_Paragraph) | Polaris paragraph |
| [Polaris: OrderedList](docs/polaris-components/Polaris_web_components_-_OrderedList) | Polaris ordered list |
| [Polaris: UnorderedList](docs/polaris-components/Polaris_web_components_-_UnorderedList) | Polaris unordered list |

### Data Display

| Component | Description |
|-----------|-------------|
| [Polaris: Table](docs/polaris-components/Polaris_web_components_-_Table) | Polaris data table |
| [Polaris: QueryContainer](docs/polaris-components/Polaris_web_components_-_QueryContainer) | Polaris query container |

### Admin Extensions

| Component | Description |
|-----------|-------------|
| [Polaris: AdminAction](docs/polaris-components/Polaris_web_components_-_AdminAction) | Polaris admin action |
| [Polaris: AdminBlock](docs/polaris-components/Polaris_web_components_-_AdminBlock) | Polaris admin block |
| [Polaris: AdminPrintAction](docs/polaris-components/Polaris_web_components_-_AdminPrintAction) | Polaris print action |
| [Polaris: FunctionSettings](docs/polaris-components/Polaris_web_components_-_FunctionSettings) | Polaris function settings |

**Quick Reference**: [Component Gallery](reference/component-gallery.md)

---

## 🔌 API References

API documentation for Shopify's various APIs and integrations.

| Document | Description |
|----------|-------------|
| [GraphQL Admin API Reference](docs/api-references/GraphQL_Admin_API_reference) | GraphQL Admin API queries and mutations |
| [Function APIs](docs/api-references/Function_APIs) | Shopify Functions API reference |
| [Partner API Reference](docs/api-references/Partner_API_reference) | Partner API for managing apps and themes |
| [Payments Apps API Reference](docs/api-references/Payments_Apps_API_reference) | Payment gateway integration APIs |
| [Webhooks](docs/api-references/Webhooks) | Webhook events and subscriptions |
| [Shopify API Libraries & Tools](docs/api-references/Shopify_API__libraries__and_tools) | Official API client libraries and SDKs |

**Quick Reference**: [API Quick Reference](reference/api-quick-reference.md)

---

## 🛠️ CLI Tools

Shopify CLI command reference for theme development workflow.

### Essential Commands

| Command | Description |
|---------|-------------|
| [theme dev](docs/cli-tools/cli_-_theme_dev) | Start local development server with hot reload |
| [theme push](docs/cli-tools/cli_-_theme_push) | Deploy theme to Shopify store |
| [theme pull](docs/cli-tools/cli_-_theme_pull) | Download theme from Shopify store |
| [theme check](docs/cli-tools/cli_-_theme_check) | Validate theme code and best practices |

### Theme Management

| Command | Description |
|---------|-------------|
| [theme init](docs/cli-tools/cli_-_theme_init) | Create new theme from template |
| [theme list](docs/cli-tools/cli_-_theme_list) | List all themes on store |
| [theme info](docs/cli-tools/cli_-_theme_info) | Show theme details |
| [theme open](docs/cli-tools/cli_-_theme_open) | Open theme in browser |
| [theme publish](docs/cli-tools/cli_-_theme_publish) | Publish theme as live |
| [theme delete](docs/cli-tools/cli_-_theme_delete) | Delete theme from store |
| [theme rename](docs/cli-tools/cli_-_theme_rename) | Rename theme |
| [theme duplicate](docs/cli-tools/cli_-_theme_duplicate) | Duplicate existing theme |
| [theme share](docs/cli-tools/cli_-_theme_share) | Generate shareable preview link |

### Development Tools

| Command | Description |
|---------|-------------|
| [theme console](docs/cli-tools/cli_-_theme_console) | Interactive Liquid console |
| [theme package](docs/cli-tools/cli_-_theme_package) | Package theme as ZIP file |
| [theme profile](docs/cli-tools/cli_-_theme_profile) | Profile theme performance |
| [theme language-server](docs/cli-tools/cli_-_theme_language-server) | Start Liquid language server |
| [theme metafields pull](docs/cli-tools/cli_-_theme_metafields_pull) | Download metafield definitions |

### General CLI

| Document | Description |
|----------|-------------|
| [Shopify CLI](docs/cli-tools/Shopify_CLI) | Overview of Shopify CLI and installation |

**Quick Reference**: [CLI Commands](reference/cli-commands.md)

---

## 📱 App Development

Guides for building Shopify apps, extensions, and integrations.

### Extensions

| Document | Description |
|----------|-------------|
| [Admin UI Extensions](docs/apps/Admin_UI_extensions) | Build custom admin interfaces |
| [Build an Admin Action UI Extension](docs/apps/Build_an_admin_action_UI_extension) | Step-by-step admin action extension guide |
| [Apps in Checkout](docs/apps/Apps_in_checkout) | Checkout UI extensions and customization |
| [Apps in the Online Store](docs/apps/Apps_in_the_online_store) | Storefront app extensions |
| [Apps in POS](docs/apps/Apps_in_POS) | Point of Sale app integrations |

### App Frameworks

| Document | Description |
|----------|-------------|
| [Shopify App Package for Remix](docs/apps/_Shopify_App_package_for_Remix) | Build apps with Remix framework |
| [Shopify App Package for React Router](docs/apps/Shopify_App_package_for_React_Router) | Build apps with React Router |
| [Shopify App Bridge](docs/apps/_Shopify_App_Bridge) | Embedded app communication |

### Shopify Functions

| Document | Description |
|----------|-------------|
| [About Shopify Functions](docs/apps/About_Shopify_Functions) | Overview of Shopify Functions |
| [Customer Segment Template](docs/apps/CustomerSegmentTemplate) | Customer segmentation functions |
| [Targets Overview](docs/apps/Targets_Overview) | Available function targets and extension points |

### Automation & Analytics

| Document | Description |
|----------|-------------|
| [About Flow](docs/apps/About_Flow) | Shopify Flow automation |
| [About ShopifyQL for Analytics](docs/apps/About_ShopifyQL_for_analytics) | Query language for analytics |
| [Build Web Pixels](docs/apps/Build_web_pixels) | Custom analytics and tracking pixels |

### Specialized Apps

| Document | Description |
|----------|-------------|
| [Building Apps for Customer Accounts](docs/apps/Building_apps_for_customer_accounts) | Customer account extensions |

---

## 📘 General Guides

General development resources and tools.

| Document | Description |
|----------|-------------|
| [Hydrogen](docs/general/_Hydrogen) | React-based framework for custom storefronts |
| [Hydrogen React](docs/general/Hydrogen_React) | React components for Shopify storefronts |
| [Connect Your Store](docs/general/Connect_your_store) | Guide to connecting development store |
| [Support Product Variants](docs/general/Support_product_variants) | Working with product variants |
| [Enhanced Shopify Storefront Web Components Rules](docs/general/Enhanced_Shopify_Storefront_Web_Components_Rules) | Web component guidelines |
| [Use Polaris with Shopify Dev MCP Server](docs/general/Use_Polaris_with_the_Shopify_dev_MCP_server) | MCP server integration |
| [Shopify Cart](docs/general/shopify-cart) | Cart functionality and APIs |
| [Overview](docs/general/Overview) | General Shopify development overview |

---

## ⚡ Quick References

Condensed guides for rapid development (in `/reference` folder).

| Guide | Description |
|-------|-------------|
| [Liquid Cheatsheet](reference/liquid-cheatsheet.md) | Common Liquid filters, tags, and syntax |
| [Forms Quick Reference](reference/forms-quick-reference.md) | Form components and validation patterns |
| [CLI Commands](reference/cli-commands.md) | Most-used Shopify CLI commands |
| [API Quick Reference](reference/api-quick-reference.md) | Common GraphQL queries and mutations |
| [Component Gallery](reference/component-gallery.md) | Visual guide to UI components |

---

## 🔍 Search Tips

### By Topic
- **Forms**: Check [Forms & UI Components](#-forms--ui-components) section
- **Styling**: See [Polaris Components](#-polaris-web-components) section
- **Templates**: Check [Liquid Templating](#-liquid-templating) section
- **CLI**: Browse [CLI Tools](#-cli-tools) section
- **APIs**: See [API References](#-api-references) section

### By Use Case
- **Building booking forms**: Form + DateField + TextField + Button
- **Product pages**: Liquid Objects (Product/Variant) + Theme Architecture
- **Custom checkout**: Apps in Checkout + Admin UI Extensions
- **Performance**: Storefront Performance + Theme Best Practices
- **Local development**: theme dev + theme check

### Using Grep
```bash
# Find all mentions of a term
grep -r "search term" docs/

# Search in specific category
grep -r "validation" docs/ui-components/

# Case-insensitive search
grep -ri "liquid filter" docs/liquid/
```

---

**Total Files Indexed**: 155+
**Last Updated**: November 2025

For repository structure and quick start, see [README.md](README.md)
