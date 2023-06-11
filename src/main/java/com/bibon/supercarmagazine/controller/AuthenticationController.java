package com.bibon.supercarmagazine.controller;

import com.bibon.supercarmagazine.security.AuthenticationRequest;
import com.bibon.supercarmagazine.security.AuthenticationResponse;
import com.bibon.supercarmagazine.security.RegisterRequest;
import com.bibon.supercarmagazine.service.interfaces.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
@RequestMapping("/bibon")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }
}
