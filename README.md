# LinkEffekt Support

LinkEffekt streams audio between iOS/Mac music apps: over the local network via Ableton Link Audio, or over the internet (Online mode), locked to the beat. Three AUv3 plugins: **Send**, **Receive**, **Receive Instrument**.

**Website & Manual:** https://axibert.github.io/linkeffekt-support/

**App Store:** https://apps.apple.com/app/linkeffekt/id6759493415

## Contact

For support, feedback, or bug reports: **alexander.joannou@gmail.com**

Please include your host app, your device, and what the diagnostics line in the plugin says; that message usually pinpoints the problem.

## Requirements

- iOS 17+ / macOS 14+ (Apple Silicon)
- Any AUv3-compatible host app (AUM, Logic Pro, Cubasis, GarageBand, Drambo, Loopy Pro, …)
- Receiving in Ableton Live: Live 12.4 or later on the same local network

## Privacy

See the [Privacy Policy](https://axibert.github.io/linkeffekt-support/privacy.html) (source: [PRIVACY.md](PRIVACY.md)).

## Stylesheet and script version

Every page loads `style.css?v=<checksum>` and `theme.js?v=<checksum>`. After any change to one of them, set the new value (`shasum style.css | cut -c1-8`, same for `theme.js`) in every page; otherwise browsers pair the new page with the old cached file.

## Light and dark

All pages share one palette and one switch: they follow the system setting until the reader picks a mode with the switch in the header, and the choice (localStorage `le-theme`) carries over to every page. Each page sets it in a one-line script in the head, before the stylesheet paints; `theme.js` runs the switch.

## Home page devices

`img/home/ipad-receive.webp` and `img/home/iphone-send.webp` are real screenshots in Apple's product bezels, built with `Scripts/home-device-mockup.py` in the LinkEffekt repo (the bezels stay there, outside this public repo). Apple's rules: bezel unchanged, no shadow or tilt, nothing overlapping a device, at least 200 px tall on screen; the App Store badge is Apple's artwork, black on light pages and white on dark ones, with a quarter of its height as clear space.
