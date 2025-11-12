# Suffer Pretty - Shopify Theme

**Version:** 1.0.0
**Artist:** Void
**Email:** voidinkcreation@proton.me
**Aesthetic:** Dark Angel | Gothic Elegance | Professional Tattoo Studio

---

## 🎨 Theme Overview

Suffer Pretty is a custom Shopify theme built for tattoo artists, muralists, and creative professionals. It features a dark angel aesthetic with a professional, navigable design that showcases your artistic work beautifully.

### Key Features

- ✅ **Dark Theme** - Professional black and gold aesthetic
- ✅ **Booking Forms** - Integrated tattoo and mural booking with Formspree
- ✅ **Portfolio Galleries** - Showcase your work with beautiful image grids
- ✅ **E-commerce Ready** - Full Shopify product support
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Professional Navigation** - Clean header and footer
- ✅ **Blog Support** - Share your artistic journey
- ✅ **FAQ Section** - Answer common questions
- ✅ **Contact Forms** - Easy customer communication

---

## 📁 Theme Structure

```
suffer-pretty-theme/
├── assets/              # CSS, JS, and image files
│   ├── theme.css       # Main stylesheet
│   └── theme.js        # Main JavaScript
├── config/              # Theme settings
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/              # Base layout files
│   ├── theme.liquid
│   └── checkout.liquid
├── locales/             # Translation files
│   └── en.default.json
├── sections/            # Reusable sections
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── category-grid.liquid
│   ├── booking-form.liquid
│   ├── portfolio-gallery.liquid
│   └── [many more...]
├── snippets/            # Reusable components
│   ├── product-card.liquid
│   ├── css-variables.liquid
│   └── cart-drawer.liquid
├── templates/           # Page templates
│   ├── index.json
│   ├── page.catalog.json
│   ├── page.tattoo-booking.json
│   ├── page.mural-booking.json
│   └── [many more...]
└── README.md           # This file
```

---

## 🚀 Installation

### Option 1: Upload to Shopify (Recommended)

1. **Zip the theme folder:**
   ```bash
   cd suffer-pretty-theme
   zip -r suffer-pretty-theme.zip .
   ```

2. **Upload to Shopify:**
   - Go to your Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"
   - Select your `suffer-pretty-theme.zip`
   - Once uploaded, click "Publish" or "Preview"

### Option 2: Use Shopify CLI

1. **Install Shopify CLI** (if not already installed):
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to theme folder:**
   ```bash
   cd suffer-pretty-theme
   ```

3. **Connect to your store:**
   ```bash
   shopify login --store your-store.myshopify.com
   ```

4. **Push theme to Shopify:**
   ```bash
   shopify theme push
   ```

5. **Or serve locally for development:**
   ```bash
   shopify theme dev
   ```

---

## ⚙️ Setup Instructions

### 1. Configure Navigation

**Main Menu:**
1. Go to Shopify Admin → Online Store → Navigation
2. Create a menu called "Main Menu" with these links:
   - Home → /
   - Catalog → /pages/catalog
   - About → /pages/about
   - Blog → /blogs/news
   - Contact → /pages/contact
   - FAQ → /pages/faq

**Footer Menu:**
1. Create a footer menu with quick links:
   - Shop → /collections/all
   - About → /pages/about
   - Contact → /pages/contact
   - FAQ → /pages/faq

### 2. Create Required Pages

Go to Shopify Admin → Online Store → Pages and create:

#### Catalog Page
- **Title:** Catalog
- **Template:** `page.catalog`
- **Content:** Leave empty (the template handles the layout)

#### Tattoo Booking Page
- **Title:** Tattoo Booking
- **Template:** `page.tattoo-booking`
- **Content:** Leave empty

#### Mural Booking Page
- **Title:** Mural Booking
- **Template:** `page.mural-booking`
- **Content:** Leave empty

#### About Page
- **Title:** About
- **Template:** `page.about`
- **Content:** Add your artist biography

#### Contact Page
- **Title:** Contact
- **Template:** `page.contact`
- **Content:** Add any additional contact information

#### FAQ Page
- **Title:** FAQ
- **Template:** `page.faq`
- **Content:** Leave empty (use the section editor)

### 3. Set Up Booking Forms (Formspree)

