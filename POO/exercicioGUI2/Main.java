import javax.swing.*; // Importamos a biblioteca Swing

public class Main {

    public static void main(String[] args) {
        // Criar a janela na thread de despacho de eventos (melhor prática para Swing)
        SwingUtilities.invokeLater(
            new Runnable() {
                public void run() {
                    new JanelaPrincipal();
                }
            }
        );
    }
}
