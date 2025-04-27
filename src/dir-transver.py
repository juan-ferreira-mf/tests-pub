import os

def directory_traversal():
    user_input = input("Digite o nome do arquivo: ")
    file_path = f"/home/user/files/{user_input}"  # Vulnerabilidade de Diretório Traversal
    with open(file_path, 'r') as f:
        print(f.read())

if __name__ == "__main__":
    directory_traversal()

