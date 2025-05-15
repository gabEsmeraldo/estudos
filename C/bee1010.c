#include <stdio.h>
int main(){
    double qnt1,qnt2,valor1,valor2,valorTotal;
    scanf("%*d %lf %lf",&qnt1,&valor1);
    scanf("%*d %lf %lf",&qnt2,&valor2);
    valorTotal = (qnt1*valor1)+(qnt2*valor2);
    printf("VALOR A PAGAR: R$ %.2f\n", valorTotal);
}