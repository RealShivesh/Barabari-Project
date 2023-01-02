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
        ( entries ) => entries.forEach( entry =>
            entry.target.dispatchEvent(
                new CustomEvent( entry.isIntersecting ? 'view' : 'hide' )
            )
        )
    );
};

export function viewport ( element ) {
    ensureIntersectionObserver();
    intersectionObserver.observe( element );

    return { destroy () { intersectionObserver.unobserve( element ); } }
};

export const viewHandle = ( e ) => {
    console.log( e );
}