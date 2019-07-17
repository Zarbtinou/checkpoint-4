package fr.wildcodeschool.back.entities;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Prices {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  private String forWho;
  private Integer price;

  public long getId() {
    return id;
  }

  public String getForWho() {
    return forWho;
  }

  public void setForWho(String forWho) {
    this.forWho = forWho;
  }

  public Integer getPrice() {
    return price;
  }

  public void setPrice(Integer price) {
    this.price = price;
  }
}
