import sys

entrada = sys.argv[1]
arr1 = entrada.split()

saida = sys.argv[2]

def converteArray(lista):
    listaNova = []
    for i in range(len(lista)):
        t = float(lista[i])
        listaNova.append(t)
    return listaNova

def numeros_positivos(entrada, saida):
    contador = 0
    for i in range(len(entrada)):
        if(entrada[i] > 0):
            contador += 1
    if(contador == saida):
        return "A saída está correta para a entrada fornecida. Good job!"
    return "A saída para a entrada fornecida não está correta. Try again!"


arrEntrada = converteArray(arr1)

print(numeros_positivos(arrEntrada, int(saida)))
