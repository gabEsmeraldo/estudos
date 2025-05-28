import javax.swing.*; // Importamos a biblioteca Swing
import java.awt.event.ActionEvent; // Para eventos de ação
import java.awt.event.ActionListener; // Para o listener de ação
import java.util.List;
import java.nio.file.*;
import java.awt.event.*;
import java.io.*;
public class JanelaPrincipal extends JFrame{
    private JLabel pathLabel;
    private JTextField pathField;
    private JButton procurarBotao;
    protected List<String> linhas;

    public JanelaPrincipal(){
        setTitle("Checagem de counteudo de arquivo");
        setSize(450,130);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new java.awt.FlowLayout());

        pathLabel = new JLabel("Insira o path do arquivo a ser lido:");
        pathField = new JTextField(26);
        procurarBotao = new JButton("Ler arquivo");

        add(pathLabel);
        add(pathField);
        add(procurarBotao);

        procurarBotao.addActionListener(new ActionListener(){
            @Override
            public void actionPerformed(ActionEvent e) {
                String path = pathField.getText();
                Path caminho = Paths.get(path); 

                try {
                    linhas = Files.readAllLines(caminho);
                }
                catch(IOException f) {
                    f.printStackTrace();
                }

                for (String linha : linhas) {
                    System.out.println(linha);
                }
            }
        });
        setVisible(true);
    }


    
}