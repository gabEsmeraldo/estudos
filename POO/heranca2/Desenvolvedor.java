public class Desenvolvedor extends Funcionario{
    Desenvolvedor(String nome){
        super(nome);
    }

    @Override
    double calcularSalario(){
        return salarioMinimo;
    }
}