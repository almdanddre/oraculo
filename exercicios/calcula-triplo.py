import sys

entrada = sys.argv[1]
saida = sys.argv[2]

def calcula_triplo(entrada, saida):
    if(entrada*3 == saida):
        return "A saída está correta para a entrada fornecida. Good job!"
    return "A saída para a entrada fornecida não está correta. Try again!"

print(calcula_triplo(int(entrada), int(saida)))