with open('templates/home.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<a href="#">\n      Home\n     </a>', '<a href="/">\n      Home\n     </a>')
content = content.replace('<a href="finance.html">', '<a href="/finance.html">')
content = content.replace('<a href="MainMedia.html">', '<a href="/MainMedia.html">')
content = content.replace('<a href="aimodal.html">Scan Image</a>', '<a href="/aimodal.html">Scan Image</a>')
content = content.replace('<a href="login.html" class="scan-btn"', '<a href="/login.html" class="scan-btn"')
content = content.replace('<a href="learnpopup.html"', '<a href="/learnpopup.html"')
content = content.replace('<a href="aimodal.html" class="btn"', '<a href="/aimodal.html" class="btn"')

with open('templates/home.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('All links fixed successfully.')
