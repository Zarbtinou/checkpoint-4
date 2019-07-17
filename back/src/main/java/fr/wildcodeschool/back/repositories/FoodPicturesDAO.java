package fr.wildcodeschool.back.repositories;

import fr.wildcodeschool.back.entities.FoodPictures;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodPicturesDAO extends JpaRepository<FoodPictures, Long> {
}
