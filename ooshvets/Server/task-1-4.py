from http.server import HTTPServer, BaseHTTPRequestHandler 
import json

class HttpGetHandler(BaseHTTPRequestHandler):
    
    def do_GET(self):
        if self.path == "/":
            self.send_response(200)
            self.send_header("Content-type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write("Shvets Olha".encode())
            
        elif self.path == "/client":
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            user_agent = self.headers["User-Agent"]
            self.wfile.write(json.dumps(parse_user_agent(user_agent)).encode())
            
        elif self.path == "/favicon.ico":
            self.send_response(200)
            self.send_header("Content-type", "text/html;charset=utf-8")
            self.end_headers()
            favicon = """
                <html>
                    <head>
                        <link rel="icon" type="image/x-icon" href="https://hostiq.ua/blog/wp-content/uploads/2020/05/Cat_5.png">
                    </head>
                </html>
             """
            self.wfile.write(favicon.encode())
            
        else:
            self.send_response(404)
            self.send_header("Content-type","text/html")
            self.end_headers()
            html = """
                <html>
                    <body>
                        <h1>404 Not Found</h1>
                            <img src="https://cdn.prod.website-files.com/65ba70a5bb6f912baf0094a3/68247ffb5ba48029f6b7ddd5_www.filmograph.tv_404(1440).avif">
                    </body>
                </html>
            """
            self.wfile.write(html.encode())

def parse_user_agent(user_agent):
    first_bracket_left = user_agent.find("(")
    first_bracket_right = user_agent.find(")")
    
    application_token = user_agent[0: first_bracket_left]
    platform_information = user_agent[first_bracket_left + 1: first_bracket_right ]
    
    trimmed_user_agent = user_agent[first_bracket_right + 1:]
    second_bracket_left = trimmed_user_agent.find("(")
    second_bracket_right = trimmed_user_agent.find(")")
    
    rendering_engine = trimmed_user_agent[0: second_bracket_left]
    compatibility_tokens = trimmed_user_agent[second_bracket_left + 1:second_bracket_right]
    application_version_identifier = trimmed_user_agent[second_bracket_right + 1:]
    
    user_agent_parsed = {
        "application_token": application_token,
        "platform_information": platform_information,
        "rendering_engine": rendering_engine,
        "compatibility_tokens": compatibility_tokens,
        "application_version_identifier": application_version_identifier
    }
    return user_agent_parsed

def run(server_class=HTTPServer, handler_class=HttpGetHandler):
    server_address = ('localhost', 8000)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()

run()
