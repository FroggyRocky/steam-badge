## Steam Status Badge
Steam Status Badge is a project that allows you to share your Steam status and the game you are currently playing by simply using an `<img>` tag within any HTML-readable space.
This makes it easy to display your Steam activity on README.md file within your github profile, websites, blogs, forums, and more. 🌐

If you want to share your love for gaming with the world, Steam Status Badge is the way to go! ❤️🎮

<img src="https://steam-badge.vercel.app/api/steam-badge.svg?steamId=76561199388121132" alt="Steam Status Badge" />

## How to Use

Add a img tag with your steam id as a query parameter:

```bash
<img src="https://steam-badge.vercel.app/api/steam-badge.svg?steamId=<your_steam_id>" alt="Steam Status Badge"  />
```
Using Steam Id is absolutely safe. Anybody can check someone's steam id, if the steam profile is public. 

# How to Find Profile's Steam Id

To find your Steam Id is simple, just navigate to your profile and in the url section you will see a numerical url parameter, this is your Steam Id

![alt text](https://github.com/FroggyRocky/steam-badge/blob/main/screenshots/steam-id.png)

## Getting Started Locally

First, run the development server:

```bash
npm install
npm run dev
```

## Building the Project

```bash
npm run build
```