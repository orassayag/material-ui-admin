# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
material-ui-admin/
├── material-ui-admin-1/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── App/            # Main App component
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Header/    # Top navigation header
│   │   │   ├── SideMenu/  # Left sidebar navigation
│   │   │   ├── PageHeader/# Page title component
│   │   │   ├── Input/     # Custom input component
│   │   │   ├── Select/    # Custom select component
│   │   │   └── RadioGroup/# Custom radio group component
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── useForm.jsx # Form state management hook
│   │   ├── pages/         # Page components
│   │   │   └── Employees/ # Employee management pages
│   │   │       ├── Employees/      # Main employees page
│   │   │       ├── EmployeeForm/   # Employee form component
│   │   │       └── Form/           # Generic form component
│   │   ├── services/      # Business logic and API services
│   │   │   └── employee.service.js
│   │   ├── index.jsx      # Application entry point
│   │   └── styles.css     # Global styles
│   ├── package.json       # Project dependencies
│   └── README.md          # Project documentation
└── README.md              # Root documentation
```

## Available Scripts

### Development

```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- Page will reload when you make edits
- Lint errors will appear in the console

### Testing

```bash
npm test
```
Launches the test runner in interactive watch mode.

### Production Build

```bash
npm run build
```
Builds the app for production to the `build` folder.
- Optimizes the build for best performance
- Minifies files and includes hashes in filenames
- App is ready to be deployed

## Features Overview

### Employee Management
- Add new employees with a comprehensive form
- Form validation for all input fields
- Material-UI components for consistent design
- Responsive layout for all screen sizes

### Form Components
- **Input**: Custom text input with Material-UI styling
- **Select**: Dropdown selection with validation
- **RadioGroup**: Radio button groups for single selections
- **Date Picker**: Date selection for hire date
- **Checkbox**: Boolean field selections

### Form Validation
The form includes validation for:
- Full name (required)
- Email (required, format validation)
- Mobile number (format validation)
- Department selection (required)
- Hire date (required)
- Gender selection (required)

### Custom Hooks
- **useForm**: Manages form state and input changes
  - Handles form values
  - Input change handler
  - Form reset functionality

## Configuration

### Material-UI Theme
The project uses Material-UI's default theme. To customize:
1. Create a theme file in `src/theme/`
2. Import and wrap your App with `ThemeProvider`
3. Customize colors, typography, spacing, etc.

### Adding New Pages
1. Create a new folder in `src/pages/`
2. Create your page component
3. Add route in `App.jsx` (if using routing)
4. Update side menu navigation

### Styling
- SCSS files are located next to their components
- Global styles are in `src/styles.css` and `src/index.scss`
- Use Material-UI's styling solutions where possible
- Follow BEM naming convention for custom classes

## Development Guidelines

### Component Development
1. Use functional components with hooks
2. Keep components small and focused
3. Separate container and presentational components
4. Use PropTypes for type checking (or migrate to TypeScript)

### State Management
- Currently using local state with hooks
- Consider Redux or Context API for complex state
- useForm hook for form-specific state

### Best Practices
1. Keep components DRY (Don't Repeat Yourself)
2. Extract reusable logic into custom hooks
3. Use semantic HTML elements
4. Ensure accessibility (ARIA labels, keyboard navigation)
5. Write descriptive variable and function names
6. Comment complex logic

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check for syntax errors
npm run build
# Review console output for specific errors
```

## Browser Support

This project supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For production builds, see `browserslist` in `package.json` for detailed browser support.

## Resources

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Material-UI Documentation](https://material-ui.com/)
- [Tutorial Video](https://www.youtube.com/watch?v=m-2_gb_3L7Q) by CodAffection

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
