package edu.simpson.asmith;

public class Person {

    private int id;
    private String first;
    private String last;
    private int phone;
    private String email;
    private String birthday;

    

    public String getBirthday() { return birthday;    }

    public String getEmail() { return email;}

    public int getId()
    {
        return id;
    }

    public int getPhone()
    {
        return phone;
    }

    public void setId(int id) { this.id = id; }

    public String getFirst()
    {
        return first;
    }

    public String getLast()
    {
        return last;
    }

    public void setFirst(String first)
    {
        this.first = first;
    }

    public void setLast(String last)
    {
        this.last = last;
    }

}
