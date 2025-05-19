public class ProdutoAlimenticio extends Produto{
    private String dataDeValidade;

    ProdutoAlimenticio(){
        super();
        dataDeValidade = "";
    }

    ProdutoAlimenticio(String nome, double precoBase, String dataDeValidade){
        super(nome, precoBase);
        this.dataDeValidade = dataDeValidade;
    }

    public void setValidade(String data){
        this.dataDeValidade = data;
    }

    public String getValidade(){
        return dataDeValidade;
    }

    public double calcularPrecoFinal(){
        return getPrecoBase()*0.9;
    }

    @Override
    public void exibirInformacoes(){
        System.out.println(getNome());
        System.out.println(getPrecoBase());
        System.out.println(getValidade());
    }
}