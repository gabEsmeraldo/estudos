public class Medico extends Funcionario{
    private String CRM;

    Medico(String nome, String sexo, String data, String matricula, String CRM){
        super(nome,sexo,data,matricula);
        this.CRM = CRM;
    }

    Medico(){
        super();
        this.CRM = "";
    }

    public void setCRM(String CRM){
        this.CRM = CRM;
    }

    public String getCRM(){
        return CRM;
    }

    public void operar(){
        System.out.println("Operado");
    }

    @Override
    public void apresentar(){
        super.apresentar();
        System.out.println("CRM: " + getCRM());
    }
}