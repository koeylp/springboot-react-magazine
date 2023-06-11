package com.bibon.supercarmagazine.service.interfaces;

import com.bibon.supercarmagazine.model.Magazine;

import java.util.List;

public interface MagazineService {
    List<Magazine> getAllMagazines();
    Magazine save(Magazine newMagazine);
    Magazine getMagazineById(Long id);
    Magazine updateMagazine(Long id, Magazine newMagazine);
    void deleteMagazine(Long id);
}
