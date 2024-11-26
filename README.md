<h1 align="center">
  <br>
  <a href="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Clipart.png"><img style="border-radius: 100%" width="100" height="100" alt="Logo" src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Clipart.png"></a>
  <br>
  Rick and Morty
  <br>
  <h4 align="center">Rick and Morty interactive handbook (implemented via <a href="https://ionicframework.com/" target="_blank">Ionic</a> and <a href="https://uk.reactjs.org/" target="_blank">React</a>) 
</h1>

# Functionality
* Send GET requests to [Rick and Morty API](https://rickandmortyapi.com/documentation/) via [Capasitor](https://capacitorjs.com/docs)
* Save watch list (used [Preferences](https://capacitorjs.com/docs/apis/preferences) as a storage)
* With [CronJob](https://cron.com/) API will send request to fetch/synchronize data every day at 8 AM
# App Structure
Based on Component-based Architecture and Single-Page Application (SPA) architecture:
1. Routing
2. State Management
3. Ionic and React Components
4. Backend + Capasitor

**The whole structure can be shown as next:**
<pre>
App (React)
  ├── Pages (React Components)
  │    ├── HomePage (Component)
  │    ├── DetailsPage (Component)
  │    └── ProfilePage (Component)
  ├── State Management (Redux, Context API, etc.)
  │    ├── UserState (Global state for user info)
  │    ├── AppState (App-wide settings like theme)
  │    └── DataState (Fetched data, etc.)
  ├── Ionic Components
  │    ├── IonButton
  │    ├── IonCard
  │    ├── IonContent
  │    └── IonHeader
  ├── Backend (API Calls using Axios, GraphQL)
  ├── Capacitor (for accessing native features)
  └── Styling (CSS/SCSS, Ionic’s default themes)
</pre>

# Technologies
* [Ionic](https://ionicframework.com/)
  - Ionic/react: v8.4.0
  - Ionic/react-router: v8.4.0
  - ionicons: v7.4.0
* [React](https://uk.reactjs.org/)
  - react-router-dom: v5.0.1
  - react-scripts: v^.0.1
  - react-typed: v2.0.12
  - mui/material: v6.1.8
* [AOS](https://michalsnik.github.io/aos/)
* [Capasitor](https://capacitorjs.com/docs)
  - capasitor/core: v6.2.0
  - capasitor/android: v6.2.0
  - capasitor/preferences: v6.0.3

# Quick start
1) Clone this repository
* **in Windows:**
2) When cloned repository:
    * if you are in source folder: 
      - Shift + Right mouse button -> `Open PowerShell window here`
      - Run following command: `install_dependencies.bat`
    * if you are in some IDE: open terminal (Terminal -> New Terminal)
      - Run: `./install_dependencies.bat`
    
* **in Linux:**
2) When cloned repository:
    * if you are in source folder: 
      - Open in Terminal
      - In terminal run next commands (one by one): `chmod +x install_dependencies.sh`, `./install_dependencies.sh`
    * if you are in some IDE: open terminal (Terminal -> New Terminal)
      - Run: `./install_dependencies.sh`

# How to open App?
* Using terminal:
  * In Windows:
    * if you are in source folder: 
      - Shift + Right mouse button -> `Open PowerShell window here`
      - Run following command: `npm run start`
    * if you are in some IDE: open terminal (Terminal -> New Terminal)
      - Run: `npm run start`
  * in Linux:
    * if you are in source folder: 
      - Open in Terminal
      - In terminal run next command: `npm run start`
      - If don't have installed commmand `npm`, run next commands:
        * `sudo apt update`
        * `sudo apt install nodejs npm`
        * `npm install`
        * `npm run start`
    * if you are in some IDE: open terminal (Terminal -> New Terminal)
      - Run: `npm run start`
