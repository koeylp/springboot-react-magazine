package com.bibon.supercarmagazine.exception;

public class MagazineNotFoundException extends RuntimeException {
    public MagazineNotFoundException(Long id) {
        super("Could not found magazine with id: " + id);
    }
}
