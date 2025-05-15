#include <stdio.h>
#include <stdlib.h>
#define LENGTH 4

int main(){
    int array[LENGTH];
    int diferenca;
    for (int i = 0;i<LENGTH;i++){
        scanf("%d",&array[i]);
    }
    diferenca = (array[0]*array[1])-(array[2]*array[3]);
    printf("DIFERENCA = %d\n",diferenca);
}
/* #include <stdio.h>
int main(){
    int a,b,c,d,diferenca;
    scanf("%d",&a);
    scanf("%d",&b);
    scanf("%d",&c);
    scanf("%d",&d);
    diferenca = (a*b)-(c*d);
    printf("DIFERENCA = %d\n",diferenca);
} */