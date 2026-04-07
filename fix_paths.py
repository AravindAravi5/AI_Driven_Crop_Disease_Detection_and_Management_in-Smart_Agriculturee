"""Fix all broken image paths and nav links across MainMedia.html and finance.html"""

fixes = {
    "templates/MainMedia.html": [
        # Images
        ('src="Only Image\\\\tamato.jpeg"',      'src="/static/tamato.jpeg"'),
        ('src="Only Image\\\\wheat rust.jpeg"',  'src="/static/wheat_rust.jpeg"'),
        ('src="Only Image\\\\corn smut.jpg"',    'src="/static/corn_smut.jpg"'),
        ('src="Only Image\\\\patato.jpeg"',      'src="/static/patato.jpeg"'),
        ('src="Only Image\\\\Rice-Blast-Disease.png"', 'src="/static/Rice-Blast-Disease.png"'),
        ('src="Only Image\\\\apple-scab.jpg"',   'src="/static/apple-scab.jpg"'),
        ('src="Only Image\\\\aarablelogo.jpg"',  'src="/static/aarablelogo.jpg"'),
        ('src="Only Image\\pexels-artiagarwal-2880741.jpg"', 'src="/static/pexels-artiagarwal-2880741.jpg"'),
        # Nav links
        ('href="home.html"',    'href="/"'),
        ('href="finance.html"', 'href="/finance.html"'),
        ('href="MainMedia.html"','href="/MainMedia.html"'),
        ('href="aimodal.html"', 'href="/aimodal.html"'),
        # Disease detail links
        ('href="mediafor tomatobilght.html"', 'href="#"'),
        ('href="mediaforwheatrust.html"',     'href="#"'),
        ('href="mediaforcornsmut.html"',      'href="#"'),
        ('href="mediapotatoblight.html"',     'href="#"'),
        ('href="mediaforriceblast.html"',     'href="#"'),
        ('href="mediaforapplesacb.html"',     'href="#"'),
    ],
    "templates/finance.html": [
        ('src="Only Image/aarablelogo.jpg"',       'src="/static/aarablelogo.jpg"'),
        ('src="Only Image\\\\financepagewali.jpg"','src="/static/financepagewali.jpg"'),
        ('src="Only Image\\financepagewali.jpg"',  'src="/static/financepagewali.jpg"'),
        ('href="home.html"',     'href="/"'),
        ('href="MainMedia.html"','href="/MainMedia.html"'),
        ('href="aimodal.html"',  'href="/aimodal.html"'),
        ('href="financepop.html"','href="#"'),
    ],
}

for filepath, replacements in fixes.items():
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    for old, new in replacements:
        content = content.replace(old, new)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Fixed: {filepath}")

print("All done.")
