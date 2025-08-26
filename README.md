# GWIC - GNLU Wellness Initiative Cell

A modern, responsive website for the GNLU Wellness Initiative Cell focused on mental health and wellness at Gujarat National Law University.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/aravin-dhan/gwic.git

# Navigate to project
cd gwic

# Serve locally (Python)
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Open browser
open http://localhost:8000
```

## 📁 Project Structure

```
gwic/
├── index.html          # Homepage
├── about.html          # About page
├── team.html           # Team members
├── events.html         # Events & workshops
├── resources.html      # Mental health resources
├── research.html       # Research & publications
├── blog.html           # Blog posts
├── instagram.html      # Instagram feed
├── contact.html        # Contact information
├── assets/            # Images and media files
├── styles/
│   └── main.css       # Main stylesheet
└── scripts/
    └── main.js        # JavaScript functionality
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Mental Health Focus**: Dedicated sections for wellness resources
- **Event Management**: Showcase workshops and wellness events
- **Team Profiles**: Meet the GWIC team members
- **Research Hub**: Access to mental health research and publications
- **Blog Integration**: Share wellness tips and insights
- **Contact Forms**: Easy communication channels

## 🛠️ Development

### Prerequisites
- Modern web browser
- Local server (Python, Node.js, or any HTTP server)

### Local Development
1. **Clone and navigate**:
   ```bash
   git clone https://github.com/aravin-dhan/gwic.git
   cd gwic
   ```

2. **Start local server**:
   ```bash
   # Option 1: Python
   python3 -m http.server 8000
   
   # Option 2: Node.js
   npx serve .
   
   # Option 3: PHP
   php -S localhost:8000
   ```

3. **Open in browser**: `http://localhost:8000`

### Making Changes
1. Edit HTML, CSS, or JavaScript files
2. Refresh browser to see changes
3. No build process required - pure HTML/CSS/JS

### Adding New Pages
1. Create new `.html` file in root directory
2. Copy structure from existing pages
3. Update navigation in all pages
4. Add corresponding styles in `styles/main.css`

## 🎯 Customization

### Colors & Branding
Edit CSS custom properties in `styles/main.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... other variables */
}
```

### Content Updates
- **Text**: Edit HTML files directly
- **Images**: Add to `assets/` folder and update src attributes
- **Styles**: Modify `styles/main.css`
- **JavaScript**: Update `scripts/main.js`

### Navigation
Update menu items in each HTML file:
```html
<ul class="nav-menu">
    <li><a href="page.html">Page Name</a></li>
    <!-- Add new items here -->
</ul>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter, Poppins)

## 📋 Deployment

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select source branch (main)
4. Your site will be live at: `https://aravin-dhan.github.io/gwic/`

### Netlify
1. Connect GitHub repository
2. Build settings: Leave empty (static site)
3. Deploy directory: `/` (root)

### Vercel
```bash
npx vercel --prod
```

## 🤝 Contributing

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/gwic.git
   ```
3. **Create** feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Commit** changes:
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push** to branch:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open** Pull Request

## 📞 Support & Contact

- **Email**: gwic@gnlu.ac.in
- **Website**: [GNLU Official](https://www.gnlu.ac.in/)
- **Issues**: [GitHub Issues](https://github.com/aravin-dhan/gwic/issues)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🏥 About GWIC

The GNLU Wellness Initiative Cell is dedicated to promoting mental health awareness and providing support resources for the GNLU community. Our mission is to create a supportive environment where students, faculty, and staff can access mental health resources and participate in wellness activities.

---

**Made with ❤️ for mental health awareness at GNLU**