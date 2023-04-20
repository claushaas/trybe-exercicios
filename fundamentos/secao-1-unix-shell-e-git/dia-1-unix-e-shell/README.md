# Exercícios do dia 1 - Unix & Shell

Nesse dia fiz os seguintes exercícios no terminal ZSH:

## Parte 1 - Criação de Arquivos e Diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório   chamado unix_tests e navegue até ele.

````sh
1 mkdir unix_tests
2 cd unix_tests
````

2. Crie um arquivo de texto com o nome trybe.txt.

````sh
1 touch trybe.txt
````

3. Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

````sh
1 cp trybe.txt trybe_backup.txt
````

4. Renomeie o arquivo trybe.txt.

````sh
1 mv trybe.txt outro_nome.txt
````

5. Dentro de unix_tests, crie um novo diretório chamado backup.

````sh
1 mkdir backup
````

6. Mova o arquivo trybe_backup.txt para o diretório backup.

````sh
1 mv trybe_backup.txt backup
````

7. Dentro de unix_tests, crie um novo diretório chamado backup2.

````sh
1 mkdir backup2
````

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

````sh
1 mv backup/trybe_backup.txt backup2
````

9. Apague a pasta backup.

````sh
1 rmdir backup
````

10. Renomeie a pasta backup2 para backup.

````sh
1 mv backup2 backup
````

11. Veja qual é o path completo do diretório atual e liste todos os arquivos dentro dele.

````sh
1 pwd
2 ls
````

12. Apague o diretório backup.

````sh
1 rm -rd backup
````

13. Limpe o terminal.

````sh
1 clear
````

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt.

````sh
1 head -n 5 skills.txt
````

15. Mostre na tela as 4 últimas skills do arquivo skills.txt.

````sh
1 tail -n 4 skills.txt
````

16. Apague todos os arquivos que terminam em .txt.

````sh
1 rm *.txt
````

## Parte 2 - Manipulação e Busca

1. Mostre todo o conteúdo do arquivo countries.txt na tela.

````sh
1 cat countries.txt
````

2. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

````sh
1 less countries.txt
2 # ou...
3 more countries.txt
````


3. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

````sh
1 less countries.txt
2 # ou...
3 more countries.txt
4 # Agora que você está dentro do arquivo, digite uma barra `/` e em seguida a palavra "Zambia".
5 # /Zambia
6 # Pressione *enter* para sair.
````

4. Busque por Brazil no countries.txt.

````sh
1 grep Brazil countries.txt
````

5. Busque novamente por brazil, mas agora utilize o lower case e não considere letras maiúsculas ou minúsculas.

````sh
1 grep -i brazil countries.txt
````

6. Busque pelas frases que não contenham a palavra fox.

````sh
1 grep -v fox phrases.txt
````

7. Conte o número de palavras do arquivo phrases.txt.

````sh
1 wc -w phrases.txt
````

8. Conte o número de linhas do arquivo phrases.txt.

````sh
1 wc -l phrases.txt
````

9. Crie os arquivos empty.tbt e empty.pdf.

````sh
1 touch empty.tbt
2 touch empty.pdf
````

10. Liste todos os arquivos do diretório unix_tests_search.

````sh
1 ls
````

11. Liste todos os arquivos que terminem com txt.

````sh
1 ls *txt
````

12. Liste todos os arquivos que terminem com tbt ou txt.

````sh
1 ls *t?t
````

13. Acesse o manual do comando ls.

````sh
1 man ls
````

## Parte 3 - Comandos de Input e Output

1. Crie a pasta unix_tests_skills e navegue até ela.

````sh
1 mkdir unix_tests_skills
2 cd /home/joaozinho/unix_tests_skills
3 pwd
````

2. Crie um arquivo de texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, cada um em sua linha.

````sh
1 touch skills2.txt
2 echo "Internet" >> skills2.txt
3 echo "Unix" >> skills2.txt
4 echo "Bash" >> skills2.txt
````


3. Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.

````sh
1 echo "HTML" >> skills2.txt
2 echo "CSS" >> skills2.txt
3 echo "JavaScript" >> skills2.txt
4 echo "React" >> skills2.txt
5 echo "SQL" >> skills2.txt
6 sort < skills2.txt
````

4. Conte o número de linhas do arquivo skills2.txt.

````sh
1 cat skills2.txt | wc -l
````

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt. Ele deve conter as 3 primeiras skills em ordem alfabética.

````sh
1 sort < skills2.txt | head -n 3 > top_skills.txt
````

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

````sh
1 touch phrases2.txt
2 echo "The quick brown fox jumps over the lazy dog." > phrases2.txt
3 echo "Quick fox jumps nightly above wizard." >> phrases2.txt
4 echo "The quick onyx goblin jumps over the lazy dwarf." >> phrases2.txt
````

7. Conte o número de linhas que contêm as letras br.

````sh
1 grep br phrases2.txt | wc -l
````

8. Conte o número de linhas que não contêm as letras br.

````sh
1 grep -v br phrases2.txt | wc -l
````

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

````sh
1 echo "Japão" >> phrases2.txt
2 echo "Austrália" >> phrases2.txt
````

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

````sh
1 cp countries.txt bunch_of_things.txt
2 cat phrases2.txt >> bunch_of_things.txt
````

11. Ordene o arquivo bunch_of_things.txt.

````sh
1 sort bunch_of_things.txt -o bunch_of_things.txt
````