public class Caminhao extends Veiculo{
    private int eixos;

    Caminhao(){
        super();
        eixos = 0;
    }

    Caminhao(String placa, String modelo, int eixos){
        super(placa, modelo);
        this.eixos = eixos;
    }

    public void setEixos(int eixos){
        this.eixos = eixos;
    }

    public int getEixos(){
        return eixos;
    }

    public void exibirDados(){
        System.out.println("Caminhao:");
        System.out.println("Placa: " + getPlaca());
        System.out.println("Modelo: " + getModelo());
        System.out.println("Eixos: " + getEixos());
    }
}