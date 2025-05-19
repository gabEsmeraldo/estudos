public class ProdutoEletronico extends Produto{
    private int garantiaMeses;

    ProdutoEletronico(){
        super();
        garantiaMeses = 0;
    }

    ProdutoEletronico(String nome, double precoBase, int garantiaMeses){
        super(nome, precoBase);
        this.garantiaMeses = garantiaMeses;
    }

    public void setGarantia(int garantia){
        this.garantiaMeses = garantia;
    }

    public int getGarantia(){
        return garantiaMeses;
    }

    public double calcularPrecoFinal(){
        return getPrecoBase()*1.1;
    }

    @Override
    public void exibirInformacoes(){
        System.out.println(getNome());
        System.out.println(getPrecoBase());
        System.out.println(getGarantia() + " Meses de garantia.");
    }
}