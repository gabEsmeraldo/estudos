import java.util.ArrayList;
import javax.swing.*;

public class TelaCadastro extends JFrame {

    public static void main(String[] args) {
        new TelaCadastro();
    }
    
    private JLabel nomeProdutoLabel;
    private JLabel precoProdutoLabel;
    private JLabel descricaoProdutoLabel;
    private JTextField nomeProdutoField;
    private JTextField precoProdutoField;
    private JTextArea descricaoProdutoArea;
    private JButton cadastrarButton;
    private JButton exportarButton;
    ArrayList<Produto> produtos = new ArrayList<>();

    public TelaCadastro() {
        setTitle("Tela de Cadastro");
        setSize(500, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        
        setLayout(new java.awt.FlowLayout());
        
        nomeProdutoLabel = new JLabel("Nome do Produto:");
        precoProdutoLabel = new JLabel("Preço do Produto:");
        descricaoProdutoLabel = new JLabel("Descrição do Produto:");
        nomeProdutoField = new JTextField(10);
        precoProdutoField = new JTextField(10);
        descricaoProdutoArea = new JTextArea(5, 30);
        cadastrarButton = new JButton("Cadastrar");
        exportarButton = new JButton("Exportar");

        JPanel painel1 = new JPanel();
        JPanel painel2 = new JPanel();
        JPanel painel3 = new JPanel();
        JPanel painel4 = new JPanel();

        painel1.add(nomeProdutoLabel);
        painel1.add(nomeProdutoField);
        painel2.add(precoProdutoLabel);
        painel2.add(precoProdutoField);
        painel3.add(descricaoProdutoLabel);
        painel3.add(new JScrollPane(descricaoProdutoArea));
        painel4.add(exportarButton);
        painel4.add(cadastrarButton);

        add(painel1);
        add(painel2);
        add(painel3);
        add(painel4);

        cadastrarButton.addActionListener(e -> {
            String nome = nomeProdutoField.getText();
            String preco = precoProdutoField.getText();
            String descricao = descricaoProdutoArea.getText();
            
            produtos.add(new Produto(nome, Double.parseDouble(preco), descricao));
            System.out.println("Produto Cadastrado: " + nome + ", Preço: " + preco + ", Descrição: " + descricao);
            nomeProdutoField.setText("");
            precoProdutoField.setText("");
            descricaoProdutoArea.setText("");
        });

    exportarButton.addActionListener(e -> {
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setDialogTitle("Escolha o local para salvar o arquivo");
        int userSelection = fileChooser.showSaveDialog(this);

        if (userSelection == JFileChooser.APPROVE_OPTION) {
            java.io.File fileToSave = fileChooser.getSelectedFile();
            try (java.io.PrintWriter writer = new java.io.PrintWriter(fileToSave)) {
                for (Produto p : produtos) {
                    writer.println("Nome: " + p.getNome());
                    writer.println("Preço: " + p.getPreco());
                    writer.println("Descrição: " + p.getDescricao());
                    writer.println("----------------------");
                }
                JOptionPane.showMessageDialog(this, "Produtos exportados para " + fileToSave.getAbsolutePath() + "!");
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Erro ao exportar: " + ex.getMessage());
            }
        }
    });

        setVisible(true);
    }
}
