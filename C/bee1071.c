#include <stdio.h>

int main(){
    int n1,n2,i,f;
    int soma = 0;
    scanf("%d", &n1); scanf("%d", &n2);
    if(n1<n2){
        i = n1+1; f = n2-1;
    }else{
        i = n2+1; f = n1-1;
    }
    while(i<=f){
        if(i % 2 != 0){
            soma += i;
        }
    i++;
    }
    printf("%d\n",soma); 
}   