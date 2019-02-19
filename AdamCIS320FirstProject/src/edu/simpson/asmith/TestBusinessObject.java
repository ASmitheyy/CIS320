package edu.simpson.asmith;

/**
 * This is out business object. The field names should match the JSON that goes over the wire.
 */
public class TestBusinessObject {
    private String fieldname;
    public String getFieldName() { return fieldname; }
    public void setFieldName(String fieldname) { this.fieldname = fieldname; }
}