# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


import math


def maior_numero(a, b):
    return max(a, b)


print(maior_numero(10, 20))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media_aritmetica(lista):
    return sum(lista) / len(lista)


print(media_aritmetica([1, 2, 3, 4, 5]))

"""
Exercício 3: Faça um programa que, dado um valor n qualquer, tal que
n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
"""


def quadrado(n):
    for i in range(n):
        print("*" * n)


quadrado(5)

"""
Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
"Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".
"""


def maior_nome(lista):
    return max(lista, key=len)


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


"""
Exercício 5: Considere que a cobertura da tinta é de 1 litro para
cada 3 metros quadrados e que a tinta é vendida em latas de 18
litros, que custam R$ 80,00. Crie uma função que retorne dois
valores em uma tupla contendo a quantidade de latas de tinta
a serem compradas e o preço total a partir do tamanho de
uma parede (em m²).
"""


def quantidade_latas_tinta(metros):
    litros = metros / 3
    latas = math.ceil(litros / 18)
    preco = latas * 80
    return (latas, preco)


print(quantidade_latas_tinta(54))


"""
Exercício 6: Crie uma função que receba os três lado de um triângulo
e informe qual o tipo de triângulo formado ou "não é triangulo",
caso não seja possível formar um triângulo.
"""


def tipo_triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return "Equilátero"
        elif a == b or a == c or b == c:
            return "Isósceles"
        else:
            return "Escaleno"
    else:
        return "Não é triângulo"


print(tipo_triangulo(3, 3, 3))
print(tipo_triangulo(3, 3, 4))
print(tipo_triangulo(3, 4, 5))
print(tipo_triangulo(3, 3, 7))
