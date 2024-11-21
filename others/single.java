package others;
class Singleton {
    private static volatile Singleton instance;
    public Singleton(){
        second sec = new second();
        sec.display();
    }
    public static void method1(){
        System.out.println("Method 1");
    }
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (second.class) {
                if (instance == null) {
                    instance = new Singleton();
                    System.out.println("inside 2nd if");
                }
                else if(instance != null){
                    System.out.println("value has assigned to instance");
                }
            }
        }
        return instance;
    }
}
public class single extends Singleton{
    
    public static void method1(){
        System.out.println("method 2");
    }

    public static void main(String[] args) {
        // Singleton s = null;
        // if(s == null){
        // s = Singleton.getInstance();
        // }
        // if(s != null){
        //     System.out.println("complete");
        //} 
        single s = new single();
        s.method1();

    }
}