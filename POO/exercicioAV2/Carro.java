public class Carro extends Veiculo{
    private int cilindros;
    

    Carro(){
        super();
        cilindros = 0;
    }

    Carro(String placa, String modelo, int cilindros){
        super(placa, modelo);
        this.cilindros = cilindros;
    }

    public void setCilindros(int cilindros){
        this.cilindros = cilindros;
    }

    public int getCilindros(){
        return cilindros;
    }

    public void exibirDados(){
        System.out.println("Carro:");
        System.out.println("Placa: " + getPlaca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Cilindros: " + getCilindros());
    }

}