import java.awt.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import javax.swing.*;

public class TelaLeitura extends JFrame {
    public static void main(String[] args) {
        new TelaLeitura();
    }
    private JLabel pathLabel;
    private JTextField pathField;
    private JButton procurarBotao;

    public TelaLeitura() {
        setTitle("Leitura de Arquivo");
        setSize(450, 130);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new FlowLayout());

        pathLabel = new JLabel("Insira o path do arquivo a ser lido:");
        pathField = new JTextField(26);
        procurarBotao = new JButton("Ler arquivo");

        add(pathLabel);
        add(pathField);
        add(procurarBotao);

        procurarBotao.addActionListener(e -> {
            String path = pathField.getText();
            ArrayList<Produto> produtos = new ArrayList<>();
            try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
                String line;
                String nome = "", descricao = "";
                double preco = 0;
                int step = 0;
                while ((line = reader.readLine()) != null) {
                    if (line.startsWith("Nome: ")) {
                        nome = line.substring(6);
                        step = 1;
                    } else if (line.startsWith("Preço: ")) {
                        preco = Double.parseDouble(line.substring(7));
                        step = 2;
                    } else if (line.startsWith("Descrição: ")) {
                        descricao = line.substring(11);
                        step = 3;
                    } else if (line.startsWith("-") && step == 3) {
                        produtos.add(new Produto(nome, preco, descricao));
                        nome = ""; descricao = ""; preco = 0; step = 0;
                    }
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao ler arquivo: " + ex.getMessage());
                return;
            }

            JFrame listaFrame = new JFrame("Produtos Lidos");
            listaFrame.setSize(400, 400);
            listaFrame.setLocationRelativeTo(null);

            JPanel produtosPanel = new JPanel();
            produtosPanel.setLayout(new BoxLayout(produtosPanel, BoxLayout.Y_AXIS));

            for (Produto p : produtos) {
                JPanel panel = new JPanel(new FlowLayout(FlowLayout.LEFT));
                JLabel label = new JLabel("Nome: " + p.getNome() + " | Preço: " + p.getPreco());
                JButton detalhesBtn = new JButton("Detalhes");
                detalhesBtn.addActionListener(ev -> {
                    JFrame detalhesFrame = new JFrame("Detalhes do Produto");
                    detalhesFrame.setSize(400, 200);
                    detalhesFrame.setLayout(new GridLayout(3, 1));
                    detalhesFrame.add(new JLabel("Nome: " + p.getNome()));
                    detalhesFrame.add(new JLabel("Preço: " + p.getPreco()));
                    detalhesFrame.add(new JLabel("Descrição: " + p.getDescricao()));
                    detalhesFrame.setLocationRelativeTo(listaFrame);
                    detalhesFrame.setVisible(true);
                });
                panel.add(label);
                panel.add(detalhesBtn);
                produtosPanel.add(panel);
            }

            JScrollPane scrollPane = new JScrollPane(produtosPanel);
            listaFrame.add(scrollPane);
            listaFrame.setVisible(true);
        });

        setVisible(true);
    }
}
