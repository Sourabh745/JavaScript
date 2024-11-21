package others;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;


class SuperClass {
    private void privateMethod() {
        System.out.println("Private method in SuperClass");
    }

    protected void templateMethod() {
        System.out.println("Template method in SuperClass");
        privateMethod(); // Call private method internally
    }
}

class SubClass extends SuperClass {
    // This does not override the private method in SuperClass
    public void privateMethod() {
        System.out.println("Method in SubClass (not overriding)");
    }

    @Override
    protected void templateMethod() {
        System.out.println("Template method overridden in SubClass");
        // You can't call the superclass privateMethod directly
    }
}

public class second {
    public static void main(String[] args) {
        SuperClass obj = new SubClass();
        obj.templateMethod(); // Calls the overridden method
    }
}



// public class second{
//     public void display(){
//         System.out.println("second class from different java file");
//     }
//     public static void main(String[] args) {
//         System.out.println("hello");
//         try {
//             BufferedWriter bw = new BufferedWriter(new FileWriter("null1.txt"));
//             bw.append("9814005018 is my another phone number you fucker");
//             bw.close();
//         } catch (IOException e) {
//             // TODO Auto-generated catch block
//             e.printStackTrace();
//         }

//         BufferedReader
//     }
// }