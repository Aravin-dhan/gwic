# Development Workflow

## 🚀 Quick Setup

```bash
# Clone repository
git clone https://github.com/Aravin-dhan/gwic.git
cd gwic

# Start development server
python3 -m http.server 8000
# Open: http://localhost:8000
```

## 📝 Development Process

### 1. Before Making Changes
```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Making Changes
- Edit files directly (HTML/CSS/JS)
- Test in browser by refreshing
- No build process needed

### 3. Testing Your Changes
```bash
# Serve locally
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Test on different devices/screen sizes
```

### 4. Committing Changes
```bash
# Stage changes
git add .

# Check what's staged
git status

# Commit with descriptive message
git commit -m "Add: New feature description"
```

### 5. Pushing to GitHub
```bash
# Push feature branch
git push -u origin feature/your-feature-name

# Create Pull Request on GitHub
# After review and merge, clean up:
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

## 🔧 Common Tasks

### Adding New Page
1. Create `newpage.html` in root
2. Copy structure from existing page
3. Update navigation in ALL HTML files:
   ```html
   <li><a href="newpage.html">New Page</a></li>
   ```
4. Add styles to `styles/main.css` if needed

### Updating Styles
1. Edit `styles/main.css`
2. Use existing CSS variables for consistency
3. Test responsiveness (mobile/tablet/desktop)

### Adding Images
1. Put images in `assets/` folder
2. Reference in HTML: `<img src="assets/image.jpg" alt="Description">`
3. Optimize images before adding (use online tools)

### JavaScript Changes
1. Edit `scripts/main.js`
2. Test interactive features thoroughly
3. Check browser console for errors

## 📱 Testing Guidelines

### Browser Testing
- Chrome (primary)
- Safari
- Firefox
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Screen Sizes
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Performance
- Images should be < 500KB
- Page load time < 2 seconds
- Test on slow connections

## 🎨 Design Guidelines

### Colors
```css
Primary: #667eea (Purple-blue)
Secondary: #764ba2 (Purple)
Text: #2d3748 (Dark gray)
Background: #ffffff (White)
```

### Typography
- Headers: Poppins (Google Fonts)
- Body: Inter (Google Fonts)
- Font sizes: Use rem units

### Spacing
- Use consistent spacing (8px, 16px, 24px, 32px)
- Maintain visual hierarchy

## 🔄 Git Workflow

### Branch Naming
- `feature/add-new-page`
- `fix/navigation-bug`
- `update/contact-info`

### Commit Messages
```bash
# Good
git commit -m "Add: Mental health resources page"
git commit -m "Fix: Mobile navigation menu alignment"
git commit -m "Update: Team member photos and bios"

# Bad
git commit -m "changes"
git commit -m "fixed stuff"
git commit -m "updated files"
```

### When to Commit
- After completing a feature
- After fixing a bug
- Before switching to another task
- At end of work session

## 🚨 Common Issues & Solutions

### Changes Not Showing
1. Hard refresh: `Ctrl+F5` (Windows) / `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Check if files saved
4. Verify correct file path

### Mobile Menu Not Working
1. Check `scripts/main.js` loaded
2. Verify hamburger class names match CSS
3. Test JavaScript in browser console

### Styling Issues
1. Check CSS syntax
2. Verify class names match HTML
3. Use browser dev tools to debug
4. Test cascade and specificity

### GitHub Issues
```bash
# If push fails
git pull origin main --rebase

# If merge conflicts
# Edit files to resolve conflicts
git add .
git commit -m "Resolve merge conflicts"
```

## 📦 Deployment

### GitHub Pages (Automatic)
- Pushes to `main` branch auto-deploy
- Live at: `https://aravin-dhan.github.io/gwic/`
- Takes 1-5 minutes to update

### Manual Deployment
1. Any static hosting (Netlify, Vercel, etc.)
2. Upload all files to server
3. Point domain to `index.html`

## 🤝 Collaboration

### Code Review
- Create Pull Request for all changes
- Review by team member before merge
- Test changes locally before approval

### Communication
- Use GitHub Issues for bugs/features
- Comment on Pull Requests
- Update this documentation as needed

## 📋 Checklist Before Push

- [ ] Changes tested locally
- [ ] Mobile responsive
- [ ] Navigation updated (if new page)
- [ ] Images optimized
- [ ] Links working
- [ ] Commit message descriptive
- [ ] No console errors

## 🆘 Getting Help

1. Check browser console for errors
2. Review this documentation
3. Search GitHub Issues
4. Create new issue with details
5. Ask team member for code review

---
*Keep this document updated as the project evolves!*