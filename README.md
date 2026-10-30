# LINK

**LINK: Learning to Localize from Known to Unknown Scenes** studies map-free LiDAR relocalization when test routes extend beyond the scenes covered during training. It estimates the reliability of each absolute pose hypothesis and chooses between direct localization and motion propagation from a reliable historical pose.

[Project website](https://reckozmh.github.io/LINK/) · [Manuscript PDF](https://reckozmh.github.io/LINK/assets/LINK-manuscript.pdf) · [Oxford demo](https://reckozmh.github.io/LINK/#demo)

The project page presents the motivation and method figures, the UrbanUnseen benchmark, experimental results, and an Oxford trajectory demonstration. Code and dataset downloads are not available yet.

## Local preview

Run `python -m http.server 8000` in this directory and open `http://localhost:8000/`.

The website is published by GitHub Pages from the `main` branch root. Original research materials in `FIG/`, `Paper/`, and `Video/` are kept locally; their public website copies are in `assets/`.
