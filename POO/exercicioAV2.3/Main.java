public class Main{
    public static void main(String Args[]){
        Produto[] produtos = new Produto[10];
        int qntdProdutos = 0;
        double precoTotal = 0;
        //Produto prod01 = new ProdutoAlimenticio("Arroz", 8.00, "28/04/2026");
        produtos[qntdProdutos++] = new ProdutoAlimenticio("Arroz", 8.00, "28/04/2026");
        produtos[qntdProdutos++] = new ProdutoEletronico("Mouse", 100, 24);
        for(int i = 0; i < qntdProdutos; i++){
            produtos[i].exibirInformacoes();
            double precoProduto = produtos[i].calcularPrecoFinal();
            precoTotal += precoProduto;
            System.out.println();
        }
        System.out.printf("Preco total: R$%.2f", precoTotal);
    }
}