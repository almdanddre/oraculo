import sys

entrada1 = int(sys.argv[1])
entrada2 = int(sys.argv[2])
saida = int(sys.argv[3])

def verifica_soma(entrada1, entrada2, saida):
    soma = 0
    if(entrada1 < entrada2):
        for i in range(entrada1+1, entrada2):
            if(i % 2 != 0):
                soma += i
    elif(entrada1 > entrada2):
        for i in range(entrada2+1, entrada1):
            if(i % 2 != 0):
                soma += i
    if(saida == soma):
        return "A saída está correta para a entrada fornecida. Good job!"
    else:
        return "A saída para a entrada fornecida não está correta. Try again!"

print(verifica_soma(entrada1, entrada2, saida))