The booking forms use Formspree for submissions.

1. **Sign up for Formspree:**
   - Go to [https://formspree.io](https://formspree.io)
   - Create a free account
   - Create two forms:
     - "Tattoo Bookings"
     - "Mural Bookings"

2. **Get your form URLs:**
   - After creating each form, copy the form endpoint URL
   - It looks like: `https://formspree.io/f/YOUR_FORM_ID`

3. **Add form URLs to your pages:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Customize" on your theme
   - Navigate to the Tattoo Booking page
   - In the "Booking Form" section settings, paste your Formspree URL
   - Repeat for Mural Booking page

### 4. Create Collections

Create these collections for the site:

#### Art Collection
- **Handle:** `art`
- **Template:** `collection.art`
- **Description:** Add products like paintings, prints, digital art

#### Products/Merchandise Collection
- **Handle:** `products`
- **Template:** `collection.products`
- **Description:** Add clothing, merchandise, accessories

### 5. Customize Theme Settings

Go to Shopify Admin → Online Store → Themes → Customize

**Colors:**
- Background Color: `#0a0a0a` (default)
- Text Color: `#e0e0e0` (default)
- Accent Color: `#8b7355` (default - can be changed)
- Border Color: `#2a2a2a` (default)

**Header:**
- Upload your logo (recommended: 200px wide, transparent PNG)
- Select your main menu

**Footer:**
- Add social media URLs
- Customize brand description
- Enable/disable newsletter signup

**Home Page:**
- Customize hero section with your featured image
- Add categories to category grid
- Select a featured collection

---

## 📝 Content Guidelines

### Adding Images

**Recommended sizes:**
- Hero Background: 1920x1080px
- Category Cards: 600x600px
- Portfolio Images: 800x800px
- Product Images: 800x800px
- Logo: 200px wide (height flexible)

**Image formats:**
- Use JPG for photos
- Use PNG for logos and graphics with transparency
- Optimize images before uploading (use tools like TinyPNG)

### Portfolio Galleries

1. Go to your page in the Shopify editor
2. Find the "Portfolio Gallery" section
3. Click "Add block" → "Portfolio Image"
4. Upload image and add title
5. Repeat for all images
6. Arrange in desired order

### Category Grid (Catalog Page)

The Category Grid comes with 4 default categories:
1. **Tattoos** → Links to `/pages/tattoo-booking`
2. **Murals** → Links to `/pages/mural-booking`
3. **Art** → Links to `/collections/art`
4. **Clothes** → Links to `/collections/products`

To customize:
1. Go to the Catalog page in the theme editor
2. Select the "Category Grid" section
3. Click on each category block to:
   - Upload a custom image
   - Change the title
   - Update the link
   - Modify the description

### FAQ Page

1. Go to FAQ page in theme editor
2. Add "FAQ Category" blocks to organize questions
3. Add "FAQ Item" blocks under each category
4. Fill in questions and answers

---

## 🛒 E-commerce Setup

### Adding Products

1. Go to Shopify Admin → Products → Add product
2. Fill in:
   - Title
   - Description
   - Price
   - Images (at least one)
   - Collections (Art or Products)
3. Add variants if needed (sizes, colors)
4. Save product

### Product Collections

Products automatically appear in:
- Collection pages (`/collections/art`, `/collections/products`)
- Featured collection on home page
- Product recommendations

---

## 🎨 Customization

### Changing Colors

**Option 1: Theme Settings**
- Go to Theme Customizer → Theme Settings → Colors
- Adjust colors using the color picker

**Option 2: Edit CSS**
- Edit `assets/theme.css`
- Modify CSS variables at the top:
```css
:root {
  --color-background: #0a0a0a;
  --color-foreground: #e0e0e0;
  --color-accent: #8b7355;
  --color-border: #2a2a2a;
}
```

### Changing Fonts

**Via Theme Settings:**
- Go to Theme Customizer → Theme Settings → Typography
- Select fonts for headings and body text

**Via Code:**
- Edit `assets/theme.css`
- Modify font variables:
```css
:root {
  --font-body: 'Your Font', sans-serif;
  --font-heading: 'Your Font', sans-serif;
}
```

### Adding Custom Sections

1. Create a new file in `sections/` folder
2. Name it `custom-section-name.liquid`
3. Add Liquid, HTML, CSS, and schema
4. Use the section in any page via the theme editor

---

## 📧 Booking System

### How Bookings Work

1. Customer fills out booking form
2. Form submits to Formspree
3. You receive email notification
4. Follow up with customer via email

### Booking Form Fields

**Tattoo Bookings:**
- Name, Email, Phone
- Preferred Date & Time
- Session Type (1hr, 2hr, half-day, full-day)
- Design Description
- Reference Images (upload)
- Additional Notes

**Mural Bookings:**
- Name, Email, Phone
- Project Location
- Project Size/Scope
- Budget Range
- Timeline Preferences
- Reference Images (upload)
- Additional Notes

### Managing Bookings

1. Check your email for Formspree notifications
2. Review submission details
3. Respond to customer
4. Track bookings in a spreadsheet or CRM

**Alternative:** Upgrade to Formspree paid plan for:
- Form storage
- Spam protection
- Auto-responders
- Webhooks

---

## 🔧 Troubleshooting

### Forms Not Working

**Check:**
1. Is Formspree URL correctly set in section settings?
2. Is Formspree form active on formspree.io?
3. Check browser console for errors

### Images Not Loading

**Check:**
1. Are images uploaded to Shopify?
2. Are file sizes reasonable (< 2MB)?
3. Clear browser cache
4. Check image URLs in theme editor

### Styling Issues

**Check:**
1. Clear browser cache
2. Check CSS syntax in custom CSS
3. Inspect element in browser dev tools
4. Verify color values are valid hex codes

### Cart Not Working

**Check:**
1. Are products set to "active"?
2. Is inventory set correctly?
3. Check browser console for JavaScript errors
4. Try in incognito/private window

---

## 📱 Mobile Optimization

The theme is mobile-first and fully responsive:
- ✅ Touch-friendly navigation
- ✅ Mobile hamburger menu
- ✅ Optimized images
- ✅ Readable text sizes
- ✅ Easy-to-tap buttons
- ✅ Fast loading

Test on multiple devices before launch!

---

## 🚀 Going Live

### Pre-Launch Checklist

- [ ] All pages created and published
- [ ] Navigation menus configured
- [ ] Products added with images
- [ ] Collections created
- [ ] Booking forms connected to Formspree
- [ ] Contact form working
- [ ] Social media links added
- [ ] Logo uploaded
- [ ] Favicon set
- [ ] Test checkout process
- [ ] Mobile testing complete
- [ ] SEO titles and descriptions set
- [ ] Legal pages (Privacy, Terms, Refunds)

### Launch Steps

1. Go to Shopify Admin → Online Store → Themes
2. Find your Suffer Pretty theme
3. Click "Actions" → "Publish"
4. Confirm publication
5. Test the live site

---

## 📚 Resources

### Shopify Documentation
- [Theme Development](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)

### Tools Used
- [Formspree](https://formspree.io) - Form backend
- [Shopify Theme Kit](https://shopify.dev/docs/themes/tools/theme-kit)

### Getting Help
- Email: voidinkcreation@proton.me
- Shopify Community: [community.shopify.com](https://community.shopify.com)
- Shopify Support: [help.shopify.com](https://help.shopify.com)

---

## 📄 License

This theme is custom-built for Suffer Pretty / Void.
All rights reserved.

---

## 🎯 Version History

**v1.0.0** (2025)
- Initial release
- Dark angel theme
- Booking forms
- Portfolio galleries
- E-commerce integration
- Blog support
- FAQ section
- Responsive design

---

## 🙏 Credits

**Designed & Developed for:** Void / Suffer Pretty
**Theme Architecture:** Shopify Theme Best Practices
**Aesthetic:** Dark Angel Gothic

---

## 💡 Tips for Success

1. **Keep images optimized** - Compress before uploading
2. **Update regularly** - Add new portfolio work often
3. **Respond quickly** - Check booking forms daily
4. **Build your email list** - Use newsletter signup
5. **Share on social media** - Link back to your store
6. **Blog consistently** - Share your artistic process
7. **Collect reviews** - Ask satisfied customers for testimonials
8. **Use analytics** - Track what works with Shopify analytics

---

**Made with 💀 for the dark angel aesthetic.**

