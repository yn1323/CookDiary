# How to

## Installation
### Required
```
npm install -g degit
npm install -g cordova
# keytool, emulator so on...
```

### Get Started
#### Installation
```
npx degit yn1323/template#react-cordova <app-name>
cd <app-name>
npm install
npx degit yn1323/template#react app
cd app
npm install
```

#### HTML  
/app/public/index.html
Add below inside body tag
```html
<script type="text/javascript" src="cordova.js"></script>
```

#### Change permission to run bat
```
npm run chmod
```

#### Change display name in package.json

#### Use React-router
Sample when using `npx degit yn1323/template#react <app-name>`  
/app/src.index.tsx
```tsx
// Add
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
// Replace
<BrowserrRuter/> -> <Router history={history}/>
// Enclose with Suspense (Example)
<Provider store={store}>
  <Suspense fallback={<div>Loading...</div>}>
    <Router history={history}>
      <Index />
    </Router>
  </Suspense>
</Provider>
```
/app/src/route/index.tsx
```tsx
<Route exact path="/" component={Top} /> // url for debug
<Route exact path="./index.html" component={Top} /> // url for using cordova
```

#### config.xml
#### Add Icon
- /res/icons/android (useful website is in OTHERS)
#### Change
- name
- widget#id
- description
- author
- etc


#### Platform (After fix config.xml)
```
cordova platfom add android
cordova platform add ios
```

## Debug
### Debug in browser
```
cd app
npm run start
```

### Debug in device
```
npm run build
cordova emulate android or ios
```

## Release

### First time only
#### Create Key
```
npm run createkey <Alias>
```

#### Check Key(when forgot alias)
```
npm run keycheck <Password>
```

### Every release

### Create Release apk
```
npm run release--android <Alias>
npm run release--ios <Alias>
```

### Path to APK
- apk

# Others
## Icon

[App Icon Generator](https://appicon.co/)
[IMB Mobile Foundation docs](https://mobilefirstplatform.ibmcloud.com/tutorials/ja/foundation/8.0/application-development/cordova-apps/adding-images-and-icons/)

| Resolution  | Icon size |
|:------- | --------------:|
| ldpi    |        36 x 36 |
| mdpi    |        48 x 48 |
| hdpi    |        72 x 72 |
| xhdpi   |        96 x 96 |
| xxhdpi  |      144 x 144 |
| xxxhdpi |      192 x 192 |

## Memo
- Network in emulator does not work. Connect to 10.0.2.2 of localhost ?
