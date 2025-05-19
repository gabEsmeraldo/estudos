public class Paciente extends Pessoa{
    private String dataInternacao;

    Paciente(String nome, String sexo, String dataInternacao){
        super(nome, sexo);
        this.dataInternacao = dataInternacao;
    }

    public String getData(){
        return dataInternacao;
    }

    public void setData(){
        this.dataInternacao = dataInternacao;
    }
    
    @Override
    public void apresentar(){
        super.apresentar();
        System.out.println("Data de internação: " + dataInternacao);
    }
}