# Task Management Application

This is a web-based task management application where users can create, update, and delete tasks. The application includes user authentication and authorization to ensure that only authorized users can access and modify tasks. Additional features include task prioritization, due dates, and notifications to enhance the user experience.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Running Tests

To run tests, use the following command:
```
npm test
```

## Building for Production

To create a production build, use the following command:
```
npm run build
```

This will create a `build` directory with the production-ready files.

## Deployment

To deploy the application, follow the instructions provided by your hosting provider. Ensure that you have set up the necessary environment variables for the application to function correctly.

## User Authentication and Authorization

The application includes user authentication and authorization to ensure that only authorized users can access and modify tasks. Follow these steps to set up user authentication and authorization:

1. Register a new user:
   - Navigate to the registration page.
   - Fill in the required information (username and password).
   - Submit the registration form.

2. Log in with an existing user:
   - Navigate to the login page.
   - Enter your username and password.
   - Submit the login form.

3. Log out:
   - Click the logout button to log out of the application.

4. User permissions:
   - Only authenticated users can create, update, and delete tasks.
   - Ensure that you are logged in to access and modify tasks.

## Licensebat Configuration

The repository contains a configuration file for Licensebat, which is a tool for managing and checking licenses of dependencies in a project. Here are the key sections and their purposes:

### Licenses

This section specifies the licenses that are accepted or unaccepted by Licensebat. Only one of the options (`accepted` or `unaccepted`) can be enabled at once.

- `accepted`: Lists the licenses that are allowed. In this case, only "MIT", "MSC", and "BSD" licenses are accepted.
- `unaccepted`: Lists the licenses that are not allowed. If this option is used, all other licenses are accepted except for unknown licenses or dependencies without licenses.

### Dependencies

This section allows users to configure how Licensebat handles dependencies.

- `ignored`: Lists the dependencies that Licensebat will not check for their license.
- `ignore_dev_dependencies`: If set to true, Licensebat will ignore the development dependencies.
- `ignore_optional_dependencies`: If set to true, Licensebat will ignore the optional dependencies.

### Behavior

This section configures the behavior of Licensebat.

- `run_only_on_dependency_modification`: If set to true, Licensebat will only run the checks when one of the dependency files or the `.licrc` file has been modified.
- `do_not_block_pr`: If set to true, Licensebat will never block the build.

The configuration file ensures that the project adheres to specific licensing requirements and provides flexibility in managing dependencies and their licenses. The file can be found in the root directory of the repository.
