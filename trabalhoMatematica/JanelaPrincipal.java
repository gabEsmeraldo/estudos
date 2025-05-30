import javax.swing.*;
import java.util.ArrayList;
public class JanelaPrincipal extends JFrame{
    private JButton botaoProcurar;
    private JTextField textPlaca;
    private JLabel labelPlaca;
    private JFrame frame01;

    public JanelaPrincipal(){
        setTitle("Cenario 3: Consulta de placas");
        setSize(450,130);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new java.awt.FlowLayout());


        labelPlaca = new JLabel("Insira a placa a ser lida:");
        textPlaca = new JTextField(12);
        botaoProcurar = new JButton("Procurar estado");

        frame01.add(labelPlaca);
        frame01.add(textPlaca);

        add(frame01);
        add(botaoProcurar);

        //botaoProcurar.addActionListener(new ActionListener(){
            //testarPlaca(textPlaca.getText());
        //});
        setVisible(true);
    }
}