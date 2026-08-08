const API_KEY = "YOUR_API_KEY";

async function generateNews() {
    const params = new URLSearchParams({
        api_token: API_KEY,
        categories: "business,tech",
        limit: "50",
        language: "en"
    });

    const response = await fetch(
        `https://api.thenewsapi.com/v1/news/all?${params}`
    );

    if (!response.ok) {
        throw new Error(`News API error: ${response.status}`);
    }

    const data = await response.json();
    const articles = data.data || [];

    const articlesHTML = articles.map(article => {
        const title = escapeHTML(article.title || "");
        const description = escapeHTML(article.description || "");
        const url = encodeURI(article.url || "#");

        return `
        <div class="article-card">
            <h2>
                <a href="${url}" target="_blank" rel="noopener noreferrer">
                    ${title}
                </a>
            </h2>
            <p>${description}</p>
        </div>`;
    }).join("");

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>News</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #232323;
            color: #cdcdcd;
            font-family: "Avenir Next", "Avenir", sans-serif;
        }

        main {
            width: calc(100% - 40px);
            max-width: 900px;
            margin: 100px auto;
        }

        #menuToggle {
            display: block;
            position: fixed;
            top: 50px;
            left: 50px;
            z-index: 10;
        }

        #menuToggle input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            cursor: pointer;
            opacity: 0;
            z-index: 2;
        }

        #menuToggle span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            background: #cdcdcd;
            border-radius: 3px;
        }

        #menu {
            position: absolute;
            width: 300px;
            margin: -100px 0 0 -50px;
            padding: 125px 50px 50px;
            box-sizing: border-box;
            background: #ededed;
            list-style: none;
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }

        #menuToggle input:checked ~ ul {
            transform: none;
        }

        #menu li {
            padding: 10px 0;
            font-size: 22px;
        }

        #menu a {
            color: #232323;
            text-decoration: none;
        }

        .article-card {
            background: #303030;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 12px;
        }

        .article-card h2 {
            margin-top: 0;
        }

        .article-card h2 a {
            color: #ffffff;
            text-decoration: none;
        }

        .article-card h2 a:hover {
            color: tomato;
        }

        .article-card p {
            font-size: 17px;
            line-height: 1.6;
        }
    </style>
</head>

<body>

<nav>
    <div id="menuToggle">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="games.html">Games</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="more.html" target="_blank">Show me more</a></li>
        </ul>
    </div>
</nav>

<main>
    <h1>Latest News</h1>
    ${articlesHTML}
</main>

</body>
</html>`;
}

function escapeHTML(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

generateNews()
    .then(html => {
        console.log(html);
    })
    .catch(error => {
        console.error(error);
    });