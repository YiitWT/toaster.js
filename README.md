# Toaster.js

![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Size](https://img.shields.io/badge/Size-~2KB-blue?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=for-the-badge)
![Visit The DEMO](https://yiitwt.github.io/toaster.js/demo/index.html)

A lightweight, vanilla JavaScript toast notification library for displaying user-friendly messages in web applications.

## 🚀 CDN Usage

```html
<!-- Include CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YiitWT/toaster.js@latest/toaster.css">
<!-- Include JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/YiitWT/toaster.js@latest/toaster.js"></script>
```

## Features

- 🎨 Multiple toast types (success, error, warning, info)
- 📍 Flexible positioning options
- ⏱️ Configurable duration and auto-dismiss
- 🔗 Clickable toasts with URL navigation
- ❌ Optional close buttons
- 🎭 Smooth fade-out animations
- 📱 No dependencies - pure vanilla JavaScript
- 💾 Lightweight and performant

## Installation

Simply include the Toaster class in your project:

```javascript
// Copy the Toaster class into your project
// No npm installation required!
```

## Basic Usage

```javascript
// Create a toaster instance
const toaster = new Toaster();

// Show different types of notifications
toaster.success('Operation completed successfully!');
toaster.error('Something went wrong!');
toaster.warning('Please check your input');
toaster.info('Here\'s some helpful information');
```

## Advanced Usage

### Custom Options

```javascript
const toaster = new Toaster();

// Show toast with custom options
toaster.show({
    message: 'Custom notification',
    animation: "slideIn",
    type: 'success',
    duration: 5000,
    position: 'top-right',
    closeable: true,
    url: 'https://example.com',
    newTab: true
});
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `message` | string | 'Notification' | The text content of the toast |
| `animation` | string | 'slideIn' | Uhh the animation |
| `type` | string | 'info' | Toast type: 'success', 'error', 'warning', 'info' |
| `duration` | number | `this.duration` | Time in milliseconds before auto-dismiss (0 = no auto-dismiss) |
| `position` | string | - | Toast position (see positioning section) |
| `closeable` | boolean | false | Whether to show a close button |
| `url` | string | - | URL to navigate to when toast is clicked |
| `newTab` | boolean | false | Whether to open URL in new tab |
| `style` | string | - | Additional inline CSS styles for the toast |


### Positioning

The toaster supports various positioning options through CSS classes:

- `top-left`
- `top-right` 
- `top-center`
- `bottom-left`
- `bottom-right`
- `bottom-center`

```javascript
toaster.success('Top right notification', { position: 'top-right' });
toaster.error('Bottom left notification', { position: 'bottom-left' });
```

### Custom Styling

Add custom inline styles to individual toasts:

```javascript
toaster.success('Styled notification!', {
    style: 'background: linear-gradient(45deg, #FF6B6B, #4ECDC4); font-weight: bold;'
});

toaster.error('Custom error', {
    style: 'border-left: 5px solid #fff; font-size: 16px;'
});
```

### Animation Classes

The CSS includes several animation classes you can apply:
- `fadeIn` - Smooth fade in
- `fadeOut` - Smooth fade out  
- `bounceIn` - Bouncy entrance
- `slideUp` - Slide up from bottom

### Clickable Toasts

Make toasts clickable by providing a URL:

```javascript
// Open in same tab
toaster.info('Click to visit our website', {
    url: 'https://example.com'
});

// Open in new tab
toaster.success('Check out this link!', {
    url: 'https://example.com',
    newTab: true
});
```

### Closeable Toasts

Add close buttons to allow manual dismissal:

```javascript
toaster.warning('This stays until you close it', {
    duration: 0,  // Don't auto-dismiss
    closeable: true
});
```

## Browser Support

Works in all modern browsers that support:
- ES6 classes
- Template literals
- Arrow functions
- `querySelector` and DOM manipulation

## Examples

### Basic Notifications
```javascript
const toaster = new Toaster();

// Simple success message
toaster.success('File uploaded successfully!');

// Error with custom duration
toaster.error('Failed to save changes', { duration: 8000 });
```

### Interactive Notifications
```javascript
// Custom styled notification
toaster.info('Payment processed successfully', {
    style: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;',
    duration: 5000,
    closeable: true
});

// Error with custom styling
toaster.error('Network connection failed', {
    style: 'border-left: 4px solid #fff; font-weight: bold;',
    closeable: true,
    duration: 0
});
```



## 🎨 Customization

The included CSS provides beautiful default styling with:
- Smooth animations (fadeIn, bounceIn, slideUp)
- Responsive positioning for all screen sizes
- Modern design with shadows and rounded corners
- Hover effects for interactive elements

You can override any styles or add your own custom CSS as needed.

## License

This code is provided as-is for educational and development purposes. Feel free to modify and use in your projects.

## Contributing

This is a simple utility class. Feel free to extend it with additional features like:
- Animation customization
- Sound notifications  
- Stacking limits
- Theme support
- RTL language support