const options = {
    accept: "*/*",
    // Accept-Encoding: gzip, deflate, br
    // If-None-Match: W/"e5771800da04818a1b0a735db12c01b8"
    host: "metatags.io",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
    "accept-language": "en-GB,en;q=0.9",
    referrer: "https://metatags.io/",
    connection: "keep-alive"
};
const res = await fetch( 'https://metatags.io/api/metadata?domain=https://barabari.nukes.in/', options );

const rest = await res.text();
console.log( rest );