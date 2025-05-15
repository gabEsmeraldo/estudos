#include <stdio.h>
#include <math.h>

int main(){
    double a,b,c,delta,r1,r2, raizDelta;
    scanf("%lf %lf %lf", &a,&b,&c);
    delta = ((b*b)-4*a*c);
    raizDelta = sqrt(delta);
    if (delta < 0 || a == 0)
    {
        printf("Impossivel calcular\n");
    } else {
        r1 = (-b+raizDelta) / (2*a);
        r2 = (-b-raizDelta) / (2*a);
        printf("R1 = %.5f\nR2 = %.5f\n", r1, r2);
    }
}