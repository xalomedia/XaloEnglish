/**
 * Vietnamese Text Optimization Utility
 * Ensures proper rendering of Vietnamese characters across all devices
 */

export const vietnameseTextStyles = {
  // Text rendering optimization
  optimizeForVietnamese: (element) => {
    if (!element) return;
    
    // Apply font smoothing
    element.style.webkitFontSmoothing = 'antialiased';
    element.style.MozOsxFontSmoothing = 'grayscale';
    element.style.textRendering = 'optimizeLegibility';
  },

  // Get optimal line height for Vietnamese text
  getOptimalLineHeight: (fontSize = 16) => {
    // Vietnamese typically needs more line height than English
    if (fontSize < 14) return 1.5;
    if (fontSize < 16) return 1.6;
    if (fontSize < 18) return 1.7;
    return 1.75;
  },

  // Get optimal letter spacing for Vietnamese
  getOptimalLetterSpacing: (fontSize = 16) => {
    if (fontSize < 14) return '0px';
    if (fontSize < 16) return '0.2px';
    return '0.3px';
  },

  // CSS class for Vietnamese body text
  bodyText: 'font-vietnamese text-vietnamese-body',

  // CSS class for Vietnamese titles
  titleText: 'font-vietnamese text-vietnamese-title',

  // Utility to force Vietnamese font stack
  applyVietnameseFontStack: () => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      }
    `;
    document.head.appendChild(style);
  },
};

/**
 * Vietnamese Typography Component
 * Use this for guaranteed consistent typography
 */
export const VietnameseText = {
  // Paragraph wrapper
  Paragraph: ({ children, className = '' }) => (
    <p className={`text-vietnamese-body leading-vietnamese ${className}`}>
      {children}
    </p>
  ),

  // Heading wrapper (h1)
  H1: ({ children, className = '' }) => (
    <h1 className={`text-vietnamese-title leading-vietnamese-tight ${className}`}>
      {children}
    </h1>
  ),

  // Heading wrapper (h2)
  H2: ({ children, className = '' }) => (
    <h2 className={`text-vietnamese-title leading-vietnamese-tight ${className}`}>
      {children}
    </h2>
  ),

  // Heading wrapper (h3)
  H3: ({ children, className = '' }) => (
    <h3 className={`text-vietnamese-title leading-vietnamese-tight ${className}`}>
      {children}
    </h3>
  ),

  // Body text wrapper
  Body: ({ children, className = '' }) => (
    <span className={`text-vietnamese-body ${className}`}>
      {children}
    </span>
  ),

  // Small text wrapper
  Small: ({ children, className = '' }) => (
    <small className={`text-sm text-vietnamese ${className}`}>
      {children}
    </small>
  ),
};

// Font fallback configuration
export const VIETNAMESE_FONT_STACK = {
  primary: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  heading: '"Playfair Display", Georgia, serif',
  mono: '"Courier New", Courier, monospace',
  fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
};

// Export default
export default vietnameseTextStyles;
