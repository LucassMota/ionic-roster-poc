cd electron
npm install
npm run build
cd ..
npx cap sync @capacitor-community/electron
npm run build
npx cap copy @capacitor-community/electron


Create pack
cd electron
npm run electron:pack



Create Windows app
npm run electron:make
