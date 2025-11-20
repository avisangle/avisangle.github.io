# Modern Portfolio Website - Deployment Guide

A modern, custom-built portfolio website with no frameworks or build tools required. Just pure HTML, CSS, and JavaScript.

## Features

✨ **Modern Design Elements:**
- Animated gradient mesh background
- Terminal-style hero section with typing effect
- Bento grid layout for projects (Apple-style)
- Glassmorphism effects
- Smooth scroll animations
- 3D card hover effects
- Fully responsive design

🚀 **Performance:**
- Zero dependencies
- No build process
- Lightweight and fast loading
- Optimized animations
- Mobile-first responsive design

## Project Structure

```
avisangle.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive JavaScript
└── DEPLOYMENT.md       # This file
```

## Deployment to GitHub Pages

### Method 1: Push to GitHub (Recommended)

1. **Navigate to the repository:**
   ```bash
   cd avisangle.github.io
   ```

2. **Stage all files:**
   ```bash
   git add index.html styles.css script.js DEPLOYMENT.md
   ```

3. **Commit your changes:**
   ```bash
   git commit -m "Launch modern custom portfolio site"
   ```

4. **Push to GitHub:**
   ```bash
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/avisangle/avisangle.github.io
   - Click on **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

6. **Your site will be live at:**
   ```
   https://avisangle.github.io
   ```

### Method 2: Manual Upload

1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Drag and drop `index.html`, `styles.css`, and `script.js`
4. Commit the changes
5. Enable GitHub Pages in Settings (see step 5 above)

## Local Testing

To test the site locally before deploying:

### Option 1: Using Python
```bash
cd avisangle.github.io
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser

### Option 2: Using Node.js
```bash
npx http-server
```

### Option 3: Direct File Open
Simply double-click `index.html` or open it in your browser. Most features will work, but some animations might need a local server.

## Customization

### Update Personal Information

**Contact Details** (in `index.html`):
- Line 228: Email address
- Line 235: LinkedIn URL
- Line 242: GitHub URL

**About Section** (in `index.html`):
- Lines 90-96: About text
- Lines 97-109: Stats cards

### Add New Projects

1. Open `index.html`
2. Find the `<!-- Projects Section -->` around line 146
3. Add a new project card following this structure:

```html
<div class="project-card medium" data-tech="YourTech">
    <div class="project-header">
        <span class="tech-badge">YourTech</span>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Project description goes here.</p>
    <div class="project-tech">
        <span class="tech-pill">Tech1</span>
        <span class="tech-pill">Tech2</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/yourusername/repo" target="_blank" class="project-link">
            View Project →
        </a>
    </div>
</div>
```

### Change Color Scheme

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --accent-primary: #6366f1;     /* Main accent color */
    --accent-secondary: #8b5cf6;   /* Secondary accent */
    --accent-tertiary: #ec4899;    /* Tertiary accent */
}
```

### Modify Animations

All animations are in `styles.css`. Search for `@keyframes` to find and modify specific animations.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: If you add images, optimize them with tools like TinyPNG
2. **Fonts**: Currently using system fonts for best performance
3. **Analytics**: Add Google Analytics if needed by inserting code in `<head>`

## Troubleshooting

### Site not updating after push?
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check GitHub Actions for build status
- Wait 5-10 minutes for GitHub Pages to rebuild

### Animations not working?
- Ensure JavaScript is enabled in browser
- Check browser console for errors (F12)
- Verify `script.js` is loaded correctly

### Mobile responsiveness issues?
- The site uses CSS Grid and Flexbox with breakpoints at 968px and 640px
- Test using browser DevTools mobile emulator

## Future Enhancements

Consider adding:
- [ ] Blog section with markdown support
- [ ] Dark/light mode toggle
- [ ] Project filtering by technology
- [ ] Contact form with form service (Formspree, Netlify Forms)
- [ ] SEO meta tags and Open Graph tags
- [ ] Analytics integration
- [ ] PWA capabilities
- [ ] Particle.js background (optional)

## Migration from Hugo

Your old Hugo site is preserved in the repository. The new custom site uses:
- `index.html` instead of Hugo templates
- `styles.css` instead of theme CSS
- `script.js` for interactivity

To keep both versions:
1. Move old Hugo files to a `hugo-backup/` folder
2. Keep new files in root directory

## Support

For questions or issues:
- GitHub Issues: https://github.com/avisangle/avisangle.github.io/issues
- Email: aavi.sangle@gmail.com

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
