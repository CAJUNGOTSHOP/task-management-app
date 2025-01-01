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

## Setting Environment Variables

To set the required environment variables, use the following code snippet:

```python
import getpass
import os

for env_var in [
    "CDP_API_KEY_NAME",
    "CDP_API_KEY_PRIVATE_KEY",
]:
    if not os.getenv(env_var):
        os.environ[env_var] = getpass.getpass(f"Enter your {env_var}: ")

# Optional: Set network (defaults to base-sepolia)
os.environ["NETWORK_ID"] = "base-sepolia"  # or "base-mainnet"
```

This code will prompt you to enter the values for the required environment variables if they are not already set. You can also set the `NETWORK_ID` environment variable to specify the network to use (default is `base-sepolia`).
