package edu.simpson.asmith;

public class Person {

    private int id;
    private String firstName;
    private String lastName;
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

    public String getFirstName()
    {
        return firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setId(int id) { this.id = id; }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
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
