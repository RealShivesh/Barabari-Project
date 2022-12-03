export const debounce = function ( func, wait, immediate ) {
    let timeout;
    return () => {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if ( !immediate ) func.apply( context, args );
        };
        let callNow = immediate && !timeout;
        clearTimeout( timeout );
        timeout = setTimeout( later, wait );
        if ( callNow ) func.apply( context, args );
    };
};

let intersectionObserver;

function ensureIntersectionObserver () {
    if ( intersectionObserver ) return;

    intersectionObserver = new IntersectionObserver(
        ( entries ) => {
            entries.forEach( entry => {
                const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
                entry.target.dispatchEvent( new CustomEvent( eventName ) );
            } );
        }
    );
}

export default function viewport ( element ) {
    ensureIntersectionObserver();
    intersectionObserver.observe( element );
    return {
        destroy () {
            intersectionObserver.unobserve( element );
        }
    }
}

/* <h1 use:viewport
        on:enterViewport={() => console.log('enter!')}
        on:exitViewport={() => console.log('exit!')}
>Hello World!</h1> */