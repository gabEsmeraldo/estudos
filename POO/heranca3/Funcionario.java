public class Funcionario extends Pessoa{
    private String dataAdmissao;
    private String matricula;

    Funcionario(String nome, String sexo, String dataAdmissao, String matricula){
        super(nome, sexo);
        this.dataAdmissao = dataAdmissao;
        this.matricula = matricula;
    }

    Funcionario(){
        super();
        this.dataAdmissao = "";
        this.matricula = "";
    }

    public String getData(){
        return dataAdmissao;
    }

    public void setData(String dataAdmissao){
        this.dataAdmissao = dataAdmissao;
    }

    public String getMatricula(){
        return matricula;
    }

    public void setMatricula(String matricula){
        this.matricula = matricula;
    }

    @Override
    public void apresentar(){
        super.apresentar();
        System.out.println("Data de Admissão: " + getData());
        System.out.println("Matricula: " + getMatricula());
    } 
}