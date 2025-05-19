import java.util.*;
public class teste{
    public static void main(String args[]){
        Calendar teste = Calendar.getInstance();
        teste.set(2006, 02, 18, 8, 15, 00);
        String data = teste.getTime().toString();
        System.out.println(data);
        String[] dateParts = data.split(" ");
        System.out.println(dateParts[0]);
        System.out.println(dateParts[3]);
    }
}