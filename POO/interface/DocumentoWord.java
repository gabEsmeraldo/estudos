public class DocumentoWord implements Visualizavel{
    private String texto;

    public DocumentoWord(){
        this.texto = "";
    }

    public DocumentoWord(String texto){
        this.texto = texto;
    }

    public void setTexto(String texto){
        this.texto = texto;
    }

    public String getTexto(){
        return texto;
    }
    
    public void visualizar(){
        System.out.println(texto);
    }
}