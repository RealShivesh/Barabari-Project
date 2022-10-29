<script>
    export let //
        title = null,
        description =
            "We are a non-profit working to provide quality Tech based mentorship to candidates from underprivileged backgrounds. With one-to-one mentorship and curated training modules, we get them ready for jobs in the Tech sector",
        url = "https://barabari.nukes.in/";

    const makeTitle = (title) =>
        `{makeTitle(title)}${title ? ` | ${title}` : ""}`;
</script>

<!-- Primary Meta Tags -->
<title>{makeTitle(title)}</title>
<meta name="title" content={makeTitle(title)} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:title" content={makeTitle(title)} />
<meta property="og:description" content={description} />
<meta property="og:image" content="{url}/favicon.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={makeTitle(title)} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content="{url}/favicon.png" />

<!--
    NO INDEX MODE (OPTIONAL)
    const privacyTags = [
	{
		name: "google",
		content: "nositelinkssearchbox",
	},
	{
		name: "google",
		content: "nopagereadaloud",
	},
	{
		name: "robots",
		content: "noindex",
	},
	{
		name: "twitter:dnt",
		content: "on",
	},
	{
		name: "rating",
		content: "adult",
	},
];
<meta name={item.name} content={item.content} />
-->
