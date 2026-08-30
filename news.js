const newsContainer = document.getElementById("news");

async function loadNews() {
    try {
        console.log("Fetching /api/news...");

        const response = await fetch("/api/news");

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));

        const text = await response.text();

        console.log("Raw response:", text);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${text}`);
        }

        const data = JSON.parse(text);

        newsContainer.innerHTML = "";

        data.data.forEach(article => {
            newsContainer.innerHTML += `
                <article>
                    <h2>${article.title}</h2>
                    <p>${article.description || ""}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </article>
            `;
        });

    } catch (error) {
        console.error("NEWS ERROR:", error);
        newsContainer.innerHTML = `<p>${error.message}</p>`;
    }
}

loadNews();