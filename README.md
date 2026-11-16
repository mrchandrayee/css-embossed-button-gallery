# CSS Embossed Button

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-embossed-button-gallery/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete runnable recreation of the uploaded 25.6-second screen recording.

## Video title and examples

The video heading is **CSS Embossed Button**. The page uses a black background, glowing blue title, white content area with an orange outer border, and cyan-bordered example panels. Each example is split into a button preview on the left and a dark **CSS CODE** panel on the right.

The ten examples in the video, in order:

1. Classic Embossed Button — `Classic`
2. Pressed Embossed Button — `Pressed`
3. Neon Embossed Button — `Neon`
4. Gradient Embossed Button — `Gradient`
5. Metallic Embossed Button — `Metal`
6. 3D Embossed Button — `3D Button`
7. Circular Embossed Button — `+`
8. Glass Embossed Button — `Glass`
9. Dark Embossed Button — `Dark`
10. Hover Animated Embossed Button — `Hover Me`

## CSS visible in the recording

These declarations are transcribed from the readable code panels (spacing normalized). The full stylesheet below also includes the base button styles needed to run the examples.

```css
.btn1:hover {
  transform: translateY(-3px);
  box-shadow:
    -10px -10px 20px #ffffff,
    10px 10px 20px #94a3b8;
}

.btn2:hover {
  box-shadow:
    inset -10px -10px 18px #fff,
    inset 10px 10px 18px #94a3b8;
}

.btn3:hover {
  background: #38bdf8;
  color: #0f172a;
  box-shadow: 0 0 30px #38bdf8;
  transform: translateY(-2px);
}

.btn4:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 25px rgba(236, 72, 153, .5);
}

.btn5:hover {
  filter: brightness(1.05);
  transform: translateY(-2px);
}

.btn6:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #4338ca,
    0 15px 25px rgba(99, 102, 241, .5);
}

.btn7:hover {
  transform: rotate(90deg) scale(1.05);
  color: #3b82f6;
}

.btn8:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.btn9:hover {
  transform: translateY(-3px);
  color: #f8fafc;
}

.btn10:hover {
  transform: translateY(-6px);
  box-shadow:
    -12px -12px 24px #ffffff,
    12px 12px 24px #94a3b8;
}
```

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari or Edge.
3. Hover over each button to preview its effect.
4. On touch devices, tap the buttons to see their short pressed feedback.

No npm dependencies, build tools or server are required.

## Files

- `index.html` — all ten button examples and their visible CSS snippets
- `style.css` — complete embossed styles, hover effects and responsive layout
- `script.js` — small touch/click feedback interaction
- `README.md` — source transcription and run instructions

## Source fidelity note

The ten names, button labels and hover declarations above are taken from the readable portions of the video. Some source text is small, so the snippets are normalized for readability. The complete base styles and page markup are reconstructed to make every example runnable; the ZIP is not claimed to be the creator's exact original source project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
