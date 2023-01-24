import sys

entrada = sys.argv[1]
saida = sys.argv[2]

def idade_em_dias(valor, saida):
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
  if((str(anos) + "A" + str(meses) + "M" + str(dias) + "D") == saida):
    return "A saída está correta para a entrada fornecida. Good job!"
  return "A saída para a entrada fornecida não está correta. Try again!"



print(idade_em_dias(int(entrada), str(saida)))