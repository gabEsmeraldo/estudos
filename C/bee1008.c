#include <stdio.h>
#define length 3
int main(){
    double array[length];
    double salary;
    for (int i = 0;i<length;i++){
        scanf("%lf",&array[i]);
    }
    salary = array[1]*array[2];
    printf("NUMBER = %.0f\nSALARY = U$ %.2f\n", array[0],salary);
}