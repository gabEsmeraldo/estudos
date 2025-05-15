#include <stdio.h>

int main() {
    int n[50];
    for (int i = 0; i<=2; i++){
        scanf("%d", &n[i]);
    }
    printf("%d %d %d", n[0], n[1], n[2]);
}