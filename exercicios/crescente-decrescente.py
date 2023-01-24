import sys

entrada1 = int(sys.argv[1])
entrada2 = int(sys.argv[2])
saida = sys.argv[3]

def verifica_ordem(entrada1, entrada2, saida):
    ordem = ''
    if(entrada1 > entrada2):
        ordem = 'Decrescente'
    else:
        ordem = 'Crescente'
    if(saida == ordem):
        return "A saída está correta para a entrada fornecida. Good job!"
    return "A saída para a entrada fornecida não está correta. Try again!"


print(verifica_ordem(entrada1, entrada2, saida))