package com.bibon.supercarmagazine.repository;

import com.bibon.supercarmagazine.model.Magazine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MagazineRepository extends JpaRepository<Magazine, Long> {
}
