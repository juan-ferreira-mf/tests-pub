import webbrowser

def xss_vulnerability():
    user_input = input("Digite seu comentário: ")
    comment = f"<div>{user_input}</div>"  # Vulnerável a XSS
    webbrowser.open(f"data:text/html,{comment}")  # Exibe o comentário sem sanitização

if __name__ == "__main__":
    xss_vulnerability()
