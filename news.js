const newsContainer = document.getElementById("news");

async function loadNews() {
    newsContainer.innerHTML = "<p>Loading news...</p>";

    try {
        const response = await fetch("/api/news");

        const text = await response.text();

        console.log("API status:", response.status);
        console.log("API response:", text);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = JSON.parse(text);

        if (!data.data || data.data.length === 0) {
            newsContainer.innerHTML = "<p>No news available.</p>";
            return;
        }

        newsContainer.innerHTML = "";

        data.data.forEach(article => {
            const articleElement = document.createElement("article");

            articleElement.innerHTML = `
                <h2>${article.title || "Untitled"}</h2>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                    Read more
                </a>
            `;

            newsContainer.appendChild(articleElement);
        });

    } catch (error) {
        console.error("News error:", error);

        newsContainer.innerHTML = `
            <p>Unable to load news right now.</p>
            <p>Error: ${error.message}</p>
        `;
    }
}

loadNews();