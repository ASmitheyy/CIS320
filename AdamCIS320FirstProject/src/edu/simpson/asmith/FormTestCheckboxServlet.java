package edu.simpson.asmith;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class FormTestCheckboxServlet extends HttpServlet {
    /*
     Handle Post requests
     */

    private void processPost(HttpServletRequest request, HttpServletResponse response, PrintWriter out) throws ServletException, IOException {
        // Grab the data we got via a parameter
        String [] vehicles = request.getParameterValues("vehicle");

        // If nothing is checked, we get a null. We do not get a list with
        // no items.
        if(vehicles == null) {
            out.println("There were no vehicles checked.");
        } else {
            // List each vehicle checked.
            out.println("List of vehicles");

            for (int i = 0; i < vehicles.length; i++) {
                // Just print the data out to confirm we got it.
                out.println("vehicle='" + vehicles[i] + "'");
            }
            out.println("Done with the list");
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        this.processPost(request, response, out);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a get, not a post
        out.println("Get");

        this.processPost(request, response, out);
    }
}