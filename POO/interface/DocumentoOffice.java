public class DocumentoOffice implements Visualizavel{
    private String texto;

    public DocumentoOffice(){
        this.texto = "";
    }

    public DocumentoOffice(String texto){
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