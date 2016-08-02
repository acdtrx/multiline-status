var MP = require( '../' );


var progress = new MP();

progress.set_line( 'a' , 'A' , 'Waiting' );
progress.set_line( 'b' , 'Value B' , 'Waiting' );

setTimeout( () => {
  progress.set_status( 'b' , 'Done' );
} , 1000 );

setTimeout( () => {
  progress.set_status( 'a' , 'Done' );
} , 2000 );
