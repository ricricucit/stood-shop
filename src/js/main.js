// JS from vendors from node_modules (installed with NPM)
if (!global._babelPolyfill) {
  require("babel-polyfill") //workaround to make this work with the iFrame refresh of CraftCMS preview
}

import $ from 'jquery';
import objectFitImages from 'object-fit-images'; //polyfill for CSS object-fit
//import whateverOtherJqueryPlugin from 'whateverJqueryPlugin';

console.info( "\n\n\nCreated by %chttp://welance.com/ %ca Freelancers Collective.\n\n\n\n", "color: #FDB68E", "color: auto" );

$(function() {
    //console.info("Good News: Main.js file has been imported");
    $.ajax({
        dataType: "json",
        url: '/dist/data/laptop_stands/en/laptop-stand-made-of-wood.json',
        data: '',
        success: function(data){
            console.log('DATA', data);
        }
    });
});
