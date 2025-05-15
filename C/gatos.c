#include <stdio.h>
#include <string.h>

int main(){
    char nome[25];
    double salario,gatos;    
    printf("Qual seu nome?\n");
    scanf("%s", &nome);
    printf("Qual salario?\n");
    scanf("%lf", &salario);
    gatos = ((salario*0.3)/150);
    printf("Ola %s, voce pode ter %.f gatos!", nome, gatos);
}