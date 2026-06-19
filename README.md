# oj-www

React rewrite of the Olaf Johannsen ApS website (olafjohannsen.dk), a
manufacturer of low-voltage cable accessories. Replaces the original
FrontPage / static-HTML site with the same Create React App stack used by
`c6-www` and `abi-www`.

## Stack

- Create React App (`react-scripts` 5), React 18, no router.
- Page + language are plain `useState` in `src/App.js`.
- All copy lives in `src/content.js`, keyed by language → page.

## Languages

`en` · `da` · `fr` · `es`, switched via the flag column.

- **Home, About, Contact, Products** — fully translated in all four languages.

## Structure

```
public/images/        all original site images (banner, nav buttons, flags, products)
src/assets/blue.jpg   tiled background (imported via CSS)
src/content.js        all translatable copy + product catalogue
src/components/        Banner, Nav, LanguageSwitcher, Home, About, Contact, Products
backup/               the original downloaded FrontPage site (reference only)
```

## Local
Node / npm is already installed through homebrew. Install the website.

`npm install`

Start the website.

`npm start`

## Deployment to AWS S3
Build it.

`npm run build`

Copy it to S3. Sign in first.

`aws s3 sync ./build s3://olafjohannsen-frontend`

Go to CloudFront and create a new invalidation on /* to force it to update the distribution.

The original site is preserved under `backup/site/` for reference.
