package edu.simpson.asmith;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.Style;

import com.google.gson.Gson;
import java.io.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern nameFieldsPattern;
    private Pattern emailFieldsPattern;
    private Pattern phoneFieldsPattern;
    private Pattern birthdayFieldsPattern;
    private Pattern phoneFieldsPattern2;

    public NameListEdit(){
        nameFieldsPattern = Pattern.compile("^((?![0-9\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\=\\-\\[\\]\\{\\}\\;\\:\\\"\\\\\\/\\<\\>\\?]).)+$");
        emailFieldsPattern = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
        // email from : https://stackoverflow.com/questions/8204680/java-regex-email
        //my JS regex didnt work here
        phoneFieldsPattern = Pattern.compile("[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]");
        phoneFieldsPattern2 = Pattern.compile("[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]");

        birthdayFieldsPattern = Pattern.compile("[1-9][0-9][0-9][0-9]\\-[0-1][0-9]\\-[0-3][0-9]");

    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int[] dataValidation =  new int[5];

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/JSON");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("JSON Post");

        // Open the request for reading. Read in each line, put it into a string.
        // Yes, I think there should be an easier way.
        java.io.BufferedReader in = request.getReader();
        String requestString = new String();
        for (String line; (line = in.readLine()) != null; requestString += line);

        // Output the string we got as a request, just as a check
        out.println(requestString);

        // Great! Now we want to use GSON to parse the object, and pop it into our business object. Field
        // names have to match. That's the magic.
        Gson gson = new Gson();
        Person fromJson = gson.fromJson(requestString, Person.class);

        Matcher m = nameFieldsPattern.matcher(fromJson.getFirstName());

        if (m.find()){
            System.out.println("First name - Good.");
            dataValidation[0] = 1;
        }else{
            System.out.println("First name - Bad");
            dataValidation[0] = 0;
        }
        m = nameFieldsPattern.matcher(fromJson.getLastName());

        if (m.find()){
            System.out.println("Last name - Good.");
            dataValidation[1] = 1;
        }else{
            System.out.println("Last name - Bad");
            dataValidation[1] = 0;
        }

        m = phoneFieldsPattern.matcher(fromJson.getPhone());
        if (m.find()){
            System.out.println("Phone Number - Good.");
            dataValidation[2] = 1;
        }else{
            m = phoneFieldsPattern2.matcher(fromJson.getPhone());
            if(m.find()){
                System.out.println("Phone Number - Good.");
                dataValidation[2] = 1;
            }else{
            System.out.println("Phone Number - Bad");
            dataValidation[2] = 0;
            }
        }

        m = emailFieldsPattern.matcher(fromJson.getEmail());
        if (m.find()){
            System.out.println("Email - Good.");
            dataValidation[3] = 1;
        }else{
            System.out.println("Email - Bad");
            dataValidation[3] = 0;
        }

        m = birthdayFieldsPattern.matcher(fromJson.getBirthday());
        if (m.find()){
            System.out.println("Birthday - Good.");
            dataValidation[4] = 1;
        }else{
            System.out.println("Birthday - Bad");
            dataValidation[4] = 0;
        }

        int total = 0;
        for (int i = 0; i < dataValidation.length; i++){total += dataValidation[i];}
        if (total == 5) {

            if(fromJson.getId() == 0) {
                PersonDAO.insertPerson(fromJson);
            }else{
                PersonDAO.updatePerson(fromJson);
            }


        }else{
            System.out.println("One or more of the fields was bad");
        }
        // Make sure our field was set.
        out.println("Object test: "+fromJson.getFirstName() + ", " + fromJson.getLastName()+", " + fromJson.getEmail()
                +", " + fromJson.getPhone()+", " + fromJson.getBirthday());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
