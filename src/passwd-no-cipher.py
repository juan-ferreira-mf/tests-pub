def store_password():
    password = input("Digite sua senha: ")
    with open("passwords.txt", "a") as file:  # Armazenando senha em texto puro (sem criptografia)
        file.write(password + "\n")

if __name__ == "__main__":
    store_password()
