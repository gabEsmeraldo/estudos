[cod1,qnt1,price1] = input().split(' ')
[cod2,qnt2,price2] = input().split(' ')
total = (int(qnt1)*float(price1)) + (int(qnt2)*float(price2))
print(f'VALOR A PAGAR: R$ {total:.2f}')