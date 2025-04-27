import os

def insecure_function():
    user_input = input("Digite o nome de um arquivo: ")
    os.system(f"cat {user_input}")  # Vulnerabilidade de Command Injection

def hardcoded_credentials():
    username = "admin"
    password = "123456"  # Senha hardcoded (ruim!)

def sql_injection():
    user = input("Nome de usuário: ")
    query = "SELECT * FROM users WHERE username = '" + user + "';"  # Vulnerável a SQL Injection
    print(query)

if __name__ == "__main__":
    insecure_function()
    hardcoded_credentials()
    sql_injection()

