![knowbox-quick-presentation](https://user-images.githubusercontent.com/1651750/86513684-146c2600-be04-11ea-89e2-db787d7571e5.gif)

Browser extension to demonstrate server side rendered popup window. Uses [Stimulus Reflex](https://docs.stimulusreflex.com/) to update the view over websockets.

## Install locally

```sh
git clone git@github.com:mtomov/knowbox.git
bundle
yarn
docker-compose up redis db
bin/rails db:create db:migrate

# Start the Rails server
bin/rails s

# Start local webpack server in another terminal session
./bin/webpack-dev-server
```

### Run the main view in browser directly

![knowbox-local-development](https://user-images.githubusercontent.com/1651750/86512660-ea166a80-bdfb-11ea-8cab-c3a38b42abed.gif)

Visit http://localhost:3000 where the extension should be running

#### Run as a browser extension in popup window

```sh
cd extension
yarn
yarn run dev:chrome
```

Go to chrome extensions - chrome://extensions/
Developer Mode ➡️ Load unpacked ➡️ find path to compiled extension `extension/extension/chrome` ➡️ Open
