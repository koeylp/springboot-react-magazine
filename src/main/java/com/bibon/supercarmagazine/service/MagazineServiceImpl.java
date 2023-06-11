package com.bibon.supercarmagazine.service;

import com.bibon.supercarmagazine.exception.MagazineNotFoundException;
import com.bibon.supercarmagazine.model.Magazine;
import com.bibon.supercarmagazine.repository.MagazineRepository;
import com.bibon.supercarmagazine.service.interfaces.MagazineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MagazineServiceImpl implements MagazineService {
    @Autowired
    private MagazineRepository magazineRepository;

    @Override
    public List<Magazine> getAllMagazines() {
        return magazineRepository.findAll();
    }

    @Override
    public Magazine save(Magazine newMagazine) {
        newMagazine.setDate(LocalDate.now());
        return magazineRepository.save(newMagazine);
    }

    @Override
    public Magazine getMagazineById(Long id) {
        return magazineRepository.findById(id)
                .orElseThrow(() -> new MagazineNotFoundException(id));
    }

    @Override
    public Magazine updateMagazine(Long id, Magazine newMagazine) {
        return magazineRepository.findById(id)
                .map(magazine -> {
                    magazine.setTitle(newMagazine.getTitle());
                    magazine.setImg(newMagazine.getImg());
                    magazine.setDate(newMagazine.getDate());
                    magazine.setContent(newMagazine.getContent());
                    return magazineRepository.save(magazine);
                }).orElseThrow(() -> new MagazineNotFoundException(id));
    }

    @Override
    public void deleteMagazine(Long id) {
        magazineRepository.deleteById(id);
    }
}
