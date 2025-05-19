abstract class Veiculo implements Alugavel{
    private String placa;
    private String modelo;
    public boolean alugado;

    Veiculo(){
        placa = "";
        modelo = "";
        alugado = false;
    }

    Veiculo(String placa, String modelo){
        this.placa = placa;
        this.modelo = modelo;
        alugado = false;
    }

    public String getPlaca(){
        return placa;
    }

    public String getModelo(){
        return modelo;
    }

    public void setPlaca(String placa){
        this.placa = placa;
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }

    abstract void exibirDados();
    
    public void alugar(){
        if(!alugado){
            System.out.println("O Veiculo do modelo: " + getModelo() + " foi alugado.");
            alugado = true;
        }else{
            System.out.println("Este veiculo ja foi alugado.");
        }
    }

    public void devolver(){
        if(alugado){
            System.out.println("O Veiculo do modelo: " + getModelo() + " foi devolvido.");
            alugado = false;
        }else{
            System.out.println("Esse veiculo não esta alugado.");
        }
    }
}