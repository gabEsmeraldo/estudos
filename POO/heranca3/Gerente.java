public class Gerente extends Funcionario{
    private String CRA;

    Gerente(String nome, String sexo, String data, String matricula, String CRA){
        super(nome,sexo,data,matricula);
        this.CRA = CRA;
    }

    Gerente(){
        super();
        this.CRA = "";
    }

    public void setCRA(String CRA){
        this.CRA = CRA;
    }

    public String getCRA(){
        return CRA;
    }

    public void liberarPagamento(){
        System.out.println("Pagamento liberado");
    }

    @Override
    public void apresentar(){
        super.apresentar();
        System.out.println("CRA: " + getCRA());
    }
}