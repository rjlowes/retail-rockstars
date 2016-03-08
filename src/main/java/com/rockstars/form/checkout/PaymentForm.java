package com.rockstars.form.checkout;

public class PaymentForm {
    private String customerName;
    
    private String cardNumber;
    
    private String csv;
    
    private String expiryMonth;
    
    private String expiryYear;
    
    private boolean terms;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCsv() {
        return csv;
    }

    public void setCsv(String csv) {
        this.csv = csv;
    }

    public String getExpiryMonth() {
        return expiryMonth;
    }

    public void setExpiryMonth(String expiryMonth) {
        this.expiryMonth = expiryMonth;
    }

    public String getExpiryYear() {
        return expiryYear;
    }

    public void setExpiryYear(String expiryYear) {
        this.expiryYear = expiryYear;
    }

    public boolean isTerms() {
        return terms;
    }

    public void setTerms(boolean terms) {
        this.terms = terms;
    }

    @Override
    public String toString() {
        return "PaymentForm [customerName=" + customerName + ", cardNumber="
                + cardNumber + ", csv=" + csv + ", expiryMonth=" + expiryMonth
                + ", expiryYear=" + expiryYear + ", terms=" + terms + "]";
    }
    
    
}
