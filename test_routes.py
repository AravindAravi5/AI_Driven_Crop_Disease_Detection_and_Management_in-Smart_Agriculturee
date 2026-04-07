import urllib.request, urllib.parse

base = 'http://127.0.0.1:5000'

# Test GET pages
for path in ['/', '/home.html', '/login.html', '/aimodal.html', '/finance.html', '/MainMedia.html']:
    try:
        r = urllib.request.urlopen(base + path)
        print(f'GET {path}: {r.status} OK')
    except Exception as e:
        print(f'GET {path}: ERROR - {e}')

# Test login POST - correct credentials (expect 302 redirect)
data = urllib.parse.urlencode({'email': 'test@test.com', 'password': 'test123'}).encode()
req = urllib.request.Request(base + '/login.html', data=data, method='POST')
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor())
try:
    opener.addheaders = [('Content-Type', 'application/x-www-form-urlencoded')]
    r = opener.open(req)
    print(f'POST /login.html (correct creds): {r.status} - reached {r.url}')
except urllib.error.HTTPError as e:
    print(f'POST /login.html (correct creds): HTTP {e.code}')
except Exception as e:
    print(f'POST /login.html (correct creds): {e}')

# Test login POST - wrong credentials (expect 200 with error message)
data2 = urllib.parse.urlencode({'email': 'bad@test.com', 'password': 'wrong'}).encode()
req2 = urllib.request.Request(base + '/login.html', data=data2, method='POST')
try:
    r2 = opener.open(req2)
    content = r2.read().decode()
    if 'Invalid email' in content:
        print('POST /login.html (wrong creds): 200 - error message shown correctly')
    else:
        print('POST /login.html (wrong creds): 200 - page loaded (check for error)')
except Exception as e:
    print(f'POST /login.html (wrong creds): {e}')
