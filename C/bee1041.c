#include <stdio.h>
#include <string.h>

int main(){
    double x,y;
    char quadrante[100] = "";
    scanf("%lf %lf", &x, &y);
    if (x == 0 && y == 0){
        strcat (quadrante, "Origem");    
    } else if(x == 0){
        strcat (quadrante, "Eixo Y");
    }else if(y == 0){
        strcat (quadrante, "Eixo X");
    }else if(x > 0 && y > 0){
        strcat (quadrante, "Q1");
    }else if(x < 0 && y > 0){
        strcat (quadrante, "Q2");
    }else if(x < 0 && y < 0){
        strcat (quadrante, "Q3");
    }else if(x > 0 && y < 0){
        strcat (quadrante, "Q4");
    }
    printf("%s\n", quadrante);
}