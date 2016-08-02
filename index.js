var SR = require( 'screen-renderer' );

function MultilineProgress() {
  var __label_length = 0;
  var __lines = {};

  function right_padding( _str , _size ) {
    for( var i = _str.length ; i < _size ; i++ ) {
      _str += ' ';
    }
    return _str;
  }

  var sr = new SR( ( _out , _params ) => {
    for ( var k in _params ) {
      var line = _params[k];
      _out( right_padding( line.label , __label_length + 1 ) , line.status , '\n' );
    }
  } );

  MultilineProgress.prototype.set_line = function( _key , _label , _status ) {
    if ( _label.length > __label_length ) {
      __label_length = _label.length;
    }

    __lines[ _key ] = { label: _label , status: _status };
    sr.update( __lines );
  }

  MultilineProgress.prototype.set_status = function( _key , _status ) {
    __lines[ _key ].status = _status;
    sr.update( __lines );
  }
}

module.exports = MultilineProgress;
