# Salla Theme Import Guide - Step by Step

## Quick Import Steps

Follow these exact steps to import your theme from GitHub to Salla Partners:

### Step 1: Prepare Your GitHub Repository

✅ Your repository is already set up:
- **Repository**: https://github.com/samirhashish/Salla-Theme-V1--Cube-X-Codes
- **Branch**: main
- **Files**: All theme files are present

### Step 2: Connect to Salla Partners

1. Go to: https://salla.partners/
2. Log in with your account
3. Navigate to: **My Themes** (from left sidebar)
4. Click: **Create New Theme** or **Import from GitHub**

### Step 3: Connect GitHub Account

1. Click: **Connect GitHub Account**
2. Authorize Salla to access your repositories
3. Select your repository: `Salla-Theme-V1--Cube-X-Codes`
4. Select branch: `main`

### Step 4: Theme Configuration

Fill in the following information:

**Basic Information:**
- Theme Name: `Vitrine Furniture Theme`
- Description: `Premium CRO-optimized Salla theme inspired by Vitrine Furniture. Features product page, shopping cart, cart drawer, and conversion optimization techniques.`
- Version: `1.0.0`
- Author: `Cube X Codes`

**Theme Details:**
- Category: `Furniture & Home Decor`
- Support Email: `support@cubexcodes.com`
- Support URL: `https://github.com/samirhashish/Salla-Theme-V1--Cube-X-Codes`

**Features:**
- ✅ Responsive Design
- ✅ CRO Optimized
- ✅ Accessibility Compliant
- ✅ SEO Friendly
- ✅ Performance Optimized

### Step 5: Upload Screenshots

Upload 3-5 screenshots showing:
1. Homepage/Product listing
2. Product detail page
3. Shopping cart
4. Mobile view
5. Checkout page

### Step 6: Submit for Review

1. Review all information
2. Click: **Submit for Review**
3. Wait for Salla team approval (usually 2-3 business days)

---

## Troubleshooting

### Issue: "Error in theme JSON format"

**Solution:**
The `twilight.json` file has been simplified to the minimal format:

```json
{
  "name": "Vitrine Furniture Theme",
  "description": "Premium CRO-optimized Salla theme inspired by Vitrine Furniture",
  "version": "1.0.0",
  "author": "Cube X Codes",
  "license": "MIT"
}
```

If you still get the error:
1. Delete the theme from Salla Partners
2. Wait 5 minutes
3. Try importing again
4. Make sure you're using the `main` branch

### Issue: GitHub Connection Failed

**Solution:**
1. Disconnect GitHub from Salla Partners settings
2. Wait 2 minutes
3. Reconnect GitHub account
4. Authorize all permissions
5. Try importing again

### Issue: Theme Not Showing After Import

**Solution:**
1. Refresh the page (F5)
2. Check if theme is in "Pending Review" status
3. Check your email for Salla notifications
4. Contact Salla support if stuck

---

## File Structure Verification

Your theme has the following structure (which Salla expects):

```
Salla-Theme-V1--Cube-X-Codes/
├── views/
│   ├── layouts/
│   │   └── app.twig
│   ├── pages/
│   │   ├── product.twig
│   │   └── cart.twig
│   └── components/
│       ├── header.twig
│       ├── footer.twig
│       ├── product-card.twig
│       ├── cart-drawer.twig
│       ├── promo-banner.twig
│       └── newsletter.twig
├── assets/
│   ├── css/
│   │   └── main.scss
│   ├── js/
│   │   └── main.js
│   └── images/
├── twilight.json ✅
├── package.json ✅
├── README.md ✅
├── LICENSE ✅
└── .gitignore ✅
```

---

## What Salla Looks For

### Required Files ✅
- ✅ `twilight.json` - Theme configuration
- ✅ `package.json` - Dependencies
- ✅ `views/layouts/app.twig` - Main layout
- ✅ `views/pages/` - Page templates
- ✅ `views/components/` - Components
- ✅ `assets/css/` - Stylesheets
- ✅ `assets/js/` - JavaScript

### Required Configuration ✅
- ✅ Theme name
- ✅ Version number
- ✅ Author information
- ✅ License information

### Recommended Files ✅
- ✅ `README.md` - Documentation
- ✅ `LICENSE` - License file
- ✅ `.gitignore` - Git ignore rules

---

## After Approval

Once your theme is approved:

1. **Test on Demo Store**
   - Create a demo store
   - Install your theme
   - Test all features

2. **Publish to Marketplace**
   - Click "Publish"
   - Theme becomes available to all merchants

3. **Monitor Performance**
   - Track installations
   - Monitor user feedback
   - Update as needed

---

## Support Resources

- **Salla Documentation**: https://docs.salla.dev/
- **Salla Community**: https://salla.dev/community
- **GitHub Repository**: https://github.com/samirhashish/Salla-Theme-V1--Cube-X-Codes
- **Support Email**: support@salla.dev

---

## Checklist Before Importing

- [ ] GitHub repository is public
- [ ] All files are committed and pushed
- [ ] `twilight.json` is valid JSON
- [ ] `package.json` is valid JSON
- [ ] `views/layouts/app.twig` exists
- [ ] `assets/css/main.scss` exists
- [ ] `assets/js/main.js` exists
- [ ] README.md has documentation
- [ ] LICENSE file is present
- [ ] All Twig templates are valid

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| JSON format error | Use minimal twilight.json format |
| GitHub not connecting | Disconnect and reconnect GitHub |
| Theme not appearing | Refresh page, check pending status |
| Import takes too long | Wait 5 minutes, refresh page |
| Files not found | Ensure all files are in `main` branch |
| Permission denied | Check GitHub authorization |

---

## Next Steps

1. ✅ Go to Salla Partners
2. ✅ Click "Create New Theme"
3. ✅ Connect GitHub
4. ✅ Select your repository
5. ✅ Fill in theme details
6. ✅ Upload screenshots
7. ✅ Submit for review
8. ✅ Wait for approval
9. ✅ Test on demo store
10. ✅ Publish to marketplace

---

**Last Updated**: January 21, 2026  
**Status**: ✅ Ready for Import

For additional help, contact Salla support or visit the community forum.
