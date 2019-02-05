package edu.simpson.asmith;

public class Person {

    private int id;
    private String first;
    private String last;
    private String phone;
    private String email;
    private String birthday;



    public String getBirthday() { return birthday;    }

    public String getEmail() { return email;}

    public int getId()
    {
        return id;
    }

    public String getPhone()
    {
        return phone;
    }

    public String getFirst()
    {
        return first;
    }

    public String getLast()
    {
        return last;
    }

    public void setId(int id) { this.id = id; }

    public void setFirst(String first)
    {
        this.first = first;
    }

    public void setLast(String last)
    {
        this.last = last;
    }

    public void setPhone(String number){
        this.phone = number;
    }
    public void setBirthday(String birthday){
        this.birthday = birthday;
    }
    public void setEmail(String email){
        this.email = email;
    }



}
