package fr.wildcodeschool.back.controllers;

import fr.wildcodeschool.back.entities.Food;
import fr.wildcodeschool.back.entities.FoodDTO;
import fr.wildcodeschool.back.entities.Prices;
import fr.wildcodeschool.back.repositories.FoodDAO;
import fr.wildcodeschool.back.repositories.FoodPicturesDAO;
import fr.wildcodeschool.back.repositories.PricesDAO;
import fr.wildcodeschool.back.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class FoodController {

  @Autowired
  private FoodDAO foodDAO;


  @GetMapping(value="/foods")
  public List<Food> getAll() {return foodDAO.findAll();}

  @Secured("SUPER_ADMIN")
  @PostMapping("/foods")
  public Food create(@RequestBody FoodDTO p_food) throws Exception {

    Food current = new Food();
    current.setName(p_food.getName());
    current.setDescription(p_food.getDescription());
    current.setPrice(p_food.getPrice());
    current.setImg(p_food.getImg());

    return foodDAO.save(current);
  }

  @Secured("SUPER_ADMIN")
  @PutMapping("/foods/{id}")
  public Food update(@PathVariable("id") Long p_id, @RequestBody Food p_food) throws Exception {

    Food current = foodDAO.findById(p_id).get();

    if (p_food.getDescription() != null) {
      current.setDescription(current.getDescription());
    }

    if (p_food.getName() != null) {
      current.setName(current.getName());
    }

    if (p_food.getPrice() != null) {
      current.setPrice(current.getPrice());
    }
    if (p_food.getImg() != null) {
      current.setImg(current.getImg());
    }

    return foodDAO.save(current);
  }


  @DeleteMapping("/foods/{id}")
  public boolean delete(@PathVariable("id") Long p_id) throws Exception{
    foodDAO.deleteById(p_id);
    return true;
  }
}
