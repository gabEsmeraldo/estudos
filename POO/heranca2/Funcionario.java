abstract class Funcionario{
    private String nome;
    protected double salarioMinimo = 1518;

    Funcionario(){
        this.nome = "";
    }

    Funcionario(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    abstract double calcularSalario();
}