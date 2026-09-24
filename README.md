# 🔨 Workstream Tools for Data Collectors

One page with every link data collectors need during a shift, so there's no hunting through Slack or old messages.

**Live site:** https://harrisonrugg.github.io/Workstream-Tools-for-Data-Collectors-/

## Designed mobile first

Most people open this on their phone, so the layout starts there: big tiles for the most used tools, full-width rows that are easy to tap, and a search box at the top. On a laptop or desktop, the same sections spread out side by side. It also follows your device's light or dark mode setting.

| Mobile | Desktop |
| --- | --- |
| <img width="259" height="676" alt="mobile" src="https://github.com/user-attachments/assets/06f22bf9-6e73-4971-9559-a71a178c0d33" /> | <img width="780" height="464" alt="desktop" src="https://github.com/user-attachments/assets/766e2da0-0e1d-4cfa-a268-a94a07e3c37a" /> |

## What's on it

- **Most used:** Clock In / Out, Call Out or Late, Rig Check Out, Fleet Board
- **Forms:** Feature Request and Suggestion, Menlo Operations Feedback, Skill Interest
- **Time and attendance:** Clock In / Out for another time
- **Quarry app:** iPhone (TestFlight) and Android downloads
- **Community:** Workstream Discord server

The search box filters links as you type.

## Adding or changing a link

Everything lives in `index.html`. Copy an existing `<li>` line in the right section, then change the link and the label. There's no build step. Once a change is merged into `main`, GitHub Pages publishes it automatically.

## Contributors

- [Harrison Rugg](https://github.com/HarrisonRugg): Init created the site
- [Ryan](https://github.com/ryanchan70)
- [Tamer Jaber](https://github.com/TamerJ): forms and Discord links, and the mobile-first redesign

Updated 9/23
