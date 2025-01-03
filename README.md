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

3. Install the dependencies:
   ```
   npm install
   ```

4. Install OpenZeppelin Contracts library:
   ```
   npm install @openzeppelin/contracts
   ```

5. Install OpenZeppelin Contracts library using forge:
   ```
   forge install OpenZeppelin/openzeppelin-contracts
   ```

6. Start the application:
   ```
   npm start
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

## Fetching a Pull Request

To fetch a pull request from a remote repository and create a new branch locally, use the following command:

```
git fetch origin pull/ID/head:BRANCH_NAME
```

Replace `ID` with the actual pull request number and `BRANCH_NAME` with the name of the new branch.

For example, to fetch pull request number 42 and create a new branch named `feature-branch`, use the following command:

```
git fetch origin pull/42/head:feature-branch
```

## Switching to the New Branch

To switch to the new branch that was created, use the following command:

```
git switch BRANCH_NAME
```

Replace `BRANCH_NAME` with the name of the branch you want to switch to.

For example, to switch to the branch named `feature-branch`, use the following command:

```
git switch feature-branch
```
