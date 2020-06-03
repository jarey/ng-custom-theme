const nodeSass = require("../node_modules/node-sass");
const fs = require('fs');

const ASSET_PATH='src/assets';
const INPUT_PATH=`${ASSET_PATH}/custom-themes`;
const DEST_PATH=`${ASSET_PATH}`;

const argsDeepPurple = {file: `${INPUT_PATH}/deeppurple-amber.scss`,outFile: `${DEST_PATH}/deeppurple-amber.css`};
const argsIndigo = {file: `${INPUT_PATH}/indigo-pink.scss`,outFile: `${DEST_PATH}/indigo-pink.css`};
const argsPinkGrey = {file: `${INPUT_PATH}/pink-grey.scss`,outFile: `${DEST_PATH}/pink-grey.css`};
const argsPurpleGreen = {file: `${INPUT_PATH}/purple-green.scss`,outFile: `${DEST_PATH}/purple-green.css`};

nodeSass.render(argsDeepPurple,function(err, result) {
  manageNodeSassFinish(argsDeepPurple,err,result)
});

nodeSass.render(argsIndigo,function(err, result) {
  manageNodeSassFinish(argsIndigo,err,result)
});

nodeSass.render(argsPinkGrey,function(err, result) {
  manageNodeSassFinish(argsPinkGrey,err,result)
});

nodeSass.render(argsPurpleGreen,function(err, result) {
  manageNodeSassFinish(argsPurpleGreen,err,result)
});

function manageNodeSassFinish(args,err, result){
  if (!err) {
    fs.writeFile(args.outFile, result.css, function(err2) {
     if (!err2) console.log("File generated!");
     else console.log(`ERROR! During file generation: ${err}`);
    });
   }else{
   console.log(`ERROR! During file generation: ${err}`);
   console.log('Terminada la compilación:'+result)
  }
}


