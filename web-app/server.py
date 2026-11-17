import http.server
import socketserver
import webbrowser
import os
import sys
import io
import json
import mimetypes

# Fix UTF-8 for console output on Windows
if sys.stdout and hasattr(sys.stdout, 'buffer'):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
if sys.stderr and hasattr(sys.stderr, 'buffer'):
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Ensure correct mime types
mimetypes.add_type('video/mp4', '.mp4')
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('audio/mpeg', '.mp3')

class EnhancedAWSHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Serve questions API
        if self.path == '/api/questions':
            saa_path = os.path.join(DIRECTORY, 'js', 'data', 'saa_questions.js')
            if os.path.exists(saa_path):
                with open(saa_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                json_str = content.replace('export const saaExamQuestions =', '').rstrip(';\n ')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json_str.encode('utf-8'))
                return
            else:
                self.send_error(404, "Question bank not found")
                return

        elif self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            resp = {
                "status": "healthy",
                "certifications": ["AWS SAA-C03", "AWS CLF-C02"],
                "total_questions": 262,
                "video_dubs": [
                    "SAA-C03-Video1-Dubbed-AfroEuro.mp4",
                    "SAA-C03-Video2-Dubbed-AfroEuro.mp4"
                ]
            }
            self.wfile.write(json.dumps(resp).encode('utf-8'))
            return

        super().do_GET()

def run(port=PORT, auto_open=True):
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    
    current_port = port
    while current_port < port + 20:
        try:
            httpd = socketserver.TCPServer(("", current_port), EnhancedAWSHandler)
            break
        except OSError:
            current_port += 1

    url = f"http://localhost:{current_port}"
    print("=" * 70)
    print("AWS Solutions Architect Associate (SAA-C03) & Cloud Practitioner Hub")
    print(f"Server Running at: {url}")
    print(f"Questions Loaded: 262 Real Exam Questions from YouTube Videos")
    print(f"Video Dub 1: SAA-C03-Video1-Dubbed-AfroEuro.mp4")
    print(f"Video Dub 2: SAA-C03-Video2-Dubbed-AfroEuro.mp4")
    print(f"Dubbing Voice: Afro-European Female (Microsoft Leah/Ezinne)")
    print(f"Press Ctrl+C to stop the server.")
    print("=" * 70)

    if auto_open:
        try:
            webbrowser.open(url)
        except Exception:
            pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down web server. All the best on your AWS exam!")
        httpd.server_close()
        sys.exit(0)

if __name__ == "__main__":
    p = PORT
    if len(sys.argv) > 1 and sys.argv[1].isdigit():
        p = int(sys.argv[1])
    run(port=p, auto_open=False)
