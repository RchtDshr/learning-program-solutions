package org.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionTest {

    @Test
    public void testLibraryBookAssertions() {
        LibraryBook book = new LibraryBook("Clean Code");

        // Assert that the book is available and has no borrower initially
        assertTrue(book.isAvailable());
        assertNull(book.getBorrower());

        // Assert that checking out the book works
        assertTrue(book.checkOut("Alice"));
        assertFalse(book.isAvailable());
        assertEquals("Alice", book.getBorrower());

        // Assert that checking out again fails
        assertFalse(book.checkOut("Bob"));

        // Assert that returning the book works
        assertTrue(book.returnBook());
        assertTrue(book.isAvailable());
        assertNull(book.getBorrower());

        // Assert that returning again fails
        assertFalse(book.returnBook());
    }
}
