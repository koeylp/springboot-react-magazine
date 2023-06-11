package com.bibon.supercarmagazine.service;

import com.bibon.supercarmagazine.security.AuthenticationRequest;
import com.bibon.supercarmagazine.security.AuthenticationResponse;
import com.bibon.supercarmagazine.security.RegisterRequest;
import com.bibon.supercarmagazine.jwt.JWTService;
import com.bibon.supercarmagazine.model.Role;
import com.bibon.supercarmagazine.model.User;
import com.bibon.supercarmagazine.repository.UserRepository;
import com.bibon.supercarmagazine.service.interfaces.AuthenticationService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Data
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstName())
                .lastname(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ADMIN)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Email not found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
