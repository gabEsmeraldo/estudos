import java.util.ArrayList;
import java.util.Iterator;
public class Main{
    public static void main(String Args[]){
        ArrayList<Produto> produtos = new ArrayList<>();
        Produto Caneca = new Produto("Caneca", 10);
        Produto Cadeira = new Produto("Cadeira", 200);
        Produto Garrafa = new Produto("Garrafa", 50);
        Produto Celular = new Produto("Celular", 1000);
        Produto Teclado = new Produto("Teclado", 80);
        Produto Mouse = new Produto("Mouse", 60);
        Produto Monitor = new Produto("Monitor", 600);
        Produto Bola = new Produto("Bola", 70);

        produtos.add(Caneca);
        produtos.add(Cadeira);
        produtos.add(Garrafa);
        produtos.add(Celular);
        produtos.add(Teclado);
        produtos.add(Mouse);
        produtos.add(Monitor);
        produtos.add(Bola);

        for (Produto produto : produtos){
            System.out.println(produto.getNome() + " custa: " + produto.getPreco());
        }

        Iterator<Produto> it = produtos.iterator();

        System.out.println();
        System.out.println("Removendo produtos com preço superior a 100.");
        System.out.println();

        while (it.hasNext()){
            Produto prod = it.next();
            if(prod.getPreco() >= 100){
                it.remove();
            }else{
                System.out.println(prod.getNome() + " custa: " + prod.getPreco());
            }
        }
    }
}