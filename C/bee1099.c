#include <stdio.h>

int main(){
    int index,i,max,f,n1,n2,soma;
    scanf("%d",&max);
    int valores[max];
    for (index = 0; index < max; index++){
        soma = 0;
        scanf("%d %d", &n1, &n2);
        if (n1 > n2){
            i = n2+1; f = n1-1;
        }else{
            i = n1+1; f = n2-1;
        }
        for (; i<=f; i++){
            if(i%2 == 1){
                soma += i;
            }
        }
        valores[index] = soma;    
    }
    for (index = 0; index < max; index++){
        printf("%d\n", valores[index]);
    }
}