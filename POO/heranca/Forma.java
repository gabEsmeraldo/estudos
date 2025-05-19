abstract class Forma {
    private String nome;

    Forma(){
        this.nome = "";
    }

    Forma(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    abstract double calcularArea();
}