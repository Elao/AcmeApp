###########
# Install #
###########

install:
	yarn install

link:
	react-native link

#########
# Watch #
#########

# Start react native packager
start: export ENVFILE = .env.development
start:
	react-native start

#######
# Run #
#######

# Run on both platforms
run: run-ios run-android

# Run on iOs
run-ios: export ENVFILE = .env.development
run-ios:
	react-native run-ios --simulator 'iPhone SE'

run-ios@staging: export  ENVFILE = .env.staging
run-ios@staging:
	react-native run-ios --device

run-ios@prod: export ENVFILE = .env.production
run-ios@prod:
	react-native run-ios --device --configuration Release

# Run on Android
run-android: export ENVFILE = .env.development
run-android:
	react-native run-android

run-android@staging: export  ENVFILE = .env.staging
run-android@staging:
	react-native run-android

run-android@prod: export ENVFILE = .env.production
run-android@prod:
	react-native run-android --variant=release

###########
# Release #
###########

release: export ENVFILE = .env.production
release: build-release-ios build-release-android

release-ios: export ENVFILE = .env.production
release-ios: build-release-ios

release-android: export ENVFILE = .env.production
release-android: build-release-android

release@staging: export ENVFILE = .env.staging
release@staging: build-release-ios build-release-android

release-ios@staging: export ENVFILE = .env.staging
release-ios@staging: build-release-ios

release-android@staging: export ENVFILE = .env.staging
release-android@staging: build-release-android

# Release builder iOs

build-release-ios:
	xcodebuild \
		-workspace ./ios/AcmeApp.xcodeproj/project.xcworkspace \
		-scheme AcmeApp \
		-sdk iphoneos \
		-configuration AppStoreDistribution archive \
		-archivePath ./ios/release/AcmeApp.xcarchive
	echo "The app is available at: ./ios/release/AcmeApp.xcarchive"
	open ./ios/release

# Release builder Android

build-release-android:
	. ${ENVFILE}
	cd android && ./gradlew assembleRelease
	echo "The app is available at: ./android/app/build/outputs/apk/app-release.apk"
	open ./android/app/build/outputs/apk/

##########
# Custom #
##########

# Android ADB - Install release
android-install-release:
	adb install -r ./android/app/build/outputs/apk/app-release.apk
