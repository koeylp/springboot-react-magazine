package com.bibon.supercarmagazine.controller;

import com.bibon.supercarmagazine.model.Magazine;
import com.bibon.supercarmagazine.service.interfaces.MagazineService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/bibon")
@RequiredArgsConstructor
public class MagazineController {

    private final MagazineService magazineService;

    @ApiResponses(value = {
            @ApiResponse(responseCode = "404", description = "When don't find any Magazine"),
            @ApiResponse(responseCode = "200", description = "When find all magazine and return the list of magazines"),
    })
    @Operation(summary = "Get all magazines")
    @GetMapping("/home")
    public List<Magazine> getAllMagazines() {
        return magazineService.getAllMagazines();
    }

    @PostMapping("/magazine")
    public Magazine save(@RequestBody Magazine newMagazine) {
        return magazineService.save(newMagazine);
    }

    @GetMapping("/home/{id}")
    public Magazine getMagazineById(@PathVariable Long id) {
        return magazineService.getMagazineById(id);
    }

    @PutMapping("/dashboard/{id}")
    public Magazine updateMagazine(@PathVariable Long id, @RequestBody Magazine newMagazine) {
        return magazineService.updateMagazine(id, newMagazine);
    }

    @DeleteMapping("/dashboard/delete/{id}")
    public void deleteMagazine(@PathVariable Long id) {
        magazineService.deleteMagazine(id);
    }
}
