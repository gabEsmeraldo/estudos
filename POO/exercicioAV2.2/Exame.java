public class Exame extends Acao{
    public Exame(LocalDateTime dataHora, String nome) {
        super(dataHora, nome);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Exame marcado para " + nome + " em " + dataHora);
    }
}