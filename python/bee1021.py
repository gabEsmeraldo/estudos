valorTotal = float(input(""))
cedulas = [100,50,20,10,5,2]
moedas = [1.00,0.50,0.25,0.10,0.05,0.01]
print("NOTAS:")
for i in range(0,len(cedulas)):
    print(f"{int(valorTotal/cedulas[i])} nota(s) de R$ {cedulas[i]}.00")
    valorTotal -= (cedulas[i]*int(valorTotal/cedulas[i]))
print("MOEDAS:")
for i in range(0,len(moedas)):
    print(f"{int(valorTotal/moedas[i]+0.0001)} moeda(s) de R$ {moedas[i]}")
    valorTotal -= (moedas[i]*int(valorTotal/moedas[i]))