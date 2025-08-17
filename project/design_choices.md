# Design System Documentation

## Typography

**Primary Typeface:** Inter  
All text elements across the design system use the Inter font family for consistent typography and optimal readability.

---

## Components

### Buttons
*Fundamental interactive elements that guide user actions within digital interfaces.*

#### Primary Buttons
- **Style:** Solid fill with rounded corners
- **Colors:** Blue gradient (#3B82F6 to #1D4ED8)
- **Text:** White text with Inter font
- **States:** Default, hover, active, disabled
- **Icon Support:** Left-aligned chevron icons available
- **Copy Action:** Integrated copy-to-clipboard functionality

#### Secondary Buttons  
- **Style:** Outlined border with transparent background
- **Border:** 1px solid border in various opacity levels
- **Text:** Colored text matching border color
- **States:** Default, hover, active, disabled
- **Icon Support:** Left-aligned chevron icons available

#### Tertiary Buttons
- **Style:** Text-only buttons with minimal visual weight
- **Background:** Transparent
- **Text:** Colored text with hover states
- **States:** Default, hover, active, disabled

#### Button Variants by Color Theme:
1. **Blue Theme:** Primary brand color buttons
2. **Black Theme:** High contrast dark buttons  
3. **Outline Theme:** Border-only styling
4. **Ghost Theme:** Minimal text-only buttons

### Link Buttons
*Buttons that seamlessly integrate with text content.*

#### Link Button Variants:
- **Default Link Button:** Standard underlined text style
- **Link Button with Icon:** Chevron or arrow icons
- **Colored Link Buttons:** 
  - Blue links (#3B82F6)
  - Red links (#EF4444)
  - Black links (#000000)
- **Disabled State:** Reduced opacity and non-interactive

---

## Color Tokens

### Primary Color Tokens {primary}
*Dominant colors with distinct shades decorating your design using the naming system of Primary Color Tokens.*

#### Blue Color Scale:
- **primary-dark:** #1E40AF (blue-800)
- **primary-darker:** #1D4ED8 (blue-700)  
- **primary-base:** #3B82F6 (blue-500)
- **primary-alpha-16:** Blue with 16% opacity
- **primary-alpha-10:** Blue with 10% opacity

### Static Color Tokens {static}
*The static colors have the same color tones for both light and dark modes, and they remain unchanged.*

#### Static Colors:
- **static-black:** #000000 (neutral-950)
  - Light Mode: neutral-950
  - Dark Mode: neutral-950
- **static-white:** #FFFFFF (neutral-0)
  - Light Mode: neutral-0  
  - Dark Mode: neutral-0

### Background Color Tokens {bg}
*Harmonious background colors using the intuitive naming system of Background Color Tokens.*

#### Background Scale:
- **bg-strong-950:** #0F172A (neutral-950)
- **bg-surface-800:** #1E293B (neutral-800)
- **bg-sub-300:** #CBD5E1 (neutral-300)
- **bg-soft-200:** #E2E8F0 (neutral-200)
- **bg-weak-50:** #F8FAFC (neutral-50)
- **bg-white-0:** #FFFFFF (neutral-0)

---

## Color Palettes

### Neutral Colors
*Foundational for palettes, our Neutral Colors span from black to white, offering essential versatility.*

#### Neutral Scale (Dark to Light):
- **Neutral [950]:** #0E121B
- **Neutral [900]:** #181925
- **Neutral [800]:** #222530
- **Neutral [700]:** #2B303B
- **Neutral [600]:** #525866
- **Neutral [500]:** #717784
- **Neutral [400]:** #9CA3AF
- **Neutral [300]:** #CACFD8
- **Neutral [200]:** #E1E4EA
- **Neutral [100]:** #F2F4F8
- **Neutral [50]:** #F8F7FA
- **Neutral [0]:** #FFFFFF

### Vibrant Colors

#### Blue Palette
*The spectrum of blue brings dynamic energy to your designs with its eleven distinct shades.*

##### Blue Scale (Dark to Light):
- **Blue [950]:** #122368
- **Blue [900]:** #1E2F8B
- **Blue [800]:** #1F38AD
- **Blue [700]:** #254700
- **Blue [600]:** #3559E9
- **Blue [500]:** #535CFF
- **Blue [400]:** #6B93F
- **Blue [300]:** #87BAFF
- **Blue [200]:** #A2D5FF
- **Blue [100]:** #C5E2FF
- **Blue [50]:** #EBF1FF

#### Orange Palette
*[Additional orange color specifications would continue here]*

---

## Design Principles

### Consistency
All components follow a unified design language with consistent spacing, typography, and color application.

### Accessibility  
Color combinations meet WCAG accessibility standards with proper contrast ratios for text legibility.

### Scalability
The token-based system allows for easy theme switching and component variations across different contexts.

### Interaction States
All interactive elements include hover, active, focus, and disabled states for comprehensive user feedback.

---

## Usage Guidelines

### Component Implementation
- Use Inter font family for all text elements
- Apply consistent border-radius values across components
- Maintain proper spacing using the defined token system
- Ensure proper color contrast for accessibility compliance

### Color Application
- Primary colors for brand elements and key actions
- Neutral colors for backgrounds and secondary content  
- Static colors for elements that remain consistent across themes
- Background tokens for layered interface elements

### Button Usage
- Primary buttons for main actions (CTAs)
- Secondary buttons for alternative actions
- Link buttons for navigation and inline actions
- Maintain consistent sizing and spacing between button groups