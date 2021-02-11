rm ./apk/android-signed.apk
rm ./apk/android-release.apk

rm -r ./platforms

cordova platform add android

cordova build android --release
jarsigner -verbose -keystore .keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $1
cp ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./apk/

mv ./apk/app-release-unsigned.apk ./apk/android-signed.apk
echo android release build succeeded
./zipalign -f -v 4 apk/android-signed.apk apk/android-release.apk
rm ./apk/android-signed.apk
