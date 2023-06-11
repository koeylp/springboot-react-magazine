package com.bibon.supercarmagazine.service.interfaces;

import com.bibon.supercarmagazine.security.AuthenticationRequest;
import com.bibon.supercarmagazine.security.AuthenticationResponse;
import com.bibon.supercarmagazine.security.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);
    AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest);
}
