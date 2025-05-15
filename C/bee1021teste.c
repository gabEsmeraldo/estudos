#include <stdio.h>
#define cedulaslength 6
#define moedaslength 6
int main(){
    double valor;
    int valorNovo;
    scanf("%lf",&valor);
    int cedulas[7] = {100, 50, 20, 10, 5, 2};
    double moedas[6] = {1.00, 0.50, 0.25, 0.10, 0.05, 0.01};
    printf("NOTAS:\n");
    for (size_t i = 0; i < cedulaslength; i++){   
        valorNovo = ("%d",(valor/cedulas[i]));
        printf("%d nota(s) de R$ %d.00\n",valorNovo,cedulas[i]);
        valor = valor-(cedulas[i]*valorNovo);
    }
    printf("MOEDAS:\n");
    for (size_t i = 0; i < moedaslength; i++){
        valorNovo = ("%d",(valor/moedas[i]));
        printf("%d moeda(s) de R$ %.2f\n",valorNovo,moedas[i]);
        valor = valor-(moedas[i]*valorNovo) + 0.0001;
    }
}