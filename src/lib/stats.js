const internet = () => {
  const rand = Math.random() * 10e10 | 0; // cache busting
  let [ start, end ] = [ 0, 0 ]
  const image = "/icons/barabari.png?" + rand; // INSERT IMAGE HERE
  const expectedSize = 4995374 // INSERT EXPECTED SIZE HERE

  start = performance.now();

  const img = new Image();
  img.onload = () => {
    end = performance.now();
    const time = end - start;
    const rate = ( expectedSize / time ) * 1000;

    const prefix = Math.log10( speed ) / 3 | 0;
    const units = [ '', 'k', 'M', 'G' ];

    const speed = ( rate / Math.pow( 10, prefix * 3 ) ).toFixed( 2 ) + units[ prefix ] + 'B/s';

    console.log( "Net Speed: " + speed );
  };
  img.src = image + "?n=" + Math.random();

  img.onerror = () => {
    console.log( "Could Not Calculate Net Speed, Image Now downloaded" );
  };
};