## Documentation

TODO: RUN THE APPLICATION FIRST TIME

TODO: STRUCTURE

TODO: Deploy the app
1) Build client for Web
2) Move build-web to the server
3) build server
4) deploy gcp




UI KITS
https://undraw.co/illustrations
https://www.opendoodles.com/compositions
https://iradesign.io/illustrations/objects

WEBTOOLS

- Server URL: https://datepan-app.ew.r.appspot.com
- GAE : https://console.cloud.google.com/home/dashboard?project=datepan-app
- Github: https://github.com/martinrebo/DatePan
- Figma: https://www.figma.com/file/TAgcEU18E2cxU0iPQcAUFT/WUDTIME?node-id=4%3A2171
- Wudtime Docs: https://docs.google.com/document/d/1pr-FsALx4gI1EuHtwqno0NNHf7UxwhEiLykZZQ3m_6s/edit?usp=sharing

# Gitmoji control version

- https://docs.gitmoji-changelog.dev/#/

Here the recommended workflow to generate your changelog file using gitmoji-changelog:

Important: Before generating, be sure to have all tags locally (e.g. git fetch origin)

- Make changes and commit: git commit -m ":sparkles: my awesome feature"
- Bump version (ex: 1.0.0) in package.json using semver convention
- Run gitmoji-changelog, then the file CHANGELOG.md is created or updated with all changes
- You can freely edit the new release in the changelog file, it will not be overwritten with the next generation
- Commit package.json and CHANGELOG.md file
- Tag your release: git tag -a v1.0.0 -m "v1.0.0" (or create a Github release)
- Push to the remote git push --follow-tags

## Libs

- Expo: https://expo.dev/
- Express: https://expressjs.com/
- Gitmoji: https://gitmoji.dev/
- React Native Elements: https://reactnativeelements.com/

## List of docs consulted:

- Run multiple services in GAE:
  - - https://stackoverflow.com/questions/40071208/multiple-nodejs-services-modules-on-google-app-engine-flexible-environment
- Problem with npm expo-optimize intalation: https://github.com/nuxt/image/issues/204

  - - ERR! sharp Prebuilt libvips 8.10.5 binaries are not yet available for darwin-arm64v8

  - Error Typescript JSX: https://stackoverflow.com/questions/71791347/npm-package-cannot-be-used-as-a-jsx-component-type-errors/71828113#71828113

  ## Competitors

  - meetup
  - Mobilizon
  - Uolala
  - Mastodon
  - PixelFed
