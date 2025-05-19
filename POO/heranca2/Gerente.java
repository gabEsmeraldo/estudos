public class Gerente extends Funcionario{
    Gerente(String nome){
        super(nome);
    }

    @Override
    double calcularSalario(){
        return salarioMinimo*1.2;
    }
}