package fr.wildcodeschool.back.repositories;

import fr.wildcodeschool.back.entities.Prices;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PricesDAO extends JpaRepository<Prices, Long> {
}
