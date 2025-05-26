import javax.swing.*; // Importamos a biblioteca Swing
import java.awt.event.ActionEvent; // Para eventos de ação
import java.awt.event.ActionListener; // Para o listener de ação
import java.util.ArrayList;
public class JanelaPrincipal extends JFrame{
    private JLabel labelNome;
    private JTextField campoNome;

    private JLabel labelIdade;
    private JTextField campoIdade;

    private JButton botaoCadastrar;
    private JButton botaoListar;

    ArrayList<Pessoa> pessoas = new ArrayList<>();

    public JanelaPrincipal(){
        setTitle("Cadastro de Pessoas");
        setSize(300,130);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new java.awt.FlowLayout());

        labelNome = new JLabel("Insira o nome:");
        campoNome = new JTextField(15);
        labelIdade = new JLabel("Insira a idade:");
        campoIdade = new JTextField(15);
        botaoCadastrar = new JButton("Cadastrar");
        botaoListar = new JButton("Listar");

        add(labelNome);
        add(campoNome);
        add(labelIdade);
        add(campoIdade);
        add(botaoCadastrar);
        add(botaoListar);


        botaoCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String nome = campoNome.getText();
                String idadeTXT = campoIdade.getText();
                Integer idade = Integer.valueOf(idadeTXT);
                Pessoa pessoaA = new Pessoa(nome,idade);
                pessoas.add(pessoaA);
                campoNome.setText("");
                campoIdade.setText("");
            }
        });

        botaoListar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                for (Pessoa pessoa : pessoas){
                    System.out.println(pessoa.getNome() + " tem " + pessoa.getIdade() + " anos.");
                }
            }
        });
        setVisible(true);
    }
}