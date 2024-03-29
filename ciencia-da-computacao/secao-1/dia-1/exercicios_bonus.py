"""
Exercício 1: Dada uma lista, descubra o menor elemento.
Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2
"""


def menor_numero(lista):
    return min(lista)


print(menor_numero([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


"""
Exercício 2: Faça um programa que, dado um valor n qualquer, tal que
n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.
Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base.
"""


def triangulo(n):
    for i in range(1, n + 1):
        print("*" * i)


triangulo(5)


"""
Exercício 3: Crie uma função que receba um número inteiro N e retorne o
somatório de todos os números de 1 até N. Por exemplo, para N = 5, o
valor esperado será 15.
"""


def somatorio(n):
    return sum(range(n + 1))


print(somatorio(5))


"""
Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela
de descontos:

Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.

Escreva uma função que receba o número de litros vendidos, o tipo de
combustível (codificado da seguinte forma: A - álcool, G - gasolina),
e retorne o valor a ser pago pelo cliente, sabendo-se que o preço
do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.
"""


def valor_combustivel(litros, tipo):
    if tipo == "A":
        if litros <= 20:
            return litros * 1.90 * 0.97
        else:
            return litros * 1.90 * 0.95
    elif tipo == "G":
        if litros <= 20:
            return litros * 2.50 * 0.96
        else:
            return litros * 2.50 * 0.94
    else:
        return "Tipo de combustível inválido"


print(valor_combustivel(20, "A"))
