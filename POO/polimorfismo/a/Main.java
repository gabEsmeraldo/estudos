public class Main{
    public static void main(String[] args){
        Calculadora calc = new Calculadora();
        System.out.println(calc.somar(1,3));
        System.out.println(calc.somar(3.5,3.5));
        System.out.println(calc.somar(3,3,4));
    }
}