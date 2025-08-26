# Claude Code Configuration

This file contains commands and configurations for Claude Code to work efficiently with this project.

## Development Commands

### Local Development
```bash
# Start local development server
python3 -m http.server 8000

# Alternative with Node.js
npx serve .

# Open browser
open http://localhost:8000
```

### Git Commands
```bash
# Standard workflow
git add .
git commit -m "Descriptive commit message"
git push origin main

# Feature branch workflow
git checkout -b feature/feature-name
git add .
git commit -m "Add: feature description"
git push -u origin feature/feature-name
```

### GitHub Authentication
```bash
# Set environment variable for GitHub CLI
export GH_TOKEN="your_github_token_here"
```

## Project Structure

- **Static Website**: HTML/CSS/JavaScript only
- **No Build Process**: Direct file editing
- **Responsive Design**: Mobile-first approach
- **Mental Health Focus**: GNLU Wellness Initiative Cell

## Common Tasks

### Adding New Page
1. Create `pagename.html` in root
2. Copy structure from `index.html`
3. Update navigation in all HTML files
4. Add styles to `styles/main.css` if needed

### Updating Content
- **Text Changes**: Edit HTML files directly
- **Styling**: Modify `styles/main.css`
- **Interactivity**: Update `scripts/main.js`
- **Images**: Add to `assets/` folder

### Testing
- Always test on multiple screen sizes
- Check mobile responsiveness
- Verify all links work
- Test interactive features

## Deployment

- **GitHub Pages**: Automatic on push to main
- **Live URL**: https://aravin-dhan.github.io/gwic/
- **Updates**: Take 1-5 minutes to appear

## File Patterns

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - GWIC</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <nav class="navbar"><!-- Navigation --></nav>
    <main><!-- Page content --></main>
    <footer><!-- Footer --></footer>
    <script src="scripts/main.js"></script>
</body>
</html>
```

### CSS Variables
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --background-color: #ffffff;
}
```

## Quality Standards

- **Clean Code**: Consistent formatting and naming
- **Responsive**: Works on all device sizes
- **Accessible**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized images and minimal CSS/JS
- **SEO**: Proper meta tags and semantic structure

## Repository Information

- **GitHub**: https://github.com/Aravin-dhan/gwic
- **Username**: aravin-dhan  
- **Branch**: main
- **License**: MIT (open source)

## Notes for Claude Code

- No build process required - direct file editing
- Test changes by refreshing browser
- Always check mobile responsiveness
- Use existing CSS classes and conventions
- Follow the project's color scheme and typography
- Maintain focus on mental health and wellness content