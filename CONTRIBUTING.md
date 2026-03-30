# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/material-ui-admin/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly in the browser
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React** with functional components and hooks
- **Material-UI** for UI components
- **SCSS** for styling
- **JSX** for component markup
- **ESLint** for code quality

Before submitting:
```bash
# Install dependencies
npm install

# Start the development server and test your changes
npm start

# Build to ensure no errors
npm run build

# Run tests
npm test
```

### Coding Standards

1. **Component Structure**: Use functional components with hooks
2. **Naming Conventions**: 
   - Components: PascalCase (e.g., `EmployeeForm.jsx`)
   - Files: Match component name
   - CSS Classes: kebab-case (e.g., `employee-form`)
3. **File Organization**: 
   - Components in `/src/components/`
   - Pages in `/src/pages/`
   - Hooks in `/src/hooks/`
   - Services in `/src/services/`
4. **Styling**: Use SCSS modules, avoid inline styles where possible
5. **Material-UI**: Follow Material Design principles and use Material-UI components consistently

### Adding New Features

When adding new features:
1. Create appropriate component structure in relevant directories
2. Add corresponding SCSS files for styling
3. Update services if backend integration is needed
4. Ensure responsive design works on mobile and desktop
5. Test all form validations and user interactions
6. Update documentation if needed

### UI/UX Guidelines

1. Follow Material Design principles
2. Ensure accessibility (ARIA labels, keyboard navigation)
3. Maintain consistent spacing and layout
4. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
5. Ensure responsive design for mobile, tablet, and desktop

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
