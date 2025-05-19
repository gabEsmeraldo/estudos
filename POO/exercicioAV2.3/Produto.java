abstract class Produto implements Vendavel{
    private String nome;
    private double precoBase;

    Produto(){
        nome = "";
        precoBase = 0;
    }

    Produto(String nome, double precoBase){
        this.nome = nome;
        this.precoBase = precoBase;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    public void setPrecoBase(double precoBase){
        this.precoBase = precoBase;
    }

    public double getPrecoBase(){
        return precoBase;
    }

    abstract void exibirInformacoes();
}