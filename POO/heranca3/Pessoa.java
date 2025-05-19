public class Pessoa implements Apresentavel{
    protected String nome;
    protected String sexo;

    Pessoa(){
        this.nome = "";
        this.sexo = "";
    }

    Pessoa(String nome, String sexo){
        this.nome = nome;
        this.sexo = sexo;
    }


    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    public void setSexo(String sexo){
        this.sexo = sexo;
    }

    public String getSexo(){
        return sexo;
    }

    public void apresentar(){
        System.out.println("Nome: " + getNome());
        System.out.println("Sexo: " + getSexo());
    }
}