import java.time.LocalDateTime;
abstract class Acao{
    private LocalDateTime dataHora;
    private String nome;
    
    Acao(){
        dataHora = ;
        nome = "";
    }

    Acao(String nome, LocalDateTime dataHora){
        this.nome = nome;
        this.dataHora = dataHora;
    }

    public LocalDateTime getHora(){
        return dataHora;
    }

    public String getNome(){
        return nome;
    }
}