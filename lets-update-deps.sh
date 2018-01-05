echo "\nUPDATE CLI:\n"
npm update -g cordova
npm update -g ionic

echo "\nCURRENT STATE:\n"
ionic cordova platform save
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
