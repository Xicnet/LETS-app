echo "\nMAKE SURE WE HAVE CLI:\n"

sudo npm install -g cordova
sudo npm install -g ionic

echo "\nUPDATE CLI:\n"
sudo npm update -g cordova
sudo npm update -g ionic

npm i -D -E ionic@latest

echo "\nCURRENT NPM STATE:\n"
npm outdated

echo "\nCURRENT CORDOVA PLATFORM STATE:\n"
ionic cordova platform list
ionic cordova platform save
ionic cordova platform list

echo "\nCURRENT CORDOVA PLUGIN STATE:\n"
ionic cordova plugin list
ionic cordova plugin save
ionic cordova plugin list

echo "\nUPDATING CORDOVA PLUGINS:\n"
ionic cordova prepare

PLUGINS=$(ionic cordova plugin list | awk '{print $1}')
for PLUGIN in $PLUGINS; do
    ionic cordova plugin rm $PLUGIN && ionic cordova plugin add $PLUGIN && ionic cordova plugin save
done

echo "\nUPDATED CORDOVA PLUGINS:\n"
ionic cordova plugin list

echo "\nCURRENT STATE:\n"
npm outdated
echo "\nUPDATING NPM:\n"
npm update
echo "\nUPDATED NPM:\n"
npm outdated
