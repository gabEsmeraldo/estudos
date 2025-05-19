public class Main{
    public static void main(String[] args){
        DocumentoWord docWord = new DocumentoWord("Sou um documento Word");
        DocumentoOffice docOffice = new DocumentoOffice("Sou um documento Office");

        Tela tela = new Tela();

        tela.visualizar(docWord);
        tela.visualizar(docOffice);
    }
}