# Proxmox VE - New UI Style Guide (Textual Description)

This document provides a preliminary style guide for the redesigned Proxmox VE web interface, drawing inspiration from modern UI practices and aligning with the proposed new UI structure in `proxmox_new_ui_wireframes_desc.md`.

## 1. Color Palette

The color palette aims for a professional, clean, and modern look, ensuring clarity and accessibility. Inspiration is drawn from contemporary admin interfaces, including elements seen in CloudStack's customizable theme.

*   **Primary Colors**:
    *   `pve-blue-primary`: `#007BFF` (A strong, professional blue for primary actions, highlights, and branding accents. Similar to CloudStack's `@primary-color`).
    *   `pve-blue-dark`: `#0056b3` (A darker shade of blue for hover states on primary elements or secondary accents).
*   **Secondary Colors (Neutrals)**:
    *   `pve-gray-900`: `#212529` (Very dark gray, almost black, for main text).
    *   `pve-gray-700`: `#495057` (Dark gray for secondary text, labels).
    *   `pve-gray-500`: `#adb5bd` (Medium gray for borders, dividers, disabled elements).
    *   `pve-gray-300`: `#dee2e6` (Light gray for subtle borders, backgrounds for UI elements like cards or table headers).
    *   `pve-gray-100`: `#f8f9fa` (Very light gray for main page backgrounds, providing contrast with content areas).
    *   `pve-white`: `#FFFFFF` (For text on dark backgrounds, content area backgrounds within cards).
*   **Accent Colors**:
    *   `pve-cyan`: `#17a2b8` (A calm cyan for informational callouts or secondary highlights).
    *   `pve-teal`: `#20c997` (A friendly teal, can be used for positive non-critical feedback or highlights).
*   **Status Colors**:
    *   `pve-green-success`: `#28a745` (For success messages, online status, healthy states. Similar to CloudStack's `@success-color`).
    *   `pve-red-error`: `#dc3545` (For error messages, offline status, critical alerts. Similar to CloudStack's `@error-color`).
    *   `pve-yellow-warning`: `#ffc107` (For warning messages, maintenance states, non-critical alerts. Similar to CloudStack's `@warning-color`).
    *   `pve-blue-info`: `#007BFF` (Primary blue can also serve as the info color for general information messages or neutral status).
    *   `pve-orange-processing`: `#fd7e14` (An orange for tasks in progress, or states that are actively changing).

## 2. Typography

A clean, legible sans-serif font family is recommended for the UI. Font sizes and weights should establish a clear visual hierarchy.

*   **Font Family**:
    *   **Primary**: `Inter` (A highly legible sans-serif font designed for UIs. If not available, fallback to `Helvetica Neue`, `Arial`, `sans-serif`).
*   **Font Hierarchy**:
    *   **Page Titles (H1 equivalent)**:
        *   Font size: `28px`
        *   Font weight: `600` (Semi-bold)
        *   Color: `pve-gray-900`
    *   **Section Headings (H2 equivalent - e.g., Dashboard widget titles, View titles)**:
        *   Font size: `22px`
        *   Font weight: `600` (Semi-bold)
        *   Color: `pve-gray-900`
    *   **Sub-Section Headings (H3 equivalent - e.g., Card titles, Form section titles)**:
        *   Font size: `18px`
        *   Font weight: `500` (Medium)
        *   Color: `pve-gray-900`
    *   **Body Text (Paragraphs, descriptions)**:
        *   Font size: `16px`
        *   Font weight: `400` (Regular)
        *   Color: `pve-gray-700`
    *   **Labels & Metadata (Form labels, table metadata, small text)**:
        *   Font size: `14px`
        *   Font weight: `400` (Regular)
        *   Color: `pve-gray-700`
    *   **Button Text**:
        *   Font size: `16px`
        *   Font weight: `500` (Medium)
    *   **Table Header Text**:
        *   Font size: `14px`
        *   Font weight: `600` (Semi-bold)
        *   Color: `pve-gray-700`
    *   **Table Body Text**:
        *   Font size: `14px`
        *   Font weight: `400` (Regular)
        *   Color: `pve-gray-900`
    *   **Sidebar Navigation Text**:
        *   Font size: `15px`
        *   Font weight: `500` (Medium)

## 3. Key UI Components Styling

Based on `proxmox_new_ui_wireframes_desc.md`:

*   **Buttons**:
    *   **Primary**: Solid background (`pve-blue-primary`), white text. Rounded corners (e.g., 4px). Hover: `pve-blue-dark` background.
    *   **Secondary**: Outlined (`pve-blue-primary` border and text), transparent or `pve-white` background. Rounded corners. Hover: `pve-blue-primary` background with white text.
    *   **Destructive (e.g., Delete)**: Solid background (`pve-red-error`), white text. Rounded corners. Hover: Darker red background.
    *   **Icon Buttons**: Square or circular, minimal padding, containing only an icon. Used for actions like edit, delete in tables, or header controls.
    *   **Disabled State**: Lighter background (`pve-gray-300`), text color `pve-gray-500`, non-interactive.
*   **Tables**:
    *   **Header**: Background `pve-gray-100` or `pve-gray-300`, text `pve-gray-700`, semi-bold. Clear column dividers.
    *   **Rows**: Alternating row colors (`pve-white` and `pve-gray-100`) for readability (optional, can be subtle). Horizontal dividers (`pve-gray-300`).
    *   **Hover State**: Subtle background change on rows.
    *   **Selected State**: Highlighted background for selected rows (e.g., `pve-blue-primary` with 10% opacity).
*   **Forms**:
    *   **Input Fields (Text, Select, Textarea)**: Border `pve-gray-500`, background `pve-white`. Rounded corners (e.g., 4px). Consistent height and padding. Focus state: Border `pve-blue-primary`, subtle box shadow.
    *   **Labels**: Positioned above input fields. Color `pve-gray-700`.
    *   **Help Text/Validation Messages**: Smaller font size (`12px`), color `pve-gray-700` for help, `pve-red-error` for validation errors.
*   **Cards (for Dashboard Widgets, Summary Views)**:
    *   Background: `pve-white`.
    *   Border: Subtle border `pve-gray-300` or a light box shadow (similar to CloudStack's `@box-shadow-base`).
    *   Rounded corners (e.g., 8px).
    *   Padding: Consistent internal padding (e.g., 16px or 24px).
    *   Header (Optional): Slightly different background or a bottom border, containing title and perhaps action icons.
*   **Navigation**:
    *   **Sidebar**: Background `pve-gray-900` (dark) or `pve-white` (light - choice depends on overall theme direction, dark often used for admin sidebars). Active item highlighted with `pve-blue-primary` (background or left border). Text color appropriate for background (e.g., `pve-gray-100` on dark, `pve-gray-700` on light).
    *   **Tabs**: Clear visual distinction for active tab (e.g., bolder text, bottom border in `pve-blue-primary`). Inactive tabs have subtle bottom border.
*   **Modals/Dialogs**:
    *   Overlay: Semi-transparent dark background.
    *   Dialog Box: Background `pve-white`, rounded corners, shadow. Header, content, and footer sections.
*   **Search/Filter Bars**:
    *   Input field styled like other form inputs, often with a search icon inside.
    *   Filter toggles/buttons can be styled as secondary or icon buttons.
*   **Notifications/Alerts (Inline)**:
    *   Background color corresponding to status (`pve-green-success`, `pve-red-error`, `pve-yellow-warning`, `pve-blue-info`).
    *   Matching icon and clear text. Rounded corners. Dismissible option.
*   **Resource Tree**:
    *   Clean item spacing. Chevron icons for expand/collapse. Icons for different resource types. Hover and selection states.

## 4. Iconography Style

*   **Style**: Minimalist, modern Line Icons. This style is clean, lightweight, and generally scales well.
*   **Weight**: Consistent stroke weight across all icons.
*   **Examples (Style Inspiration)**:
    *   Material Icons (specifically the "Outlined" set).
    *   Feather Icons.
    *   Heroicons.
*   **Usage**: Icons should be used to enhance visual communication, not replace text entirely for primary actions unless universally understood (e.g., a cog for settings, a plus for add).
*   **Color**: Icons should generally inherit the color of their parent text element or be `pve-gray-700`. Actionable icons can take on primary or status colors on hover/interaction.

## 5. Layout and Spacing Principles

*   **Grid System**: Employ a flexible grid system (e.g., 12-column) for overall page structure and alignment of main content areas, sidebars, and dashboard widgets.
*   **Consistent Spacing Unit**: Use a base spacing unit, for example, `8px`. All padding, margins, and gaps between UI elements should be multiples of this unit (e.g., `4px`, `8px`, `12px`, `16px`, `24px`, `32px`).
    *   **Component Padding**: Standard internal padding for components like buttons, inputs, cards (e.g., `8px 12px` for buttons, `16px` for card content).
    *   **Section Spacing**: Larger margins between distinct sections of a page or between dashboard widgets (e.g., `24px` or `32px`).
*   **Responsive Design**: Layout should adapt gracefully to different screen sizes. The grid system and flexible components are key to this.
*   **Alignment**: Maintain clear visual alignment of elements, especially in forms and lists, to reduce cognitive load.
*   **White Space (Negative Space)**: Ample use of white space to prevent a cluttered look, improve readability, and help separate distinct UI elements or groups.

This textual style guide provides a foundational direction. It would be the role of UI/UX designers to translate these guidelines into detailed visual mockups and a comprehensive design system, and for frontend developers to implement them in code. Iteration and user feedback would be crucial in refining these styles.Okay, I have reviewed the previously generated markdown files, especially `proxmox_new_ui_wireframes_desc.md` which details the new UI structure, and `cloudstack_ui_ux_analysis.md` for inspiration on modern UI elements.

I will now create the `proxmox_new_style_guide_desc.md` file, incorporating the requested elements: color palette, typography, key UI components with styling descriptions, iconography style, and layout/spacing principles.
