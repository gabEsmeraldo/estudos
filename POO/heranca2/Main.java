public class Main{
    public static void main(String[] Args){
        Desenvolvedor dev1 = new Desenvolvedor("Esmeraldo");
        Gerente ger1 = new Gerente("Regis");
        System.out.println("O Desenvolvedor " + dev1.getNome() + " recebe o salario de " + dev1.calcularSalario());
        System.out.println("O Gerente " + ger1.getNome() + " recebe o salario de " + ger1.calcularSalario());
    }
}