package fr.wildcodeschool.back.controllers;

import fr.wildcodeschool.back.entities.FoodPictures;
import fr.wildcodeschool.back.entities.FoodPicturesDTO;
import fr.wildcodeschool.back.repositories.FoodDAO;
import fr.wildcodeschool.back.repositories.FoodPicturesDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class FoodPicturesController {

  @Autowired
  private FoodDAO foodDAO;

  @Autowired
  private FoodPicturesDAO picturesDAO;

  @Secured("SUPER_ADMIN")
  @GetMapping(value="/foods/pictures")
  public List<FoodPictures> getAll() {return picturesDAO.findAll() ;}

  @Secured("SUPER_ADMIN")
  @PostMapping("/foods/pictures")
  public FoodPictures create(@RequestBody FoodPicturesDTO p_pictures) throws Exception {
    FoodPictures current = new FoodPictures();
    current.setUrl(p_pictures.getUrl());
    current.setFood(foodDAO.findById(p_pictures.getFoodId()).get());
    return picturesDAO.save(current);
  }

  @Secured("SUPER_ADMIN")
  @DeleteMapping("/foods/pictures/{id}")
  public boolean delete(@PathVariable("id") Long p_id) throws Exception {
    foodDAO.deleteById(p_id);
    return true;
  }
}
