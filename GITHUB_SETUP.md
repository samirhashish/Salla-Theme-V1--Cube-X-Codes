# GitHub Setup & Deployment Guide

This guide walks you through uploading the Vitrine Furniture Theme to GitHub and preparing it for distribution.

## Prerequisites

- GitHub account (create at https://github.com if needed)
- Git installed on your system
- SSH key configured (optional but recommended)

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to https://github.com/new
2. Fill in repository details:
   - **Repository name**: `salla-vitrine-theme`
   - **Description**: Premium CRO-optimized Salla theme inspired by Vitrine Furniture
   - **Visibility**: Public (for marketplace) or Private (for personal use)
   - **Initialize repository**: Leave unchecked (we have files already)
3. Click **Create repository**

### Option B: Using GitHub CLI

```bash
gh repo create salla-vitrine-theme \
  --public \
  --description "Premium CRO-optimized Salla theme inspired by Vitrine Furniture" \
  --source=. \
  --remote=origin \
  --push
```

## Step 2: Configure Git (First Time Only)

If you haven't configured Git before:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## Step 3: Initialize Git Repository Locally

Navigate to the theme directory and initialize Git:

```bash
cd /home/ubuntu/salla-vitrine-theme

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Vitrine Furniture Theme for Salla

- Product page with image gallery and CRO elements
- Shopping cart with drawer component
- CRO-optimized design system
- Mobile responsive layout
- Trust badges and security indicators
- Newsletter signup
- Comprehensive documentation"
```

## Step 4: Add Remote Repository

Connect your local repository to GitHub:

```bash
# Using HTTPS (simpler for beginners)
git remote add origin https://github.com/yourusername/salla-vitrine-theme.git

# OR using SSH (more secure, requires SSH key setup)
git remote add origin git@github.com:yourusername/salla-vitrine-theme.git
```

Replace `yourusername` with your actual GitHub username.

## Step 5: Push to GitHub

Push your code to GitHub:

```bash
# Set default branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

You may be prompted to authenticate:
- **HTTPS**: Enter your GitHub username and personal access token
- **SSH**: SSH key will be used automatically

## Step 6: Verify Upload

1. Go to https://github.com/yourusername/salla-vitrine-theme
2. Verify all files are present:
   - Documentation files (README.md, INSTALLATION.md, etc.)
   - Source files (views/, assets/)
   - Configuration files (twilight.json, package.json)
   - License and .gitignore

## Step 7: Create Repository Description

Update your repository with a professional description:

1. Go to repository Settings
2. Update the description to:
   ```
   Premium CRO-optimized Salla theme inspired by Vitrine Furniture. 
   Features product page, shopping cart, cart drawer, and conversion optimization techniques.
   ```

3. Add topics (tags):
   - `salla`
   - `ecommerce`
   - `theme`
   - `cro`
   - `furniture`
   - `shopify-alternative`

## Step 8: Add Repository Topics

In repository Settings > About section:

1. Click the gear icon
2. Add topics:
   - salla
   - ecommerce
   - theme
   - cro
   - conversion-optimization
   - furniture

## Step 9: Create Release

Create a release for version 1.0.0:

```bash
# Create a git tag
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial release"

# Push tag to GitHub
git push origin v1.0.0
```

Or create release via GitHub web interface:

1. Go to repository
2. Click **Releases** (right sidebar)
3. Click **Create a new release**
4. Fill in details:
   - **Tag version**: v1.0.0
   - **Release title**: Vitrine Furniture Theme v1.0.0
   - **Description**: 
     ```
     # Initial Release
     
     ## Features
     - CRO-optimized product page
     - Shopping cart with drawer
     - Mobile responsive design
     - Trust badges and security indicators
     - Newsletter integration
     
     ## What's New
     - Product image gallery with zoom
     - Real-time cart updates
     - Sticky promotional banner
     - Responsive navigation menu
     
     ## Installation
     See INSTALLATION.md for detailed setup instructions.
     ```
5. Click **Publish release**

## Step 10: Enable GitHub Pages (Optional)

To host documentation on GitHub Pages:

1. Go to repository Settings
2. Scroll to **GitHub Pages**
3. Select source: **main branch /docs folder** (or root)
4. Documentation will be available at: `https://yourusername.github.io/salla-vitrine-theme`

## Step 11: Add GitHub Actions (Optional)

Create automated workflows for quality checks:

Create `.github/workflows/lint.yml`:

```yaml
name: Lint & Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run lint
```

## Step 12: Create Branch Protection Rules

Protect the main branch:

1. Go to Settings > Branches
2. Click **Add rule**
3. Configure:
   - **Branch name pattern**: `main`
   - **Require pull request reviews**: Yes
   - **Require status checks to pass**: Yes
   - **Require branches to be up to date**: Yes

## Step 13: Set Up Collaborators (Optional)

To add team members:

1. Go to Settings > Collaborators
2. Click **Add people**
3. Enter GitHub username
4. Select permission level:
   - **Pull access**: Read-only
   - **Push access**: Can commit
   - **Admin access**: Full control

## Ongoing Maintenance

### Making Updates

When you make changes to the theme:

```bash
# Make your changes
# Edit files...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add product comparison feature

- Create comparison component
- Add comparison styles
- Update documentation"

# Push to GitHub
git push origin main
```

### Creating Releases

For each new version:

```bash
# Update version in package.json and twilight.json
# Make your changes and commit

# Create tag
git tag -a v1.1.0 -m "Release version 1.1.0"

# Push tag
git push origin v1.1.0

# Create release on GitHub web interface with changelog
```

### Handling Pull Requests

When others contribute:

1. Review the pull request
2. Check for:
   - Code quality
   - Documentation updates
   - No breaking changes
3. Request changes if needed
4. Merge when approved

## Submitting to Salla Marketplace

Once your theme is on GitHub:

1. Go to Salla Partners Portal (https://salla.partners/)
2. Navigate to **My Themes**
3. Click **Create Theme** or **Upload Theme**
4. Connect your GitHub account
5. Select the repository
6. Fill in marketplace details:
   - Theme name
   - Description
   - Category
   - Screenshots (3-5 images)
   - Support email
   - Documentation URL
7. Submit for review

The Salla team will review your theme and provide feedback. Once approved, it will be available in the Salla Marketplace.

## Best Practices

### Commit Messages

Write clear, descriptive commit messages:

```
feat: Add new feature
fix: Fix bug description
docs: Update documentation
style: Code style changes
refactor: Code refactoring
perf: Performance improvements
test: Add tests
```

### Branch Naming

Use descriptive branch names:

```
feature/product-comparison
fix/cart-drawer-mobile
docs/update-readme
```

### Version Numbering

Follow semantic versioning:

```
MAJOR.MINOR.PATCH
1.0.0 - Initial release
1.1.0 - New features
1.0.1 - Bug fixes
2.0.0 - Breaking changes
```

### Documentation

Keep documentation up to date:

- Update README.md with new features
- Update CHANGELOG.md with version history
- Update INSTALLATION.md with new requirements
- Add code comments for complex logic

## Troubleshooting

### Issue: Authentication Failed

**Solution:**
```bash
# For HTTPS, create personal access token:
# 1. Go to GitHub Settings > Developer settings > Personal access tokens
# 2. Generate new token with 'repo' scope
# 3. Use token as password when prompted

# For SSH, ensure key is added:
ssh-keygen -t ed25519 -C "your-email@example.com"
# Add public key to GitHub Settings > SSH and GPG keys
```

### Issue: Large Files

If you have large files (>100MB):

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.psd"
git add .gitattributes

# Commit and push
git add .
git commit -m "Add large files with Git LFS"
git push origin main
```

### Issue: Accidental Commits

If you committed something you shouldn't:

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Force push (use with caution!)
git push origin main --force
```

## Resources

- [GitHub Docs](https://docs.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Create initial release
4. ✅ Set up branch protection
5. ✅ Add documentation
6. ✅ Submit to Salla Marketplace
7. ✅ Monitor for feedback
8. ✅ Maintain and update regularly

---

**Need Help?** 
- Check [GitHub Help](https://help.github.com/)
- Visit [Salla Community](https://salla.dev/community)
- Create an issue on your repository

Good luck with your Salla theme! 🚀
