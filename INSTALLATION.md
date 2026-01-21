# Installation Guide - Vitrine Furniture Theme

This guide walks you through the process of installing and setting up the Vitrine Furniture theme for Salla.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download](https://git-scm.com/)
- **Salla CLI** - Install globally with `npm install -g @salla.sa/cli`
- **Salla Partner Account** - [Create account](https://salla.partners/)
- **GitHub Account** - [Create account](https://github.com/)

### Verify Installation

Check that everything is installed correctly:

```bash
node --version
npm --version
git --version
salla --version
```

## Step 1: Clone the Repository

Clone the theme repository to your local machine:

```bash
git clone https://github.com/yourusername/salla-vitrine-theme.git
cd salla-vitrine-theme
```

## Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- Salla Twilight framework
- Webpack bundler
- SCSS compiler
- ESLint for code quality
- And other development dependencies

## Step 3: Configure Salla CLI

Log in to your Salla Partner account:

```bash
salla login
```

You'll be prompted to:
1. Enter your Salla Partner email
2. Enter your password
3. Authorize the CLI to access your account

## Step 4: Link Theme to GitHub

The theme must be linked to a GitHub repository for version control:

1. Create a new GitHub repository (if not already done)
2. Add the remote:
   ```bash
   git remote add origin https://github.com/yourusername/salla-vitrine-theme.git
   ```
3. Push the code:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 5: Create Theme in Salla Partners Portal

1. Go to [Salla Partners Portal](https://salla.partners/)
2. Navigate to **My Themes**
3. Click **Create your first theme**
4. Fill in the theme details:
   - **Theme Name**: Vitrine Furniture Theme
   - **Theme Icon**: Upload a 512x512px PNG image
   - **Category**: Furniture & Home Decor
   - **Support Email**: your-email@example.com
5. Connect your GitHub account
6. Select the repository
7. Click **Create Theme**

## Step 6: Preview the Theme

Start the development server to preview your theme:

```bash
npm run dev
```

This command will:
1. Start a local development server
2. Open a preview browser with a demo store
3. Watch for file changes and hot-reload

The preview will be available at the URL shown in your terminal (typically `http://localhost:3000`).

## Step 7: Development Workflow

### File Structure

```
salla-vitrine-theme/
├── views/                    # Twig templates
├── assets/
│   ├── css/                 # SCSS stylesheets
│   ├── js/                  # JavaScript files
│   └── images/              # Image assets
├── twilight.json            # Theme configuration
├── package.json             # Dependencies
└── README.md                # Documentation
```

### Making Changes

1. Edit files in the `views/`, `assets/` directories
2. Changes are automatically detected and reloaded
3. Check the preview browser for updates

### Common Development Tasks

**Build production assets:**
```bash
npm run build
```

**Lint JavaScript code:**
```bash
npm run lint
```

**Watch for changes without preview:**
```bash
npm run watch
```

## Step 8: Testing

### Test on Demo Store

1. The preview browser shows your theme on a demo store
2. Test all functionality:
   - Browse products
   - Add items to cart
   - View cart and checkout
   - Test responsive design

### Test on Real Store

To test on an actual store:

1. Go to Salla Partners Portal
2. Find your theme in **My Themes**
3. Click **Create Demo Store** or link to an existing store
4. Install the theme on the store
5. Test all functionality on the live store

### Mobile Testing

Test on mobile devices:

```bash
# Find your local IP address
ipconfig getifaddr en0  # macOS
hostname -I             # Linux
ipconfig                # Windows

# Access preview on mobile using: http://YOUR_IP:3000
```

## Step 9: Customization

### Update Theme Colors

Edit `assets/css/main.scss`:

```scss
:root {
  --color-primary: #FFC107;      // Change primary color
  --color-secondary: #1A237E;    // Change secondary color
  // ... update other colors
}
```

### Update Theme Information

Edit `twilight.json`:

```json
{
  "name": "Your Theme Name",
  "description": "Your theme description",
  "author": "Your Name",
  "version": "1.0.0"
}
```

### Update Package Information

Edit `package.json`:

```json
{
  "name": "your-theme-name",
  "version": "1.0.0",
  "description": "Your theme description",
  "author": "Your Name"
}
```

## Step 10: Deployment

### Prepare for Production

1. Update version numbers in `package.json` and `twilight.json`
2. Build production assets:
   ```bash
   npm run build
   ```
3. Test thoroughly on demo store
4. Commit changes:
   ```bash
   git add .
   git commit -m "Prepare for production release v1.0.0"
   git push origin main
   ```

### Submit to Salla Marketplace

1. Go to Salla Partners Portal
2. Navigate to **My Themes**
3. Find your theme
4. Click **Submit for Review**
5. Fill in marketplace information:
   - Theme description
   - Features list
   - Screenshots (up to 3)
   - Support information
6. Submit for review

The Salla team will review your theme and provide feedback. Once approved, your theme will be available in the Salla Marketplace.

## Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Issue: Salla CLI not found

**Solution:**
```bash
# Install Salla CLI globally
npm install -g @salla.sa/cli

# Verify installation
salla --version
```

### Issue: Preview not loading

**Solution:**
1. Check if port 3000 is available
2. Kill any process using port 3000
3. Restart the development server: `npm run dev`

### Issue: Styles not updating

**Solution:**
```bash
# Rebuild CSS
npm run build

# Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
# Restart development server
npm run dev
```

### Issue: Git authentication fails

**Solution:**
1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```
2. Add SSH key to GitHub account
3. Use SSH URL for git remote:
   ```bash
   git remote set-url origin git@github.com:yourusername/salla-vitrine-theme.git
   ```

## Next Steps

After successful installation:

1. **Customize the theme** to match your brand
2. **Test thoroughly** on multiple devices and browsers
3. **Optimize performance** using Lighthouse
4. **Submit to marketplace** for broader distribution
5. **Monitor analytics** to track conversions

## Support

For issues or questions:

- Check the [README.md](README.md) for general information
- Review the [Salla Documentation](https://docs.salla.dev/)
- Create an issue on GitHub
- Contact Salla support

## Resources

- [Salla Twilight Documentation](https://docs.salla.dev/)
- [Salla CLI Documentation](https://docs.salla.dev/421877m0)
- [Twig Template Engine](https://twig.symfony.com/)
- [SCSS Documentation](https://sass-lang.com/)
- [Webpack Documentation](https://webpack.js.org/)

---

**Need Help?** Visit the [Salla Community Forum](https://salla.dev/community) or contact support@salla.dev
