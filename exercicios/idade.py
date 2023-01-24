valor = int(input())
anos = 0
meses = 0
dias = 0
for i in range(364, valor, 365):
    anos += 1
valor -= 365 * anos
for j in range (29, valor, 30):
    meses += 1
valor -= 30 * meses
dias = valor
print(f"{anos}A{meses}M{dias}D")