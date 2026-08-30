export async function onRequest(context) {
    const apiKey = context.env.THE_NEWS_API_KEY;

    if (!apiKey) {
        return Response.json(
            { error: "THE_NEWS_API_KEY is missing" },
            { status: 500 }
        );
    }

    const response = await fetch(
        `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&language=en&limit=10`
    );

    const data = await response.json();

    return Response.json(data);
}