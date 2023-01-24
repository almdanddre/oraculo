import sys

str1 = sys.argv[1]
arr1 = str1.split()

str2 = sys.argv[2]
arr2 = str2.split()

str3 = sys.argv[3]
arr3 = str3.split()

def converteArray(lista):
    listaNova = []
    for i in range(len(lista)):
        t = int(lista[i])
        listaNova.append(t)
    return listaNova

def merge_invertido(lista1, lista2, saida):
    i = len(lista1) - 1
    j = len(lista2) - 1
    lista3 = []
    while ((i >= 0) and (j >= 0)):
        if lista1[i] > lista2[j]:
            lista3.append(lista1[i])
            i -= 1
        else:
            lista3.append(lista2[j])
            j -= 1
    if i == -1:
        for k in range(j, -1, -1):
            lista3.append(lista2[k])
    else:
        for m in range(i, -1, -1):
            lista3.append(lista1[m])
    if(lista3 == saida):
        return "A saída está correta para a entrada fornecida. Good job!"
    return "A saída para a entrada fornecida não está correta. Try again!"

arrayInt1 = converteArray(arr1)
arrayInt2 = converteArray(arr2)
arrayInt3 = converteArray(arr3)

print(merge_invertido(arrayInt1, arrayInt2, arrayInt3))