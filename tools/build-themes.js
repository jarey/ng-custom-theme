const nodeSass = require("../node_modules/node-sass");

const DEST_PATH='src/assets';
const INPUT_PATH=`${DEST_PATH}/custom-themes/`;

// TODO Buscar files in folder (tatopedia)

// WARNING - lógica a medias, no escribe ficheros (aún)
console.log('paso');
nodeSass.render({
  file: `${INPUT_PATH}/deeppurple-amber.scss`,
  outFile: `${DEST_PATH}/tatoescrito-deeppurple-amber.css`
},function() {
  console.dir(arguments);
});
