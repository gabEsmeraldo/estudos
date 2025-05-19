public class Main{
    public static void main(String[] Args){
        Circulo forma1 = new Circulo("Circulo",2);
        System.out.println("Esta forma eh um " + forma1.getNome() + " e sua area eh " + forma1.calcularArea());
        
        Retangulo forma2 = new Retangulo("Retangulo",2,4);
        System.out.println("Esta forma eh um " + forma2.getNome() + " e sua area eh " + forma2.calcularArea());
    }
}   