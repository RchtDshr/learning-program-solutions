package org.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    // 1. Create a mock object for the external API
    @Mock
    private ExternalApi externalApi;

    // 2. Inject the mock into the service
    @InjectMocks
    private MyService myService;

    @Test
    void testFetchData() {
        // 3. Stub the method to return a predefined value
        when(externalApi.getData()).thenReturn("Mock Data");

        // 4. Write a test case that uses the mock object
        String result = myService.fetchData();

        assertEquals("Mock Data", result);
    }
}
