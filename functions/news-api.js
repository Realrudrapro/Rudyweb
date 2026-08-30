export async function onRequest(context) {
    try {
        const apiKey = context.env.THE_NEWS_API_KEY;

        if (!apiKey) {
            return Response.json(
                {
                    error: "THE_NEWS_API_KEY is not configured"
                },
                {
                    status: 500
                }
            );
        }

        const apiUrl =
            `https://api.thenewsapi.com/v1/news/all` +
            `?api_token=${encodeURIComponent(apiKey)}` +
            `&language=en` +
            `&limit=10`;

        const response = await fetch(apiUrl);

        const data = await response.json();

        if (!response.ok) {
            return Response.json(
                {
                    error: "TheNewsAPI request failed",
                    details: data
                },
                {
                    status: response.status
                }
            );
        }

        return Response.json(data);

    } catch (error) {
        return Response.json(
            {
                error: "Server error",
                details: error.message
            },
            {
                status: 500
            }
        );
    }
}