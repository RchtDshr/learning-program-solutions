package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Account getAccountByNumber(@PathVariable String number) {
        // Dummy response
        return new Account(number, "savings", 234343.00);
    }
}
