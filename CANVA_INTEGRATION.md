# Canva Integration Guide for GWIC

## How to Use Canva Designs in Your Website

### Option 1: Direct Embed (Recommended for Interactive Content)

1. **Create your design in Canva**
2. **Click "Share" button**
3. **Select "Embed"**
4. **Copy the iframe code**
5. **Paste it into your HTML:**

```html
<div class="canva-embed">
    <iframe src="https://www.canva.com/design/YOUR_DESIGN_ID/view?embed" 
            loading="lazy"
            title="Your Design Title">
        <p>Fallback text for browsers that don't support iframes</p>
    </iframe>
</div>
```

### Option 2: Image Export (Recommended for Static Graphics)

1. **Download your design as PNG/JPG**
2. **Upload to your `assets/` folder**
3. **Use as regular image:**

```html
<img src="assets/wellness-infographic.png" 
     alt="Mental Health Wellness Tips Infographic" 
     loading="lazy">
```

### Option 3: PDF Embed (For Documents/Reports)

1. **Export as PDF from Canva**
2. **Upload to your website**
3. **Embed with:**

```html
<embed src="assets/wellness-guide.pdf" 
       type="application/pdf" 
       width="100%" 
       height="600px">
```

## Best Practices

### For Performance:
- Use **image exports** for static content (faster loading)
- Use **lazy loading** for all media: `loading="lazy"`
- Optimize images before uploading (compress to reduce file size)

### For SEO:
- Always include meaningful `alt` attributes
- Use descriptive filenames: `mental-health-tips.png` not `image1.png`
- Include `title` attributes for iframes

### For Accessibility:
- Provide fallback content for iframes
- Use proper heading structure (h1, h2, h3)
- Ensure good color contrast in your Canva designs

## Canva Design Types Perfect for GWIC:

1. **Infographics** - Mental health statistics and tips
2. **Social Media Posts** - Instagram-ready wellness content
3. **Posters** - Event announcements and awareness campaigns
4. **Presentations** - Educational slide decks for workshops
5. **Brochures** - Service information and resource guides
6. **Flyers** - Quick reference cards for students

## Implementation Examples:

### Mental Health Awareness Poster:
```html
<section class="awareness-campaign">
    <div class="container">
        <h2>Mental Health Awareness Week</h2>
        <div class="canva-embed">
            <img src="assets/mental-health-week-poster.png" 
                 alt="Mental Health Awareness Week - May 15-22, 2024. Join us for daily wellness activities." 
                 loading="lazy">
        </div>
    </div>
</section>
```

### Interactive Wellness Quiz:
```html
<section class="interactive-content">
    <div class="container">
        <h2>Test Your Wellness Knowledge</h2>
        <div class="canva-embed">
            <iframe src="https://www.canva.com/design/DAGBexample/view?embed" 
                    loading="lazy"
                    title="Wellness Knowledge Quiz">
                <p>Take our interactive wellness quiz to learn more about mental health.</p>
            </iframe>
        </div>
    </div>
</section>
```

## Pro Tips:

1. **Consistent Branding**: Use GWIC colors (#065fa7, #132939, #687821) in all Canva designs
2. **Mobile Optimization**: Ensure text is readable on mobile devices
3. **File Naming**: Use descriptive names for easy management
4. **Version Control**: Save different versions in Canva for updates
5. **Batch Creation**: Create multiple related designs at once for consistency

## Folder Structure:
```
assets/
├── canva-designs/
│   ├── infographics/
│   │   ├── mental-health-tips.png
│   │   └── stress-management.png
│   ├── posters/
│   │   ├── event-announcement.png
│   │   └── awareness-campaign.png
│   └── social-media/
│       ├── instagram-post-1.png
│       └── facebook-cover.png
```

This approach keeps your designs organized and easy to manage!