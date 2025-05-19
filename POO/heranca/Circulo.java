public class Circulo extends Forma {
    private String nome;
    private double raio;

    Circulo(String nome, double r){
        super(nome);
        this.raio = r;
    }

    /* public void setNome(String nome){
        super(nome);
    } */

    @Override 
    double calcularArea(){
        return Math.PI * raio * raio;
    }
}