cd app
npm run build
cd ..
rm -r ./www
ln -s app/build/ www
cordova build
