public class Moto extends Veiculo{
    private int cilindradas;

    Moto(){
        super();
        cilindradas = 0;
    }

    Moto(String placa, String modelo, int cilindradas){
        super(placa, modelo);
        this.cilindradas = cilindradas;
    }

    public void setCilindradas(int cilindradas){
        this.cilindradas = cilindradas;
    }

    public int getCilindradas(){
        return cilindradas;
    }

    public void exibirDados(){
        System.out.println("Moto:");
        System.out.println("Placa: " + getPlaca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Cilindradas: " + getCilindradas());
    }
}