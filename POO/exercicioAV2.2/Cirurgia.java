public class Cirurgia extends Acao{
    public Cirurgia(LocalDateTime dataHora, String nome) {
        super(dataHora, nome);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Cirurgia marcada para " + nome + " em " + dataHora);
    }
}