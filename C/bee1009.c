#include <stdio.h>
int main(){
    char nome[10];
    double salario,vendas,salarioFinal;
    scanf("%s", &nome);
    scanf("%lf", &salario);
    scanf("%lf", &vendas);
    salarioFinal = salario + (0.15*vendas);
    printf("TOTAL = R$ %.2f\n",salarioFinal);
}