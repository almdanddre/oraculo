valor = float(input())
codigo = int(input())
a_vista = 15/100 #1
cartao_debito = 10/100 #2
cartao_credito = 5/100 #3

if(codigo == 1):
    desconto = valor * a_vista
    print(valor - desconto)
elif(codigo == 2):
    desconto = valor * cartao_debito
    print(valor - desconto)
else:
    desconto = valor * cartao_credito
    print(valor - desconto)