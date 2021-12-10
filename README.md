![[object Object]](https://socialify.git.ci/discowork/discowork/image?description=1&font=KoHo&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F95651058%3Fv%3D4&name=1&owner=1&pulls=1&stargazers=1&theme=Dark)
# Discowork

A simple discord.js framework for creating great things.

Click in **Use this template** and make discord bots!
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ENVIRONMENT` - development/production

`BOT_TOKEN` - Your bot's token

`DB_HOST` - MongoDB Host

`DB_USER` - MongoDB User

`DB_PASS` - MongoDB Password

This project currently only accepts mongodb connection, you can change the way it connects to the database in the `src/Core/Cliente.ts` file.




## How to Run the Project

Create the .env file based on the .env.example file. To see how to create the BOT_TOKEN read the following topic.

Run `yarn install` to install dependencies.

Run `yarn dev` to give life to the bot.
## How to create BOT_TOKEN and invite your server

Access [Discord Developer Portal](https://discord.com/developers/applications/) and click in **New Application** button.

Enter a name for your bot and click the create button.

Select the bot settings column, and click the add bot button.

Click the copy button, this is your bot's token, add in `BOT_TOKEN` environment in .env file. Now we need to configure some things to invite him to the server.

In **Privileged Gateway Intents**, check the option **PRESENCE INTENT** and **SERVER MEMBERS INTENT**.

Click on OAuth2 and on url generator, on **SCOPES** check the options **bot** and **applications.commands**. In **BOT PERMISSIONS** select the permissions you want for your bot, read them carefully and think about the functions your bot will perform.

Copy the url that was generated and paste into the browser, add your bot on the server and be happy! 
