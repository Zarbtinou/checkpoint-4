package fr.wildcodeschool.back.repositories;

import fr.wildcodeschool.back.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodDAO extends JpaRepository<Food, Long> {
}
