# Crowncut Barbershop Website

A responsive website with separate Home, Services & Prices, and Booking pages, built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — Home, about the shop, visual gallery and links to services/booking.
- `services.html` — Filterable service menu with guide prices and photo examples.
- `booking.html` — Booking request form.
- `styles.css` — Shared responsive design system.
- `script.js` — Service data, filtering, selected-service links and email request behavior.

## Run it on Windows
1. Download and extract `crowncut-barbershop.zip`.
2. Open the extracted folder in Visual Studio Code, or double-click `index.html` to open it in a browser.
3. Navigate between Home, Services & Prices and Book a Visit using the top menu.
4. Internet is needed for Google Fonts and remote example photos. VS Code's Live Server extension is convenient but optional.

## Booking behavior
Clicking “Book this service” on the Services page opens `booking.html` with that service preselected. Submitting the form opens the visitor's default email app with a prepared request addressed to `ugwuegbuprosper4@gmail.com`. The visitor must send the email; the salon must reply to confirm availability. This frontend does not store bookings or confirm a time automatically.

## Edit prices and services
Open `script.js` and edit the `services` array. Each item has a `name`, `category`, `price`, `description`, `image` and `alt`. Prices are guide prices in Nigerian naira and should be replaced with Crowncut's confirmed prices.

## Change images and details
Service images are in the `services` array in `script.js`. Hero and gallery image URLs are in `index.html`. Replace illustrative remote images with authentic photos Crowncut owns or has permission to use before publishing. Edit the booking email at the top of `script.js`; page copy is in the HTML files; colors are at the top of `styles.css`.

## Before launch
Add the verified address, phone/WhatsApp, opening hours and social links; confirm all prices; test booking on mobile and desktop; and consider a backend or booking service if you need requests stored automatically.
