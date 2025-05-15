#include <stdio.h>

int main (){
    int max,i;
    double a,b,c;
    scanf("%d", &max);
    double media[max];
    for (i = 0; i < max; i++){
        scanf("%lf %lf %lf", &a,&b,&c);
        media[i] = ((a*2)+(b*3)+(c*5))/10;
    }
    for (i = 0; i < max; i++){
        printf("%.1f\n", media[i]);
    }
}