import java.time.LocalDateTime;

public class Consultorio {
    public static void main(String[] args) {
        Agenda agenda = new Agenda();

        // Criando ações
        Acao consulta1 = new Consulta(LocalDateTime.of(2025, 4, 28, 10, 0), "João");
        Acao exame1 = new Exame(LocalDateTime.of(2025, 4, 28, 11, 0), "Maria");
        Acao cirurgia1 = new Cirurgia(LocalDateTime.of(2025, 4, 29, 9, 0), "Carlos");

        // Marcando horários
        agenda.marcarHorario(consulta1);
        agenda.marcarHorario(exame1);
        agenda.marcarHorario(cirurgia1);

        // Tentando agendar em horário já ocupado
        Acao consulta2 = new Consulta(LocalDateTime.of(2025, 4, 28, 10, 0), "Ana");
        agenda.marcarHorario(consulta2);

        // Exibindo a agenda
        System.out.println("\nAgenda completa:");
        agenda.exibirAgenda();
    }
}