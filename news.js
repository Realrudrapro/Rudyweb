const newsContainer = document.getElementById("news");

async function loadNews() {
    try {
        newsContainer.innerHTML = "<p>Loading news...</p>";

        const response = await fetch("/news-api");

        const responseText = await response.text();

        console.log("Status:", response.status);
        console.log("Response:", responseText);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${responseText}`);
        }

        const data = JSON.parse(responseText);

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
        newsContainer.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
    }
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

loadNews();