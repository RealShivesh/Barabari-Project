// download known image and bench it (with cache busting)
// we will use performance API to get the time
// this assumes dom is ready
const internet = () => {
  let [ start, end ] = [ 0, 0 ]
  const image = "/icons/barabari.png" // INSERT IMAGE HERE
  const expectedSize = 4995374 // INSERT EXPECTED SIZE HERE

  start = performance.now();

  const img = new Image();
  img.onload = () => {
    end = performance.now();
    const time = end - start;
    const rate = ( expectedSize / time ) * 1000;

    const prefix = Math.log10( speed ) / 3 | 0;
    const units = [ '', 'k', 'M', 'G' ];


  };
  img.src = image + "?n=" + Math.random();

  img.onerror = () => {
    console.log( "Could Not Calculate Net Speed, Image Now downloaded" );
  };
};