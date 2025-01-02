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

## Git Rebase with Signoff

The command `git rebase HEAD~3 --signoff` is used to rebase the last three commits and add a sign-off message to each commit. This is typically used to indicate that the author agrees to the Developer Certificate of Origin (DCO).

* The `HEAD~3` part specifies the last three commits.
* The `--signoff` option adds a "Signed-off-by" line at the end of the commit message.

This command is useful when you need to rebase your commits and ensure that each commit has a sign-off message, which is often required for contributing to open source projects.

## Pushing Changes with Force-With-Lease

After rebasing your commits with a sign-off message, you need to push the changes to the remote repository. Use the following command to push the changes:

```
git push --force-with-lease origin add-aiplugintool
```

The `--force-with-lease` option ensures that you only force-push if your local branch is up-to-date with the remote branch, preventing accidental overwrites of other people's changes.

## Installing langchain-community Package

To install the `langchain-community` package, use the following command:

```
%pip install -qU langchain-community
```

## Reloading and Autoreloading Extensions

To reload and autoreload extensions, use the following commands:

```
%reload_ext autoreload
%autoreload 2
```

## Importing Necessary Modules

To import the necessary modules, use the following code:

```
from datetime import datetime

from langchain.agents import AgentType, initialize_agent
from langchain_community.agent_toolkits.clickup.toolkit import ClickupToolkit
from langchain_community.utilities.clickup import ClickupAPIWrapper
from langchain_openai import OpenAI
```

## Setting Up OAuth Client Credentials for Clickup API

To set up OAuth client credentials and redirect URI for Clickup API, use the following code:

```
# Copilot Sandbox
oauth_client_id = "ABC..."
oauth_client_secret = "123..."
redirect_uri = "https://google.com"
```

## Printing Access Code URL for Clickup API

To print the access code URL for Clickup API, use the following code:

```
print("Click this link, select your workspace, click `Connect Workspace`")
print(ClickupAPIWrapper.get_access_code_url(oauth_client_id, redirect_uri))
```

## Click this link, select your workspace, click `Connect Workspace`
https://app.clickup.com/api?client_id=ABC...&redirect_uri=https://google.com

## Setting the Code Variable

To set the `code` variable with the value `"THISISMYCODERIGHTHERE"`, use the following code:

```
code = "THISISMYCODERIGHTHERE"
```

## Getting the Access Token

To get the access token using `ClickupAPIWrapper.get_access_token`, use the following code:

```
access_token = ClickupAPIWrapper.get_access_token(
    oauth_client_id, oauth_client_secret, code
)
```

## Handling Error: Code Already Used

If you encounter the error `{'err': 'Code already used', 'ECODE': 'OAUTH_014'}`, it means you have already used this code once. Go back a step and generate a new code. Our best guess for the URL to get a new code is:

```
https://app.clickup.com/api?client_id=B5D61F8EVO04PR0JX0U73984LLS9GI6P&redirect_uri=https://google.com
```

## Initializing the Clickup Toolkit

To initialize the Clickup toolkit with the access token and print the team ID, use the following code:

```
clickup_api_wrapper = ClickupAPIWrapper(access_token=access_token)
toolkit = ClickupToolkit.from_clickup_api_wrapper(clickup_api_wrapper)
print(
    f"Found team_id: {clickup_api_wrapper.team_id}.\nMost request require the team id, so we store it for you in the toolkit, we assume the first team in your list is the one you want. \nNote: If you know this is the wrong ID, you can pass it at initialization."
)
```

## Initializing the Agent

To initialize the agent using `OpenAI` and `initialize_agent`, use the following code:

```
llm = OpenAI(temperature=0, openai_api_key="")

agent = initialize_agent(
    toolkit.get_tools(), llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True
)
```

## Helper Function for Demo

To add a helper function `print_and_run` for demo purposes, use the following code:

```
# helper function for demo
def print_and_run(command):
    print("\033[94m$ COMMAND\033[0m")
    print(command)
    print("\n\033[94m$ AGENT\033[0m")
    response = agent.run(command)
    print("".join(["-"] * 80))
    return response
```

## Running Commands with Helper Function

To run commands with the helper function, use the following code:

```
print_and_run("Get all the teams that the user is authorized to access")
print_and_run("Get all the spaces available to the team")
print_and_run("Get all the folders for the team")
```
