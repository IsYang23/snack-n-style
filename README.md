# Snack 'N' Style — E-Commerce Website

> **Snacks You Crave, Styles You Love** ♡

A fully static e-commerce site for clothes, shoes & snacks. No build step required — works directly on GitHub Pages.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, categories, new arrivals |
| `shop.html` | Product grid with category filters |
| `product.html` | Product detail (driven by `?id=` URL param) |
| `cart.html` | Cart with quantity controls |
| `checkout.html` | Two-method checkout (Pay on Delivery + Pay Now) |
| `about.html` | Brand story + contact form |

---

## Deploying to GitHub Pages

### First time setup

1. Create a new repository on GitHub (e.g. `snack-n-style`)
2. In your `Rissa_site` folder, open a terminal and run:

```bash
git init
git add .
git commit -m "Initial commit — Snack N Style website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/snack-n-style.git
git push -u origin main
```

3. On GitHub: go to your repo → **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch** → choose `main` → folder `/` (root)
5. Click **Save** — your site will be live at:

```
https://YOUR_USERNAME.github.io/snack-n-style/
```

> It may take 1–2 minutes for the first deployment to appear.

### Pushing updates later

```bash
git add .
git commit -m "describe your change"
git push
```

---

## Customisation Checklist

### 1. Replace placeholder images
Product images currently use [picsum.photos](https://picsum.photos) placeholders.
To use real photos:
- Add your images to `assets/images/products/`
- Update the `image` field for each product in [`assets/js/products.js`](assets/js/products.js)

```js
// Example — change this:
image: "https://picsum.photos/seed/sns-hoodie1/500/500",
// To this:
image: "assets/images/products/hoodie-black.jpg",
```

### 2. Update your contact details
In [`about.html`](about.html), replace:
- `hello@snacknstyle.com` — your actual email
- `+1 234 567 8900` / `wa.me/1234567890` — your WhatsApp number

### 3. Activate Pay on Delivery emails (Formspree)

When a customer chooses **Pay on Delivery** and confirms, the order is submitted as a form.
To receive these by email:

1. Sign up for free at [formspree.io](https://formspree.io)
2. Create a new form — copy your **Form ID** (looks like `xpzgkwqr`)
3. Open [`checkout.html`](checkout.html) and replace:

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```
with your actual ID:
```html
action="https://formspree.io/f/xpzgkwqr"
```

### 4. Activate Pay Now (Stripe)

The **Pay Now** card form UI is fully built. To go live with real card payments you need:

1. A [Stripe account](https://stripe.com) (free to create)
2. A small backend to create Payment Intents (Stripe requires server-side confirmation)

**Recommended options for static hosting:**
- **Netlify Functions** — move the site to Netlify (free tier) and add a serverless function
- **Vercel** — similar to Netlify with easy serverless support
- **Stripe Payment Links** — the simplest option: create a payment link in the Stripe dashboard and point the Pay Now button directly to it (no code needed)

For the Stripe Payment Link approach, in `checkout.html` find `pay-now-confirm` button and replace `submitOrder('card', ...)` with `window.open('YOUR_STRIPE_PAYMENT_LINK', '_blank')`.

### 5. Add your logo
Replace `assets/images/logo.png` with your actual logo file.
The text logo in the navbar (`Snack'N'Style`) can be replaced with an `<img>` tag in each HTML file's navbar section.

### 6. Update social media links
In each page's footer, replace the `href="#"` on the social buttons with your actual profile URLs.

### 7. Update products
Edit [`assets/js/products.js`](assets/js/products.js) to add, remove or update products.
Each product follows this structure:

```js
{
  id: 21,                          // unique number
  name: "My New Product",
  category: "clothes",             // "clothes", "shoes", or "snacks"
  price: 39.99,
  sizes: ["S", "M", "L", "XL"],   // empty array [] for snacks/no-size items
  image: "assets/images/products/my-product.jpg",
  badge: "New"                     // or null for no badge
}
```

---

## Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript (ES6)
- [Google Fonts](https://fonts.google.com) — Bebas Neue + Poppins
- [Font Awesome 6](https://fontawesome.com) — icons
- `localStorage` — cart persistence
- [Formspree](https://formspree.io) — Pay on Delivery order emails (free)
- No build tools, no Node.js, no dependencies to install

---

## Switching to Paid Hosting Later

When you're ready to upgrade from GitHub Pages:

| Platform | Why |
|---|---|
| **Netlify** | Free tier, custom domain, serverless functions for Stripe |
| **Vercel** | Same as Netlify, great DX |
| **Shopify** | Full e-commerce platform if the site outgrows this setup |

The entire codebase is portable — just drag and drop the folder.

---

*Made with ♡ for Snack 'N' Style*
