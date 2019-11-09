# Tasks- Currency Selector Component

## Description

A component with buttons, which select and unselect a currency, and display it. To select the currency ( for example EUR ), click the respective button. To unselect it, either click the same button again, or the X button that appeared along with the selected currency box.

## Instructions 

### For obtaining the component

In order to obtain/download the component, the following steps should be done:
 
 1. Go to https://github.com/JimBratsos/Tasks/ , which is the repository for my component.
  1.a. If you want to just download and preview the component, click **"Clone or download"**, and then **"Download ZIP"**. After the download, extract it and, run index.html .
  1.b. If you want to download and be able to modify and make changes to GitHub, or just download it via the Terminal, click on **"Fork"** instead of **"Clone or download"** and follow the steps below.

2. After fork finishes, it will make a copy of my component which will be available to your repositories. 

3. **---If you do have git and NodeJS on your system already, skip this step---** Make sure you have latest version of git and NodeJS in your system. Depending on your OS you can install them in the following websites : [git](https://git-scm.com/downloads) , [NodeJS](https://nodejs.org/en/download/package-manager/)

4. Go to your Terminal. If you have Windows, type "Command Prompt" in search and run it. If you have Mac or Linux, search for **"Terminal"** and run it instead 

5. Navigate to the directory of your choice using ```cd /my-directory```

6. Execute the command ``` git clone https://github.com/your-github-name/Tasks/ ``` and replace **your-github-name** with your GitHub name. This will create a clone to your current directory.

#### For running the component

In order to run the component go to the directory you specified above, open the folder and run index.html.

#### For running the test of the component

In order to check if the component functions correctly, I have created an automated test for it, and it can be executed with the following steps:

1. Go to your terminal, type ``` npm install ``` and execute this command

2. After the installation of the modules finishes, using ``` npx cypress open ```, run the Cypress automation tool application.

3. Finally, click on the **cypresstest.spec.js** file that will appear in the app. A new browser window will open and the test will start running. It will be successfull if it has green ticks on the left side of the screen.

## Updates from previous version:

1. Used a unified CSS class for every different thing I implemented, in my component, to avoid excessive comma use in my CSS file to include all the IDs.

2. Completely re-wrote HTML and JS files. Added an onload JS function, which loads everything I need for my component (buttons), in order for it to function as I want to. In a few words, I used a for-loop, generated all the buttons with their checkboxes respectively, and appended them in the needed areas. ( for example, I appended the buttons in the grid, and the checkboxes in the buttons ).

3. Removed JQuery reference. 

4. Used local variables that hold referenced elements, in order to simplify the code, make it more readable and reusable **fast**.

5. I think the most important change is mobile responsiveness. Tested in numerous physical devices, Firefox's and Google Chrome's mobile view, the component is responsive until the minimum width of 320px ; thus covering most of today's devices.

6. Tested backwards compatibility in browsers. By checking [CanIUse](https://caniuse.com/), I found out that my component is compatible for almost more than 95% of the userbase; leaving only the Opera Mini and IE11 users out. The reason is that I could not find a simple way to support these two, as it would require a vast amount of changes and code adding, because they do not support lots of the features I used. ( for example the much needed template literals, in order for me to add the styles to my buttons ). 

7. Implemented a test which checks if the component is functioning as it is supposed to do so, by using Cypress

## Made with

I used Vanilla JS, CSS, HTML for the component development and Cypress for automated testing process.
