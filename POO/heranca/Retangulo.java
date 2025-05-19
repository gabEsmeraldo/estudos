public class Retangulo extends Forma {
    private String nome;
    private double largura;
    private double altura;

    Retangulo(String nome, double largura, double altura){
        super(nome);
        this.largura = largura;
        this.altura = altura;
    }

    /* public void setNome(String nome){
        super(nome);
    } */

    @Override
    double calcularArea(){
        return altura*largura;
    }
}