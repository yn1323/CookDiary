
cordova build android --release
jarsigner -verbose -keystore .keystore platforms/ios/app/build/outputs/apk/release/app-release-unsigned.apk $1
cp ./platforms/ios/app/build/outputs/apk/release/app-release-unsigned.apk ./apk/

mv ./apk/app-release-unsigned.apk ./apk/ios-signed.apk
echo ios release build succeeded
