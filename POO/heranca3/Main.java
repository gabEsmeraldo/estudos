public class Main{
    public static void main(String[] args){
        Paciente pac1 = new Paciente("Lucas", "Masculino", "10/06/2005");
        Gerente ger1 = new Gerente("Regis", "Masculino", "11/04/2015", "2512890", "CRA2233");
        Medico med1 = new Medico("Flavia", "Feminino", "12/06/2025", "2512990", "CRM2525");

        System.out.println("Paciente 1");
        mostrar(pac1);
        System.out.println();

        System.out.println("Gerente 1");
        mostrar(ger1);
        ger1.liberarPagamento();
        System.out.println();

        System.out.println("Médico 1");
        mostrar(med1);
        med1.operar();
    }
    public static void mostrar(Apresentavel objeto){
        objeto.apresentar();
    }
}