public class Consulta extends Acao{
    public Consulta(LocalDateTime dataHora, String nome) {
        super(dataHora, nome);
    }

    @Override
    public void exibirDetalhes() {
        System.out.println("Consulta marcada para " + nome + " em " + dataHora);
    }
}