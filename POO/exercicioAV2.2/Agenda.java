import java.util.LocalDateTime;
public class Agenda implements Agendavel{
    Private Acao[][] semana;

    public Agenda() {
        semana = new Acao[7][13]; // 7 dias, 13 horários (08h às 20h)
    }
    
    @Override
    public void marcarHorario(Acao acao) {
        int diaSemana = acao.getDataHora().getDayOfWeek().getValue() - 1; // Segunda = 0, Domingo = 6
        int hora = acao.getDataHora().getHour();

        if (hora < 8 || hora > 20) {
            System.out.println("Horário inválido! Permitido apenas das 08h às 20h.");
            return;
        }

        int indiceHora = hora - 8; // 08h = posição 0

        if (semana[diaSemana][indiceHora] == null) {
            semana[diaSemana][indiceHora] = acao;
            System.out.println("Horário agendado com sucesso!");
        } else {
            System.out.println("Horário já ocupado!");
        }
    }

    public void exibirAgenda() {
        for (int dia = 0; dia < 7; dia++) {
            System.out.println("Dia da semana: " + (dia + 1));
            for (int hora = 0; hora < 13; hora++) {
                if (semana[dia][hora] != null) {
                    System.out.println((hora + 8) + "h: " + semana[dia][hora].getNome() + " - " + semana[dia][hora].getClass().getSimpleName());
                } else {
                    System.out.println((hora + 8) + "h: [Disponível]");
                }
            }
            System.out.println();
        }
    }
}