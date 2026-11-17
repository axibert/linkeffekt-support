# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and a little JavaScript, served by GitHub Pages from this repository at https://linkeffekt.com. No build step.

## Users

Musicians who make music on iPad and iPhone, in AUM, Loopy Pro, Drambo, Logic Pro for iPad, Cubasis, GarageBand or djay, often together with Ableton Live on a Mac and hardware such as grooveboxes and MIDI controllers. They sit at a desk or on a sofa with several devices and want them to play together without an audio interface between every pair.

## Product Purpose

LinkEffekt streams audio and MIDI between music apps and devices, right on the beat. A track sent in one app is heard in another app on the same device, on a second device, in Ableton Live 12.4 or later, or online with a partner. From version 2.1 MIDI controllers plugged into any device play on all of them, and gear without Ableton Link gets MIDI clock from Link. Success for the site: a musician who has never heard of it understands in seconds what it does, sees that it fits the setup they already own, wants it, and downloads it.

## Positioning

The audio lands on the beat of the receiving app, not merely somewhere near it. In AUM and Logic Pro it plays in sync in both directions of a jam; in every other host Bar Sync locks the incoming downbeat to the bar. Your setup comes back when you load a template. Alex's line: "The routing tool for your whole setup." Alex's line: "Load your template and it plays."

## Operating Context

Four AUv3 plugins inside the host the musician already uses: LinkEffekt Send, LinkEffekt Receive, LinkEffekt Receive Instrument, and from 2.1 LinkEffekt MIDI. A menu-bar app on the Mac shares controllers and gives every app one port per controller. Paths: same device, same host, local network over Wi-Fi or a cable, and Online over the internet in rooms.

## Capabilities and Constraints

iOS 15 or later on iPhone and iPad, any AUv3 host. Ableton Live 12.4 or later on the same network sends and receives. MIDI on the Mac needs Apple Silicon and macOS 14 or later. Audio plugins do not run on the Mac today; a native Mac plugin is planned and must not be promised. Free: one Send, one Receive, Link to MIDI clock for one piece of gear. LinkEffekt Unlimited is a one-time purchase for unlimited instances, several channels per Receive, Online mode, MIDI between devices, clock for all gear and unlimited virtual MIDI ports on the Mac.

## Brand Commitments

Name LinkEffekt in one word, existing logo and app icon. Website copy is in English. The plugin's status language is real: green means connected or in sync, orange means waiting. "Ableton Link" is always two words. Never say "Inter-App Audio". Measured values appear as "in our tests". No promises about other apps, comparisons only where they help understanding and are backed by the other product's own documentation. Support address hello@linkeffekt.com.

## Evidence on Hand

Real screenshots of the plugins in `img/manual/` and `img/home/`, App Store badge in `img/home/`, the manual in `manual.html`. No testimonials, press quotes, customer counts or benchmarks may be invented. Real quotes may only be added with Alex's approval.

## Product Principles

- Show what it does before explaining how it works.
- The first thing a musician wants to know is whether it fits the setup they have.
- Nothing to configure is the feature; say so plainly.
- Say exactly what is on the beat and what needs Bar Sync.

## Accessibility & Inclusion

Motion must respect `prefers-reduced-motion`, and every piece of content must be readable without animation.
