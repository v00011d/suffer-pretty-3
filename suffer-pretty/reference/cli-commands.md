# CLI Commands Quick Reference

Most commonly used Shopify CLI commands for theme development.

## Essential Commands

### Start Development Server
```bash
shopify theme dev
```
Starts local development server with hot reload at `http://127.0.0.1:9292`

**Options:**
```bash
shopify theme dev --store=your-store.myshopify.com
shopify theme dev --theme=123456789  # Specific theme ID
shopify theme dev --host=0.0.0.0     # Custom host
shopify theme dev --port=3000        # Custom port
shopify theme dev --live-reload=off  # Disable hot reload
shopify theme dev --open             # Auto-open browser
```

### Push Theme to Shopify
```bash
shopify theme push
```
Deploy local theme to Shopify store.

**Options:**
```bash
shopify theme push --unpublished              # Push as unpublished
shopify theme push --theme=123456789          # Push to specific theme
shopify theme push --only=templates/product.liquid  # Push specific files
shopify theme push --ignore=config/settings_data.json  # Ignore files
shopify theme push --nodelete                 # Don't delete remote files
shopify theme push --json                     # JSON output
shopify theme push --live                     # Push to live theme (dangerous!)
```

### Pull Theme from Shopify
```bash
shopify theme pull
```
Download theme from Shopify to local.

**Options:**
```bash
shopify theme pull --theme=123456789          # Pull specific theme
shopify theme pull --live                     # Pull live theme
shopify theme pull --unpublished              # Pull unpublished theme
shopify theme pull --only=templates/          # Pull specific folder
shopify theme pull --ignore=assets/           # Ignore folder
shopify theme pull --nodelete                 # Don't delete local files
```

### Validate Theme
```bash
shopify theme check
```
Run Theme Check to validate code quality and best practices.

**Options:**
```bash
shopify theme check --list              # List all checks
shopify theme check --category=liquid   # Check specific category
shopify theme check --fail-level=error  # Only fail on errors
shopify theme check --auto-correct      # Auto-fix issues
```

## Theme Management

### List All Themes
```bash
shopify theme list
```
Show all themes on the store with IDs and roles.

### Get Theme Info
```bash
shopify theme info
```
Display details about the current theme.

### Create New Theme
```bash
shopify theme init
```
Create new theme from template.

**Options:**
```bash
shopify theme init my-theme             # Create with name
shopify theme init -u URL               # From GitHub URL
```

### Publish Theme
```bash
shopify theme publish --theme=123456789
```
Make theme live on store.

### Delete Theme
```bash
shopify theme delete --theme=123456789
```
Remove theme from store.

### Rename Theme
```bash
shopify theme rename --theme=123456789 --name="New Name"
```
Change theme name.

### Duplicate Theme
```bash
shopify theme duplicate --theme=123456789
```
Create copy of existing theme.

### Share Theme
```bash
shopify theme share --theme=123456789
```
Generate shareable preview link.

### Open Theme
```bash
shopify theme open --theme=123456789
```
Open theme in browser (editor or preview).

**Options:**
```bash
shopify theme open --editor       # Open in theme editor
shopify theme open --live         # Open live theme
shopify theme open --development  # Open in development mode
```

## Development Tools

### Theme Console
```bash
shopify theme console
```
Interactive Liquid console for testing code.

### Package Theme
```bash
shopify theme package
```
Create ZIP file of theme for distribution.

**Options:**
```bash
shopify theme package --theme=123456789
```

### Profile Theme Performance
```bash
shopify theme profile
```
Analyze theme performance metrics.

### Language Server
```bash
shopify theme language-server
```
Start Liquid language server for IDE integration.

### Pull Metafields
```bash
shopify theme metafields pull
```
Download metafield definitions.

## Common Workflows

### Initial Setup
```bash
# Clone/download theme
shopify theme pull --theme=123456789

# Start development
shopify theme dev
```

### Development Workflow
```bash
# 1. Start dev server
shopify theme dev

# 2. Make changes (auto-reloads)

# 3. Check for issues
shopify theme check

# 4. Push to development theme
shopify theme push --unpublished
```

### Deploy to Production
```bash
# 1. Pull latest from live
shopify theme pull --live

# 2. Merge your changes

# 3. Test thoroughly
shopify theme dev

# 4. Validate
shopify theme check

# 5. Push to unpublished first
shopify theme push --unpublished

# 6. Test on unpublished
shopify theme open

# 7. Publish when ready
shopify theme publish --theme=123456789
```

### Create New Theme
```bash
# Initialize from Dawn
shopify theme init my-new-theme

# Navigate to directory
cd my-new-theme

# Start development
shopify theme dev

# Push when ready
shopify theme push --unpublished
```

## File Filtering

### Push Only Specific Files
```bash
# Single file
shopify theme push --only=templates/product.liquid

# Multiple files
shopify theme push --only=templates/product.liquid --only=sections/header.liquid

# Entire folder
shopify theme push --only=templates/

# Pattern matching
shopify theme push --only=sections/product-*
```

### Ignore Files
```bash
# Single file
shopify theme push --ignore=config/settings_data.json

# Multiple files
shopify theme push --ignore=*.md --ignore=*.txt

# Folder
shopify theme push --ignore=docs/
```

## Configuration

### .shopifyignore File
Create `.shopifyignore` in theme root to permanently ignore files:

```
# .shopifyignore
*.md
*.txt
node_modules/
.git/
.DS_Store
*.log
config/settings_data.json
```

### Environment Variables
```bash
# Set store
export SHOPIFY_FLAG_STORE=your-store.myshopify.com

# Set theme ID
export SHOPIFY_FLAG_THEME_ID=123456789
```

## Troubleshooting

### Connection Issues
```bash
# Re-authenticate
shopify auth logout
shopify auth login

# Specify store explicitly
shopify theme dev --store=your-store.myshopify.com
```

### File Sync Issues
```bash
# Force pull (will overwrite local)
shopify theme pull --nodelete

# Force push (will overwrite remote)
shopify theme push --nodelete
```

### Performance Issues
```bash
# Profile theme
shopify theme profile

# Check specific page
shopify theme profile --url=/products/example
```

## Theme Check Categories

```bash
# All categories
shopify theme check --list

# Check only Liquid
shopify theme check --category=liquid

# Check only performance
shopify theme check --category=performance

# Check only accessibility
shopify theme check --category=accessibility
```

## Tips

1. **Always use `--unpublished` first** - Test before going live
2. **Use `theme check` regularly** - Catch issues early
3. **Create `.shopifyignore`** - Keep repo clean
4. **Never push directly to live** - Use development themes
5. **Use `--only` for quick updates** - Faster than full push
6. **Keep backups** - Use `theme pull` before major changes
7. **Use version control** - Git + Shopify CLI = best workflow
8. **Test in dev mode** - Always use `theme dev` for development
9. **Check before pushing** - Run `theme check` first
10. **Document theme IDs** - Keep track of dev/staging/live themes

## Global Flags

```bash
--store=STORE               # Specify store
--theme=THEME_ID            # Specify theme
--path=PATH                 # Specify theme directory
--password=PASSWORD         # Theme password for password-protected stores
--verbose                   # Detailed output
--json                      # JSON output format
--no-color                  # Disable colored output
```

## More Info

- [Shopify CLI Overview](../docs/cli-tools/Shopify_CLI)
- [theme dev](../docs/cli-tools/cli_-_theme_dev)
- [theme push](../docs/cli-tools/cli_-_theme_push)
- [All CLI Commands](../docs/cli-tools/)
