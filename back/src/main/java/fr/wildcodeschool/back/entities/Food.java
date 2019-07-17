package fr.wildcodeschool.back.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Food {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private Integer price;
  private String description;
  private String img;



  public Food() {}

  public Long getId() {
    return id;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getPrice() {
    return price;
  }

  public void setPrice(Integer price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImg() {
    return img;
  }

  public void setImg(String img) {
    this.img = img;
  }
}
