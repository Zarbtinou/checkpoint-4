package fr.wildcodeschool.back.controllers;


import fr.wildcodeschool.back.entities.Prices;
import fr.wildcodeschool.back.repositories.PricesDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class PricesController {

  @Autowired
  private PricesDAO pricesDAO;

  @GetMapping(value = "/prices")
  public List<Prices> getAll() {return pricesDAO.findAll();}


  @Secured("SUPER_ADMIN")
  @PostMapping("/prices")
  public Prices create(@RequestBody Prices p_prices) throws Exception {
    Prices current = new Prices();
    current.setForWho(p_prices.getForWho());
    current.setPrice(p_prices.getPrice());

    return pricesDAO.save(current);
  }

  @Secured({"SUPER_ADMIN"})
  @PutMapping("/prices/{id}")
  public Prices update(@PathVariable("id") Long p_id, @RequestBody Prices p_prices) throws Exception {
    Prices current = pricesDAO.findById(p_id).get();

    if (p_prices.getForWho() != null) {
      current.setForWho(p_prices.getForWho());
    }

    if (p_prices.getPrice() != null) {
      current.setPrice(p_prices.getPrice());
    }

    return pricesDAO.save(current);
  }

  @Secured({"SUPER_ADMIN"})
  @DeleteMapping("/prices/{id}")
  public boolean delete(@PathVariable("id") Long p_id) throws Exception {

    pricesDAO.deleteById(p_id);

    return true;
  }

}
