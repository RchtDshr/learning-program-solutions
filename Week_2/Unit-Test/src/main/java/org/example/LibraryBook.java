package org.example;

public class LibraryBook {
    private String title;
    private boolean checkedOut;
    private String borrower;

    public LibraryBook(String title) {
        this.title = title;
        this.checkedOut = false;
        this.borrower = null;
    }

    public boolean isAvailable() {
        return !checkedOut;
    }

    public String getTitle() {
        return title;
    }

    public String getBorrower() {
        return borrower;
    }

    public boolean checkOut(String borrowerName) {
        if (checkedOut || borrowerName == null || borrowerName.isEmpty()) {
            return false;
        }
        checkedOut = true;
        borrower = borrowerName;
        return true;
    }

    public boolean returnBook() {
        if (!checkedOut) {
            return false;
        }
        checkedOut = false;
        borrower = null;
        return true;
    }
}
