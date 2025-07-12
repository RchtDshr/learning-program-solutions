package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class LibraryBookTest {
    private LibraryBook book;

    @Before
    public void setUp() {
        // Arrange: Create a new LibraryBook before each test
        book = new LibraryBook("The Pragmatic Programmer");
    }

    @After
    public void tearDown() {
        // Teardown: Nullify the book reference after each test
        book = null;
    }

    @Test
    public void testCheckOutSuccess() {
        // Arrange done in setUp()

        // Act
        boolean result = book.checkOut("Alice");

        // Assert
        assertTrue(result);
        assertFalse(book.isAvailable());
        assertEquals("Alice", book.getBorrower());
    }

    @Test
    public void testCheckOutFailsIfAlreadyCheckedOut() {
        // Arrange
        book.checkOut("Alice");

        // Act
        boolean result = book.checkOut("Bob");

        // Assert
        assertFalse(result);
        assertEquals("Alice", book.getBorrower());
    }

    @Test
    public void testReturnBookSuccess() {
        // Arrange
        book.checkOut("Alice");

        // Act
        boolean result = book.returnBook();

        // Assert
        assertTrue(result);
        assertTrue(book.isAvailable());
        assertNull(book.getBorrower());
    }

    @Test
    public void testReturnBookFailsIfNotCheckedOut() {
        // Act
        boolean result = book.returnBook();

        // Assert
        assertFalse(result);
        assertTrue(book.isAvailable());
    }
}
