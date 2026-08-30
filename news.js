const newsContainer = document.getElementById("news");

async function loadNews() {
    try {
        newsContainer.innerHTML = "<p>Loading news...</p>";

        const response = await fetch("/api/news");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (!data.data || data.data.length === 0) {
            newsContainer.innerHTML = "<p>No news available.</p>";
            return;
        }

        newsContainer.innerHTML = "";

        data.data.forEach(article => {
            const articleElement = document.createElement("article");

            articleElement.innerHTML = `
                <h2>${escapeHtml(article.title || "Untitled")}</h2>
                <p>${escapeHtml(article.description || "No description available.")}</p>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                    Read more
                </a>
            `;

            newsContainer.appendChild(articleElement);
        });

    } catch (error) {
        console.error("News error:", error);
        newsContainer.innerHTML = "<p>Unable to load news right now.</p>";
    }
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

loadNews();