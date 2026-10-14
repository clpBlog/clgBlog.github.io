"""Local preview only. Run from any directory with Python 3.10+."""
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from functools import partial
from pathlib import Path
class Handler(SimpleHTTPRequestHandler):
    extensions_map={'.svg':'image/svg+xml','.pdf':'application/pdf','.gltf':'model/gltf+json','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.html':'text/html','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon','.json':'application/json','.woff':'font/woff','.gif':'image/gif','.m4a':'audio/mp4','.txt':'text/plain','':'application/octet-stream'}
    def end_headers(self):
        self.send_header('Cache-Control','no-store')
        super().end_headers()
server=ThreadingHTTPServer(('127.0.0.1',8771),partial(Handler,directory=str(Path(__file__).resolve().parent)))
print('Local preview: http://127.0.0.1:8771/',flush=True)
import sys
if '--open' in sys.argv:
    import webbrowser
    webbrowser.open('http://127.0.0.1:8771/')
server.serve_forever()
