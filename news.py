import http.client
import json
import os
import urllib.parse

api_token = os.environ.get('api')
if not api_token:
    api_token = '8XePWazzEr4YvxNj9oSdXSR5ermAhAKqr9Cfcsaj'

conn = http.client.HTTPSConnection('api.thenewsapi.com')
params = urllib.parse.urlencode({
    'api_token': api_token,
    'categories': 'business,tech',
    'limit': 3,
    'language': 'en',
})

conn.request('GET', f'/v1/news/all?{params}')
res = conn.getresponse()
data = res.read()
response_data = json.loads(data.decode('utf-8'))
articles = response_data.get('data', [])

if not articles:
    articles = [
        {
            "title": "Local Compilation Active",
            "description": "The local HTML file generated successfully. If you see this, your API credentials might have run out of free request credits on api.thenewsapi.com.",
            "url": "https://thenewsapi.com"
        }
    ]

html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>News</title>
<style>
body { margin: 0; padding: 0; background: #232323; color: #cdcdcd; font-family: "Avenir Next", "Avenir", sans-serif; }
main { width: calc(100% - 240px); max-width: 680px; margin: 100px auto; padding: 0 20px; }
p { font-size: 18px; line-height: 28px; }
* { scroll-behavior: smooth; }
.article-card { margin-bottom: 40px; border-bottom: 1px solid #444; padding-bottom: 20px; }
.article-card h2 a { color: tomato; text-decoration: none; }
.article-card h2 a:hover { text-decoration: underline; }
#menuToggle { display: block; position: fixed; top: 50px; left: 50px; z-index: 1; user-select: none; }
#menuToggle a { text-decoration: none; color: #232323; transition: color 0.3s ease; }
#menuToggle a:hover { color: tomato; }
#menuToggle input { display: block; width: 40px; height: 32px; position: absolute; top: -7px; left: -5px; cursor: pointer; opacity: 0; z-index: 2; }
#menuToggle span { display: block; width: 33px; height: 4px; margin-bottom: 5px; position: relative; background: #cdcdcd; border-radius: 3px; z-index: 1; transform-origin: 4px 0px; transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease; }
#menuToggle span:first-child { transform-origin: 0% 0%; }
#menuToggle span:nth-last-child(2) { transform-origin: 0% 100%; }
#menuToggle input:checked ~ span { opacity: 1; transform: rotate(45deg) translate(-2px, -1px); background: #232323; }
#menuToggle input:checked ~ span:nth-last-child(3) { opacity: 0; transform: rotate(0deg) scale(0.2, 0.2); }
#menuToggle input:checked ~ span:nth-last-child(2) { transform: rotate(-45deg) translate(0, -1px); }
#menu { position: absolute; max-width: 400px; width: 100vw; max-height: 100vh; margin: -100px 0 0 -50px; padding: 50px; padding-top: 125px; box-sizing: border-box; overflow-y: auto; background: #ededed; list-style-type: none; transform-origin: 0% 0%; transform: translate(-100%, 0); transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0); }
#menu li { padding: 10px 0; font-size: 22px; }
#menuToggle input:checked ~ ul { transform: none; }
</style>
</head>
<body>
<nav role="navigation">
<div id="menuToggle">
<input type="checkbox" id="menuCheckbox" />
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
"""

for article in articles:
    title = article.get('title', '').replace('"', '&quot;')
    description = article.get('description', '').replace('"', '&quot;')
    url = article.get('url', '#')
    html_content += (
        f'<div class="article-card">\n'
        f'  <h2><a href="{url}">{title}</a></h2>\n'
        f'  <p>{description}</p>\n'
        f'</div>\n'
    )

html_content += """</main>
</body>
</html>"""

with open('news.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

post_data = json.dumps({'html': html_content}).encode('utf-8')
parsed_url = urllib.parse.urlparse('https://workers.dev')
conn_worker = http.client.HTTPSConnection(parsed_url.netloc)
conn_worker.request(
    'POST', 
    parsed_url.path, 
    body=post_data, 
    headers={'Content-Type': 'application/json'},
)
worker_res = conn_worker.getresponse()
print(worker_res.read().decode('utf-8'))
