import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
public class ProgramaPlacas extends JFrame{
    private JButton botaoProcurar;
    private JTextField textPlaca;
    private JLabel labelPlaca;

    public ProgramaPlacas(){
        setTitle("Cenario 3: Consulta de placas");
        setSize(450,130);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new java.awt.GridLayout(0,1));
        
        labelPlaca = new JLabel("Insira a placa a ser lida:");
        textPlaca = new JTextField(12);
        botaoProcurar = new JButton("Procurar estado");

        JPanel panel01 = new JPanel();
        panel01.setLayout(new java.awt.FlowLayout());

        add(panel01);
        add(botaoProcurar);

        panel01.add(labelPlaca);
        panel01.add(textPlaca);

        botaoProcurar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String placa = textPlaca.getText().trim();
                testarPlaca(placa);
                textPlaca.setText("");
            }
        });
        setVisible(true);
    }

    public void testarPlaca(String placa) {
        String letras = placa.replaceAll("[^A-Za-z]", "").toUpperCase();
        String prefixo = letras.length() >= 3 ? letras.substring(0, 3) : "";

        String placaLimpa = placa.replaceAll("[^A-Za-z0-9]", "").toUpperCase();

        boolean formatoValido = placaLimpa.matches("^[A-Z]{3}[0-9][A-Z][0-9]{2}$");

        String estado = "Placa de outro estado ou inválida";
        if (formatoValido) {
            if (!prefixo.isEmpty() && prefixo.compareTo("BFA") >= 0 && prefixo.compareTo("GKI") <= 0) {
                estado = "Placa válida (São Paulo)";
            } else if (!prefixo.isEmpty() && prefixo.compareTo("MOX") >= 0 && prefixo.compareTo("MTZ") <= 0) {
                estado = "Placa válida (Espirito Santo)";
            } else if (!prefixo.isEmpty() && prefixo.compareTo("KMF") >= 0 && prefixo.compareTo("LVE") <= 0) {
                estado = "Placa válida (Rio de Janeiro)";
            }
        } else {
            estado = "Formato inválido (esperado: LLLNLNN)";
        }
        JOptionPane.showMessageDialog(this, estado, "Resultado do teste", JOptionPane.INFORMATION_MESSAGE);
        System.out.println(estado);
    }
}

//BFA a GKI SP
//MOX a MTZ ES
//KMF a LVE RIO