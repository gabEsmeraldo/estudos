public class Main {
    public static void main(String[] args) {
        Veiculo carro = new Carro("ABC-1234", "Fiat Uno", 4);
        Veiculo moto = new Moto("XYZ-5678", "Yamaha YZF", 600);
        Veiculo caminhao = new Caminhao("SBJ-5H11", "Volvo FH8", 12);

        Veiculo[] veiculos = {carro, moto, caminhao};

        for (Veiculo v : veiculos) {
            v.exibirDados();
            v.alugar();
            v.alugar(); // Testar o aluguel já feito
            v.devolver();
            System.out.println();
        }
    }
}