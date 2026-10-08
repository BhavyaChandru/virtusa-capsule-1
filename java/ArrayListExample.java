import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> names = new ArrayList<>();

        System.out.print("How many names do you want to add? ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {

            System.out.print("Enter name " + (i + 1) + ": ");
            String name = sc.nextLine();
            names.add(name);
            
        }

        System.out.println("\nArrayList:");
        System.out.println(names);

        System.out.print("\nEnter a name to add: ");
        String newName = sc.nextLine();

        names.add(newName);

        System.out.println("After adding:");
        System.out.println(names);

        System.out.print("\nEnter a name to remove: ");
        String removeName = sc.nextLine();

        if (names.remove(removeName)) {
            System.out.println(removeName + " removed successfully.");
        } else {
            System.out.println(removeName + " not found.");
        }

        System.out.println("ArrayList after removal:");
        System.out.println(names);

        System.out.print("\nEnter a name to search: ");
        String searchName = sc.nextLine();

        if (names.contains(searchName)) {
            System.out.println(searchName + " is found.");
        } else {
            System.out.println(searchName + " is not found.");
        }

    }
}