import java.util.Scanner;

public class DayStatus {

    enum Day {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a day: ");
        String input = sc.nextLine().toUpperCase();

        try {
            Day day = Day.valueOf(input);

            if (day == Day.SATURDAY || day == Day.SUNDAY) {
                System.out.println(day + " is a Weekend.");
            } else {
                System.out.println(day + " is a Weekday.");
            }

        } catch (IllegalArgumentException e) {
            System.out.println("Invalid day.");
        }

    }
}